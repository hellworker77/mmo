import {useAppDispatch} from "../../../../../app/hooks";
import {useInput} from "../../../../../hooks/useInput";
import {setCheckingAccountByIndex} from "../../slice";
import inputStyles from "../../../../../layout/input.module.css";
import InputMask from "react-input-mask";
import React, {useEffect} from "react";
import {EmptyNotAllowed, Length, OnlyDigitAllowed} from "../../../../../domain/types/inputValidator";

type props = {
    checkingAccount: string
    index: number
}

const sizeOfInput = 20
export const CheckingAccountForm: React.FC<props> = ({checkingAccount, index}) => {
    const dispatch = useAppDispatch()

    const checkingAccountInput = useInput(checkingAccount,
        [{type: EmptyNotAllowed}, {type: Length, length: sizeOfInput}, {type: OnlyDigitAllowed}])

    useEffect(() => {
        if (checkingAccountInput.isInputValid) {
            dispatch(setCheckingAccountByIndex({index, value: checkingAccountInput.value}))
        }
    }, [checkingAccountInput.isInputValid]);

    return <label
        className={inputStyles.container}>
        <div
            className={`
                    ${inputStyles.header} 
                    ${checkingAccountInput.isDirty && !checkingAccountInput.isInputValid ? inputStyles.error : ""}                
                    ${inputStyles.required}
                    `}>
            Расчетный счёт
        </div>

        <InputMask
            style={{width: "240px"}}
            className={inputStyles.input}
            mask={"".padEnd(sizeOfInput, "9")}
            placeholder={"".padEnd(sizeOfInput, "x")}
            onChange={checkingAccountInput.onChange}
            onBlur={checkingAccountInput.onBlur}
            value={checkingAccountInput.value}
            required={true}/>

    </label>
}