import {useInput} from "../../../../../hooks/useInput";
import React, {useEffect} from "react";
import {useAppDispatch} from "../../../../../app/hooks";
import {setBikByIndex} from "../../slice";
import inputStyles from "../../../../../layout/input.module.css";
import InputMask from "react-input-mask";
import {EmptyNotAllowed, Length, OnlyDigitAllowed} from "../../../../../domain/types/inputValidator";
import {findFinancialCredentialByBIK} from "../../../api/findFinancialCredentialByBIK";

type props = {
    bik: string
    index: number
}
const sizeOfInput = 9
export const BikForm: React.FC<props> = ({bik, index}) => {
    const dispatch = useAppDispatch()

    const bikInput = useInput(bik,
        [{type: EmptyNotAllowed}, {type: Length, length: sizeOfInput}, {type: OnlyDigitAllowed}])

    useEffect(() => {
        if (bikInput.isInputValid) {
            dispatch(setBikByIndex({index, value: bikInput.value}))
            dispatch(findFinancialCredentialByBIK({bik: bikInput.value, index: index}))
        }
    }, [bikInput.isInputValid]);


    return <label
        className={inputStyles.container}>
        <div
            className={`
                    ${inputStyles.header} 
                    ${bikInput.isDirty && !bikInput.isInputValid ? inputStyles.error : ""}                
                    ${inputStyles.required}
                    `}>
            Бик
        </div>

        <InputMask
            className={inputStyles.input}
            mask={"".padEnd(sizeOfInput, "9")}
            placeholder={"".padEnd(sizeOfInput, "x")}
            onChange={bikInput.onChange}
            onBlur={bikInput.onBlur}
            value={bikInput.value}
            required={true}/>

    </label>
}