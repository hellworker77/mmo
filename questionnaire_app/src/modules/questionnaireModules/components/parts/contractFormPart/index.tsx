import {useAppDispatch, useAppSelector} from "../../../../../app/hooks";
import formStyles from "../../../../../layout/form.module.css";
import {useFileInput} from "../../../../../hooks/useFileInput";
import {setLackContract, setScanContract, setValid} from "./slice";
import {AllowedExtensions, FileInputValidator, NullIsNotAllowed} from "../../../../../domain/types/fileInputValidators";
import inputStyles from "../../../../../layout/input.module.css";
import {FileInput} from "../../../../../components/fileInput";
import {ChangeEvent, useEffect, DragEvent} from "react";
export const ContractFormPart = () => {
    const dispatch = useAppDispatch()
    const contractAvailability = useAppSelector((state) => state.contractForm.lackContract)

    const validators : FileInputValidator[] = [{type: NullIsNotAllowed}, {type: AllowedExtensions, extensions: ["jpg", "png", "jpeg"]}]
    const scanContract = useFileInput((file: File | null) => dispatch(setScanContract(file)), validators)

    useEffect(() => {
        dispatch(setValid(scanContract.isInputValid))
    }, [scanContract.isInputValid]);


    const onChecked = (e: ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked
        if(checked){
            scanContract.setValidators([])
        }else{
            scanContract.setValidators(validators)
        }
        scanContract.onDeselect()
        dispatch(setLackContract(checked))
    }
    
    return <>
        <label
            className={inputStyles.container}>
            <div
                className={`
                    ${inputStyles.header} 
                    ${scanContract.isDirty && !scanContract.isInputValid ? inputStyles.error : ""}                
                    ${contractAvailability? "" : inputStyles.required}
                    `}>
                Скан договора аренды помещения (офиса)
            </div>

            <FileInput
                disabled={contractAvailability}
                required={true}
                onDrop={scanContract.onDrop}
                onBlur={scanContract.onBlur}
                onChange={scanContract.onChange}
                onDeselect={scanContract.onDeselect}
                value={scanContract.file}/>
        </label>
        <label className={formStyles.inputBlock}>
            <div style={{display: "flex", flexDirection: "row", gridRowStart: "2"}}>
                <input
                    checked={contractAvailability}
                    onChange={onChecked}
                    type={"checkbox"}/>
                <span style={{margin: "auto"}}> Нет договора</span>
            </div>
        </label>
    </>
}