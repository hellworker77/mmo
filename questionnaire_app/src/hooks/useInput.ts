import {ChangeEvent, useEffect, useState} from "react";
import {InputValidator} from "../domain/types/inputValidator";
import {useInputValidation} from "./useInputValidation";

export const useInput = (initialValue: string, validators: InputValidator[]) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useInputValidation(value, validators)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setDirty(true)
    }

    const change = (value: string) => {
        if(value !== undefined  && value !== null){
            setValue(value)
        }
    }



    return {
        value,
        onChange,
        onBlur,
        change,
        isDirty,
        ...valid
    }
}