import {useAppDispatch, useAppSelector} from "../../../../../app/hooks";
import {useInput} from "../../../../../hooks/useInput";
import {useFileInput} from "../../../../../hooks/useFileInput";
import inputStyles from "../../../../../layout/input.module.css";
import {
    EmptyNotAllowed,
    Length,
    OnlyDigitAllowed
} from "../../../../../domain/types/inputValidator";
import {setOGRNIP, setScanOGRNIP, setValid} from "./slice";
import {AllowedExtensions, NullIsNotAllowed} from "../../../../../domain/types/fileInputValidators";
import InputMask from "react-input-mask";
import {FileInput} from "../../../../../components/fileInput";
import {useEffect} from "react";

const sizeOfInput = 15
export const OGRNIPFormPart = () => {
    const dispatch = useAppDispatch()
    const oGRNIP = useAppSelector((state) => state.oGRNIPForm.OGRNIP)

    const oGRNIPInput = useInput(
        oGRNIP,
        [{type: EmptyNotAllowed} , {type: Length, length: sizeOfInput}, {type: OnlyDigitAllowed}]
    )

    const scanOGRNIPInput = useFileInput(
        (file: File | null) => dispatch(setScanOGRNIP(file)),
        [{type: NullIsNotAllowed}, {type: AllowedExtensions, extensions: ["jpg", "png", "jpeg"]}]
    )

    useEffect(() => {
        if(oGRNIPInput.isInputValid){
            dispatch(setOGRNIP(oGRNIPInput.value))
        }
    }, [oGRNIPInput.isInputValid]);

    useEffect(() => {
        dispatch(setValid(oGRNIPInput.isInputValid && scanOGRNIPInput.isInputValid))
    }, [oGRNIPInput.isInputValid, scanOGRNIPInput.isInputValid]);

    return <>
        <label
            className={inputStyles.container}>
            <div
                className={`
                    ${inputStyles.header} 
                    ${oGRNIPInput.isDirty && !oGRNIPInput.isInputValid ? inputStyles.error : ""}                
                    ${inputStyles.required}
                    `}>
                ОГРНИП
            </div>

            <InputMask
                className={inputStyles.input}
                mask={"".padEnd(sizeOfInput, "9")}
                placeholder={"".padEnd(sizeOfInput, "x")}
                onChange={oGRNIPInput.onChange}
                onBlur={oGRNIPInput.onBlur}
                value={oGRNIPInput.value}
                required={true}/>

        </label>
        <label
            className={inputStyles.container}>
            <div
                className={`
                    ${inputStyles.header} 
                    ${scanOGRNIPInput.isDirty && !scanOGRNIPInput.isInputValid ? inputStyles.error : ""}                
                    ${inputStyles.required}
                    `}>
                Скан ОГРНИП
            </div>

            <FileInput
                required={true}
                onDrop={scanOGRNIPInput.onDrop}
                onBlur={scanOGRNIPInput.onBlur}
                onChange={scanOGRNIPInput.onChange}
                onDeselect={scanOGRNIPInput.onDeselect}
                value={scanOGRNIPInput.file}/>
        </label>
    </>
}