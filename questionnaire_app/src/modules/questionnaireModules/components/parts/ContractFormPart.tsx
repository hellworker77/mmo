import formStyles from "../../../../layout/form.module.css";
import {FilePickerAndDropZone} from "../../../../components/FilePickerAndDropZone";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {ChangeEvent} from "react";
import {setScanContract, toggleContractAvailability} from "../../store";

export const ContractFormPart = () => {
    const dispatch = useAppDispatch()
    const scanContract = useAppSelector((state) => state.questionnaire.scanContract)
    const contractAvailability = useAppSelector((state) => state.questionnaire.contractAvailability)


    const selectFile = (file: File | null) => {
        dispatch(setScanContract(file))
    }

    const onToggleContractAvailability = (e: ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked
        if(checked){
            selectFile(null)
        }
        dispatch(toggleContractAvailability(e.target.checked))
    }

    return <>
        <label
            aria-disabled={true}
            className={formStyles.inputBlock}>
                <span className={formStyles.inputHeader}>
                    Скан договора аренды помещения (офиса)
                </span>
            <FilePickerAndDropZone
                disabled={contractAvailability}
                isRequired={!contractAvailability}
                selectFile={selectFile}
                file={scanContract}/>
        </label>
        <label className={formStyles.inputBlock}>
            <div style={{display: "flex", flexDirection: "row", gridRowStart: "2"}}>
                <input
                    checked={contractAvailability}
                    onChange={onToggleContractAvailability}
                    type={"checkbox"}/>
                <span style={{margin: "auto"}}> Нет договора</span>
            </div>
        </label>
    </>
}