import inputStyles from "../../../../../layout/input.module.css";
import React, {useEffect} from "react";
import {useAppDispatch} from "../../../../../app/hooks";
import {useInput} from "../../../../../hooks/useInput";
import {EmptyNotAllowed, MaxLength, MinLength} from "../../../../../domain/types/inputValidator";
import {setBankNameByIndex} from "../../slice";

type props = {
    bankName: string
    index: number
}
export const BankNameForm: React.FC<props> = ({bankName, index}) => {
    const dispatch = useAppDispatch()

    const bankNameInput = useInput(bankName,
        [{type: EmptyNotAllowed}, {type: MinLength, minLength: 10}, {type: MaxLength, maxLength: 50}])

    useEffect(() => {
        if (bankNameInput.isInputValid) {

            dispatch(setBankNameByIndex({index, value: bankNameInput.value}))
        }
    }, [bankNameInput.isInputValid]);

    useEffect(() => {
        bankNameInput.change(bankName)
    }, [bankName]);

    return <label
        className={inputStyles.container}>
        <div
            className={`
                    ${inputStyles.header} 
                    ${bankNameInput.isDirty && !bankNameInput.isInputValid ? inputStyles.error : ""}                
                    ${inputStyles.required}
                    `}>
            Название фелиала банка
        </div>

        <input
            style={{width: "505px"}}
            className={inputStyles.input}
            placeholder="ООО «Масковская промышленная компания»"
            onChange={bankNameInput.onChange}
            onBlur={bankNameInput.onBlur}
            value={bankNameInput.value}
            required={true}/>

    </label>
}