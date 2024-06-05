import {useEffect, useState} from "react";
import {
    EmptyNotAllowed,
    InputValidator,
    Length,
    MaxLength,
    MinLength,
    OnlyDateAllowed,
    OnlyDigitAllowed
} from "../domain/types/inputValidator";

export const useInputValidation = (value: string, validators: InputValidator[]) => {
    const [isEmpty, setEmptyError] = useState(false)
    const [isInvalidDate, setInvalidDateError] = useState(false)
    const [isNotOnlyDigit, setNotOnlyDigit] = useState(false)
    const [isToShort, setMinLengthError] = useState(false)
    const [isToLong, setMaxLengthError] = useState(false)
    const [isWrongLength, setWrongLength] = useState(false)
    const [isInputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (let validator of validators) {
            switch (validator.type) {
                case EmptyNotAllowed:
                    value.length === 0 ? setEmptyError(true) : setEmptyError(false)
                    break;
                case MinLength:
                    value.length >= validator.minLength ? setMinLengthError(false) : setMinLengthError(true)
                    break
                case MaxLength:
                    value.length <= validator.maxLength ? setMaxLengthError(false) : setMaxLengthError(true)
                    break
                case Length:
                    value.length === validator.length ? setWrongLength(false) : setWrongLength(true)
                    break
                case OnlyDigitAllowed:
                    /^\d+$/.test(value) ? setNotOnlyDigit(false) : setNotOnlyDigit(true)
                    break
                case OnlyDateAllowed:
                    const dateParts = value.split('.')
                    if (dateParts.length === 3) {
                        const day = parseInt(dateParts[0])
                        const month = parseInt(dateParts[1])
                        const year = parseInt(dateParts[2])

                        const dateObj = new Date(year, month - 1, day);
                        if (dateObj.getFullYear() === year &&
                            dateObj.getMonth() === month - 1 &&
                            dateObj.getFullYear() > 1950 &&
                            dateObj.getTime() < Date.now() &&
                            dateObj.getDate() === day) {
                            setInvalidDateError(false)
                            break
                        }
                    }
                    setInvalidDateError(true)
                    break
            }
        }
    }, [value])

    useEffect(() => {
        const isValid = !(
            isEmpty ||
            isToShort ||
            isToLong ||
            isInvalidDate ||
            isWrongLength ||
            isNotOnlyDigit
        )
        setInputValid(isValid)
    }, [isEmpty, isToLong, isToShort, isInvalidDate, isWrongLength, isNotOnlyDigit]);

    return {
        isEmpty,
        isToShort,
        isToLong,
        isInvalidDate,
        isWrongLength,
        isNotOnlyDigit,
        isInputValid
    }
}