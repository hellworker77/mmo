import React, {ChangeEvent, DragEvent} from "react";
import fileSelectorStyles from "../layout/fileSelector.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpFromBracket, faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";

type Props = {
    isRequired: boolean
    selectFile: (file: File | null) => void,
    file: File | null
    disabled?: boolean
}
export const FilePickerAndDropZone: React.FC<Props> = ({selectFile, file, isRequired, disabled}) => {
    const isFileSelected = file !== null
    const handleSelectFile = (fileList: FileList | null) => {
        if (fileList && fileList.length > 0) {
            selectFile(fileList[0])
        }
    }
    const handleFileChanged = (event: ChangeEvent<HTMLInputElement>) => {
        handleSelectFile(event.target.files)
    }
    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.stopPropagation();
        event.preventDefault()
    }
    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.stopPropagation()
        event.preventDefault()
        if(!isFileSelected && !disabled) {
            handleSelectFile(event.dataTransfer.files)
        }
    }
    const handleDeselectFile = () => {
        if(isFileSelected){
            selectFile(null)
        }
    }

    return <div
        data-file-selected={isFileSelected}
        data-disabled={disabled}
        className={fileSelectorStyles.container}
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        <label>
            {isFileSelected ?
                <div className={fileSelectorStyles.iconContainer}>
                    <FontAwesomeIcon
                        data-type={'check'}
                        className={fileSelectorStyles.icon}
                        icon={faCheck}
                        size={"xl"}/>
                </div> : null
            }
            <div className={fileSelectorStyles.textContainer}>
                <span className={fileSelectorStyles.text}>
                    {
                        file !== null ? file.name : "Выберите или перетащите файл"
                    }
                </span>
            </div>
            <input
                required={isRequired}
                type={"file"}
                onChange={handleFileChanged}
                onDrop={handleDrop}
                disabled={isFileSelected || disabled}/>
            <div className={fileSelectorStyles.iconContainer}>
                <FontAwesomeIcon
                    className={fileSelectorStyles.icon}
                    data-type={isFileSelected ? "xMark" : "drop"}
                    icon={isFileSelected ? faXmark : faArrowUpFromBracket}
                    size={"xl"}
                    onClick={handleDeselectFile}/>
            </div>
        </label>
    </div>
}