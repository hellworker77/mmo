import React, {useEffect} from "react";
import {useAppDispatch} from "../../../../../app/hooks";
import {useInput} from "../../../../../hooks/useInput";
import { setCorrespondentAccountByIndex} from "../../slice";
import inputStyles from "../../../../../layout/input.module.css";
import InputMask from "react-input-mask";
import {EmptyNotAllowed, Length, OnlyDigitAllowed} from "../../../../../domain/types/inputValidator";

type props = {
    correspondentAccount: string
    index: number
}
const sizeOfInput = 20
export const CorrespondentAccountForm: React.FC<props> = ({correspondentAccount, index}) => {
    const dispatch = useAppDispatch()

    const correspondentAccountInput = useInput(correspondentAccount,
        [{type: EmptyNotAllowed}, {type: Length, length: sizeOfInput}, {type: OnlyDigitAllowed}])

    useEffect(() => {
        if (correspondentAccountInput.isInputValid) {
            dispatch(setCorrespondentAccountByIndex({index, value: correspondentAccountInput.value}))
        }
    }, [correspondentAccountInput.isInputValid]);

    useEffect(() => {
        correspondentAccountInput.change(correspondentAccount)
    }, [correspondentAccount]);

    return <label
        className={inputStyles.container}>
        <div
            className={`
                    ${inputStyles.header} 
                    ${correspondentAccountInput.isDirty && !correspondentAccountInput.isInputValid ? inputStyles.error : ""}                
                    ${inputStyles.required}
                    `}>
            Корреспондентский счёт
        </div>

        <InputMask
            style={{width: "240px"}}
            className={inputStyles.input}
            mask={"".padEnd(sizeOfInput, "9")}
            placeholder={"".padEnd(sizeOfInput, "x")}
            onChange={correspondentAccountInput.onChange}
            onBlur={correspondentAccountInput.onBlur}
            value={correspondentAccountInput.value}
            required={true}/>

    </label>
}