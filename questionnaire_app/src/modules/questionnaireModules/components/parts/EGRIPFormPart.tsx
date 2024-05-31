import formStyles from "../../../../layout/form.module.css";
import {FilePickerAndDropZone} from "../../../../components/FilePickerAndDropZone";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {setScanEGRIP} from "../../store";

export const EGRIPFormPart = () => {
    const dispatch = useAppDispatch()
    const scanEGRIP = useAppSelector((state) => state.questionnaire.scanEGRIP)

    const selectFile = (file: File | null) => {
        dispatch(setScanEGRIP(file))
    }

    return <>
        <label className={formStyles.inputBlock}>
                <span className={formStyles.inputHeader}>
                    Скан выписки из ЕГРИП (не старше 3 месяцев)*
                </span>
            <FilePickerAndDropZone
                isRequired={true}
                selectFile={selectFile}
                file={scanEGRIP}/>
        </label>
    </>
}