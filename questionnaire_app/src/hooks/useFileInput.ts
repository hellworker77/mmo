import {ChangeEvent, DragEvent, useEffect, useState} from "react";
import {useFileInputValidation} from "./useFileInputValidation";
import {FileInputValidator} from "../domain/types/fileInputValidators";

export const useFileInput = (callback: (value: File | null) => void, validators: FileInputValidator[]) => {
    const [file, setFile] = useState<File | null>(null)
    const [isDirty, setDirty] = useState(false)
    const valid = useFileInputValidation(file, validators)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        selectFile(e.target.files)
    }

    const onDrop = (e: DragEvent<HTMLLabelElement>) => {
        selectFile(e.dataTransfer.files)
    }

    const onDeselect = () => {
        callback(null)
        setFile(null)
    }

    const onBlur = () => {
        setDirty(true)
    }

    const selectFile = (files: FileList | null) => {
        if(files && files.length >= 0){
            setFile(files[0])
        }
    }

    useEffect(() => {
        if(valid.isInputValid){
            callback(file)
        }
    }, [valid.isInputValid]);

    return {
        file,
        onChange,
        onBlur,
        onDrop,
        onDeselect,
        isDirty,
        ...valid
    }
}