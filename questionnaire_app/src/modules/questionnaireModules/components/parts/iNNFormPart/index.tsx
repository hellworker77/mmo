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
import {setINN, setScanINN, setValid} from "./slice";
import {KindOfActivity} from "../../../../../domain/enums/kindOfActivity";
import {findCompanyByINN} from "../../../api/findCompanyByINN";

const sizeOfInput = 10
export const INNFormPart = () => {
    const dispatch = useAppDispatch()
    const iNN = useAppSelector((state) => state.iNNForm.INN)
    const activity = useAppSelector((state) => state.questionnaire.activity)

    const iNNInput = useInput(
        iNN,
        [{type: EmptyNotAllowed} , {type: Length, length: sizeOfInput}, {type: OnlyDigitAllowed}]
    )

    const scanINNInput = useFileInput(
        (file: File | null) => dispatch(setScanINN(file)),
        [{type: NullIsNotAllowed}, {type: AllowedExtensions, extensions: ["jpg", "png", "jpeg"]}]
    )

    useEffect(() => {
        if(iNNInput.isInputValid){
            dispatch(setINN(iNNInput.value))
        }
    }, [iNNInput.isInputValid]);

    useEffect(() => {
        iNNInput.change(iNN)
    }, [iNN]);

    useEffect(() => {
        dispatch(setValid(iNNInput.isInputValid && scanINNInput.isInputValid))
    }, [iNNInput.isInputValid, scanINNInput.isInputValid]);

    useEffect(() => {
        if(iNNInput.isInputValid && iNN && activity === KindOfActivity.LimitedLiabilityCompany){
            dispatch(findCompanyByINN(iNN))
        }
    }, [iNNInput.isInputValid, iNN, activity]);

    return <>
        <label
            className={inputStyles.container}>
            <div
                className={`
                    ${inputStyles.header} 
                    ${iNNInput.isDirty && !iNNInput.isInputValid ? inputStyles.error : ""}                
                    ${inputStyles.required}
                    `}>
                ИНН
            </div>

            <InputMask
                className={inputStyles.input}
                mask={"".padEnd(sizeOfInput, "9")}
                placeholder={"".padEnd(sizeOfInput, "x")}
                onChange={iNNInput.onChange}
                onBlur={iNNInput.onBlur}
                value={iNNInput.value}
                required={true}/>

        </label>
        <label
            className={inputStyles.container}>
            <div
                className={`
                    ${inputStyles.header} 
                    ${scanINNInput.isDirty && !scanINNInput.isInputValid ? inputStyles.error : ""}                
                    ${inputStyles.required}
                    `}>
                Скан ИНН
            </div>

            <FileInput
                required={true}
                onDrop={scanINNInput.onDrop}
                onBlur={scanINNInput.onBlur}
                onChange={scanINNInput.onChange}
                onDeselect={scanINNInput.onDeselect}
                value={scanINNInput.file}/>
        </label>
    </>
}