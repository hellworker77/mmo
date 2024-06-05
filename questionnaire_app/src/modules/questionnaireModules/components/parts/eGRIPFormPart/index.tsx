import {useAppDispatch, useAppSelector} from "../../../../../app/hooks";
import {setScanEGRIP, setValid} from "./slice";
import inputStyles from "../../../../../layout/input.module.css";
import {FileInput} from "../../../../../components/fileInput";
import React, {useEffect} from "react";
import {useFileInput} from "../../../../../hooks/useFileInput";
import {AllowedExtensions, NullIsNotAllowed} from "../../../../../domain/types/fileInputValidators";

export const EGRIPFormPart = () => {
    const dispatch = useAppDispatch()

    const scanEGRIPInput = useFileInput(
        (file: File | null) => dispatch(setScanEGRIP(file)),
        [{type: NullIsNotAllowed}, {type: AllowedExtensions, extensions: ["jpg", "png", "jpeg"]}]
    )

    useEffect(() => {
        dispatch(setValid(scanEGRIPInput.isInputValid))
    }, [scanEGRIPInput.isInputValid]);

    return <label
        className={inputStyles.container}>
        <div
            className={`
                    ${inputStyles.header} 
                    ${scanEGRIPInput.isDirty && !scanEGRIPInput.isInputValid ? inputStyles.error : ""}                
                    ${inputStyles.required}
                    `}>
            Скан выписки из ЕГРИП (не старше 3 месяцев)
        </div>

        <FileInput
            required={true}
            onDrop={scanEGRIPInput.onDrop}
            onBlur={scanEGRIPInput.onBlur}
            onChange={scanEGRIPInput.onChange}
            onDeselect={scanEGRIPInput.onDeselect}
            value={scanEGRIPInput.file}/>
    </label>
}