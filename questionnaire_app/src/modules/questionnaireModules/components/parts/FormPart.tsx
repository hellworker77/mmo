import {useAppDispatch} from "../../../../app/hooks";
import formStyles from "../../../../layout/form.module.css";
import {FilePickerAndDropZone} from "../../../../components/FilePickerAndDropZone";
import InputMask from "react-input-mask";
import React, {ChangeEvent, useEffect, useState} from "react";
import {UnknownAction} from "redux";

type Props = {
    name: "ИНН" | "ОГРН" | "ОГРНИП"
    valueSize: number
    scan: File | null
    setValueCallback: (value: number) => void
    scanCallback: (file: File | null) => UnknownAction
    actualValue: number

}
export const FormPart: React.FC<Props> = ({
                                                    name,
                                                    valueSize,
                                                    scan,
                                                    setValueCallback,
                                                    scanCallback,
                                                    actualValue
                                                }) => {

    const dispatch = useAppDispatch()
    const [inputTemp, setInputTemp] = useState("")
    const regex = /^[1-9]$/;



    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputTemp(e.target.value.replace(/_/g, ''))
    }

    const setValueFromTemp = () => {
        if (inputTemp.length === valueSize && regex.test(inputTemp.charAt(0))) {
            setValueCallback(parseInt(inputTemp))
            return
        }
        setInputTemp("")
        alert(`Некоректный ввод ${name}`)
    }

    return <>
        <label
            className={formStyles.inputBlock}>
            <span className={formStyles.inputHeader}>
                {name}*
            </span>

            <InputMask
                onBlur={setValueFromTemp}
                className={formStyles.input}
                required={true}
                value={inputTemp}
                mask={"".padEnd(valueSize, "9")}
                placeholder={"".padEnd(valueSize, "x")}
                onChange={onChange}/>

        </label>
        <label className={formStyles.inputBlock}>
            <span className={formStyles.inputHeader}>
                Скан ОГРНИП*
            </span>

            <FilePickerAndDropZone
                isRequired={true}
                selectFile={(file: File | null) => {
                    dispatch(scanCallback(file))
                }}
                file={scan}/>
        </label>
    </>
}