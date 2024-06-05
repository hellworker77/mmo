import {useEffect, useState} from "react";
import {AllowedExtensions, FileInputValidator, MaxSize, NullIsNotAllowed} from "../domain/types/fileInputValidators";

export const useFileInputValidation = (file: File | null, _validators: FileInputValidator[]) => {
    const [validators, setValidators] = useState(_validators)

    const [isNotAllowedExtension, setNotAllowedExtensionError] = useState(false)
    const [isNull, setNullError] = useState(false)
    const [isSizeOverflow, setSizeOverflowError] = useState(false)
    const [isInputValid, setInputValid] = useState(false)

    useEffect(() => {
        setNotAllowedExtensionError(false)
        setNullError(false)
        setSizeOverflowError(false)

        for(const validator of validators){
            switch (validator.type){
                case AllowedExtensions:
                    const filename = file?.name ?? ""
                    const lastDotIndex = filename.lastIndexOf('.')
                    let extension = ''
                    if(lastDotIndex !== -1) {
                        extension = filename.substring(lastDotIndex + 1)
                    }
                    if(validator.extensions.find(x=>x === extension)){
                        setNotAllowedExtensionError(false)
                    }
                    else {
                        setNotAllowedExtensionError(true)
                    }
                    break
                case MaxSize:
                    const fileSize = file?.size ?? 0
                    fileSize <= validator.size ? setSizeOverflowError(false): setSizeOverflowError(true)
                    break
                case NullIsNotAllowed:
                    file ? setNullError(false) : setNullError(true)
                    break
            }
        }
    }, [file, validators]);

    useEffect(() => {
        setInputValid(!(isNotAllowedExtension || isNull || isSizeOverflow))
    }, [isNotAllowedExtension, isNull, isSizeOverflow]);

    return {
        isNotAllowedExtension,
        isSizeOverflow,
        isNull,
        isInputValid,
        setValidators
    }
}