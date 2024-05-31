import formStyles from "../../../../layout/form.module.css";
import {useAppDispatch} from "../../../../app/hooks";
import InputMask from "react-input-mask";
import React, {ChangeEvent, useState} from "react";
import {setRegisterDate} from "../../store";

export const RegistrationDataFormPart = () => {
    const dispatch = useAppDispatch()

    const [dateString, setDateString] = useState<string>("")
    const changeDate = (e: ChangeEvent<HTMLInputElement>) => {
        setDateString(e.target.value.replace(/_/g, ''))
    }

    const setDate = () => {
        let splitted = dateString.split('.')
        if(splitted.length === 3)
        {
            const day = parseInt(splitted[0])
            const month = parseInt(splitted[1])
            const year = parseInt(splitted[2])

            const dateObj = new Date(year, month- 1, day);
            if(dateObj.getFullYear() === year &&
                dateObj.getTime() < Date.now() &&
                dateObj.getMonth() === month - 1 &&
                dateObj.getDate() === day){
                setRegisterDate(dateObj)
                return
            }
        }
        setDateString("")
        alert("Некоректный ввод даты регистрации")
    }

    return <>
        <label className={formStyles.inputBlock}>
                <span className={formStyles.inputHeader}>
                    Дата регистрации*
                </span>

            <InputMask
                onBlur={setDate}
                className={formStyles.input}
                value={dateString}
                required={true}
                mask="99.99.9999"
                placeholder="дд.мм.гггг"
                onChange={changeDate}
            />
        </label>
    </>
}