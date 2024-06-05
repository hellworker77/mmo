import React, {ChangeEvent, DragEvent} from "react";
import inputFileStyles from "../layout/inputFile.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpFromBracket, faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";

type Props = {
    onBlur: () => void
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onDrop: (e: DragEvent<HTMLLabelElement>) => void
    onDeselect: () => void
    value: File | null
    disabled?: boolean
    required?: boolean
}
export const FileInput: React.FC<Props> = ({onBlur, onChange, onDrop, onDeselect, value, disabled, required}) => {
    const isFileSelected = value !== null

    const onDragOver = (event: DragEvent<HTMLLabelElement>) => {
        event.stopPropagation();
        event.preventDefault()
    }

    const onDropLabel = (e: DragEvent<HTMLLabelElement>) => {
        e.stopPropagation();
        e.preventDefault()
        if(!disabled){
            onDrop(e)
        }
    }

    return <label
        onDragOver={onDragOver}
        onDrop={onDropLabel}
        onClick={onBlur}
        data-disabled={disabled}
        data-file-selected={isFileSelected}
        className={inputFileStyles.container}>
        {isFileSelected ?
            <div className={`${inputFileStyles.iconContainer} ${inputFileStyles.check}`}>
                <FontAwesomeIcon
                    className={inputFileStyles.icon}
                    icon={faCheck}
                    size={"lg"}/>
            </div> : null
        }
        <div className={inputFileStyles.tip}>
            {
                value ? value.name : "Выберите или перетащите файл"
            }
        </div>
        <input
            required={required}
            type={"file"}
            onChange={onChange}
            disabled={isFileSelected || disabled}
        />
        <div
            className={`${inputFileStyles.iconContainer} ${isFileSelected ? inputFileStyles.xMark : inputFileStyles.drop}`}>
            <FontAwesomeIcon
                className={inputFileStyles.icon}
                icon={isFileSelected ? faXmark : faArrowUpFromBracket}
                size={"lg"}
                onClick={onDeselect}/>
        </div>
    </label>
}