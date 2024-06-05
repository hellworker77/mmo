import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../../../app/hooks";
import InputMask from "react-input-mask";
import {FileInput} from "../../../../../components/fileInput";
import {useInput} from "../../../../../hooks/useInput";
import {useFileInput} from "../../../../../hooks/useFileInput";
import inputStyles from "../../../../../layout/input.module.css";
import {AllowedExtensions, NullIsNotAllowed} from "../../../../../domain/types/fileInputValidators";
import {
    EmptyNotAllowed,
    Length,
    OnlyDigitAllowed
} from "../../../../../domain/types/inputValidator";
import {setOGRN, setScanOGRN, setValid} from "./slice";

const sizeOfInput = 13
export const OGRNFormPart = () => {
    const dispatch = useAppDispatch()
    const oGRN = useAppSelector((state) => state.oGRNForm.OGRN)

    const oGRNInput = useInput(
        oGRN,
        [{type: EmptyNotAllowed} , {type: Length, length: sizeOfInput}, {type: OnlyDigitAllowed}]
    )

    const scanOGRNInput = useFileInput(
        (file: File | null) => dispatch(setScanOGRN(file)),
        [{type: NullIsNotAllowed}, {type: AllowedExtensions, extensions: ["jpg", "png", "jpeg"]}]
    )

    useEffect(() => {
        if(oGRNInput.isInputValid){
            dispatch(setOGRN(oGRNInput.value))
        }
    }, [oGRNInput.isInputValid]);

    useEffect(() => {
        oGRNInput.change(oGRN)
    }, [oGRN]);

    useEffect(() => {
        dispatch(setValid(oGRNInput.isInputValid && scanOGRNInput.isInputValid))
    }, [oGRNInput.isInputValid, scanOGRNInput.isInputValid]);

    return <>
        <label
            className={inputStyles.container}>
            <div
                className={`
                    ${inputStyles.header} 
                    ${oGRNInput.isDirty && !oGRNInput.isInputValid ? inputStyles.error : ""}                
                    ${inputStyles.required}
                    `}>
                ОГРН
            </div>

            <InputMask
                className={inputStyles.input}
                mask={"".padEnd(sizeOfInput, "9")}
                placeholder={"".padEnd(sizeOfInput, "x")}
                onChange={oGRNInput.onChange}
                onBlur={oGRNInput.onBlur}
                value={oGRNInput.value}
                required={true}/>

        </label>
        <label
            className={inputStyles.container}>
            <div
                className={`
                    ${inputStyles.header} 
                    ${scanOGRNInput.isDirty && !scanOGRNInput.isInputValid ? inputStyles.error : ""}                
                    ${inputStyles.required}
                    `}>
                Скан ОГРН
            </div>

            <FileInput
                required={true}
                onDrop={scanOGRNInput.onDrop}
                onBlur={scanOGRNInput.onBlur}
                onChange={scanOGRNInput.onChange}
                onDeselect={scanOGRNInput.onDeselect}
                value={scanOGRNInput.file}/>
        </label>
    </>
}