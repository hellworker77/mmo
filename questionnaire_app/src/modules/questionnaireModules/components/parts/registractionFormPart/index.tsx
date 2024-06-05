import {useAppDispatch, useAppSelector} from "../../../../../app/hooks";
import InputMask from "react-input-mask";
import {useInput} from "../../../../../hooks/useInput";
import {EmptyNotAllowed, Length, OnlyDateAllowed} from "../../../../../domain/types/inputValidator";
import {setRegistrationDateAsString, setValid} from "./slice";
import inputStyles from "../../../../../layout/input.module.css";
import {useEffect} from "react";

export const RegistrationDataFormPart = () => {
    const dispatch = useAppDispatch()
    const registrationDate = useAppSelector((state) => state.registrationDataForm.registrationDate)

    function formatDateToDDMMYYYY(date: Date | null): string {
        if (!date) {
            return ""
        }
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}.${month}.${year}`;
    }

    const registrationDateInput = useInput(
        formatDateToDDMMYYYY(registrationDate),
        [{type: EmptyNotAllowed}, {type: Length, length: 10}, {type: OnlyDateAllowed}]
    )

    useEffect(() => {
        if(registrationDateInput.isInputValid){
            dispatch(setRegistrationDateAsString(registrationDateInput.value))
        }
    }, [registrationDateInput.isInputValid]);

    useEffect(() => {
        registrationDateInput.change(formatDateToDDMMYYYY(registrationDate))
    }, [registrationDate]);

    useEffect(() => {
        dispatch(setValid(registrationDateInput.isInputValid))
    }, [registrationDateInput.isInputValid]);

    return <>
        <label className={inputStyles.container}>
            <div
                className={`
                    ${inputStyles.header} 
                    ${registrationDateInput.isDirty && !registrationDateInput.isInputValid ? inputStyles.error : ""}
                    ${inputStyles.required}
                    `}>
                Дата регистрации
            </div>

            <InputMask
                className={inputStyles.input}
                required={true}
                mask="99.99.9999"
                placeholder="дд.мм.гггг"
                onBlur={registrationDateInput.onBlur}
                onChange={registrationDateInput.onChange}
                value={registrationDateInput.value}
            />
        </label>
    </>
}