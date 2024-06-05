import {useAppDispatch, useAppSelector} from "../../../../../app/hooks";
import {useInput} from "../../../../../hooks/useInput";
import inputStyles from "../../../../../layout/input.module.css";
import {setLongName, setShortName, setValid} from "./slice";
import {useEffect} from "react";
import {EmptyNotAllowed, MaxLength, MinLength} from "../../../../../domain/types/inputValidator";

export const NameFormPart = () => {
    const dispatch = useAppDispatch()

    const longName = useAppSelector((state) => state.nameForm.longName)
    const shortName = useAppSelector((state) => state.nameForm.shortName)

    const longNameInput = useInput(
        longName,
        [{type: EmptyNotAllowed}, {type: MinLength, minLength: 10}, {type: MaxLength, maxLength: 50}]
    )

    const shortNameInput = useInput(
        shortName,
        [{type: EmptyNotAllowed}, {type: MinLength, minLength: 4}, {type: MaxLength, maxLength: 50}]
    )

    useEffect(() => {
        if(longNameInput.isInputValid){
            dispatch(setLongName(longNameInput.value))
        }
    }, [longNameInput.isInputValid]);

    useEffect(() => {
        if(shortNameInput.isInputValid){
            dispatch(setShortName(shortNameInput.value))
        }
    }, [shortNameInput.isInputValid]);

    useEffect(() => {
        longNameInput.change(longName)
    }, [longName]);

    useEffect(() => {
        shortNameInput.change(shortName)
    }, [shortName]);

    useEffect(() => {
        dispatch(setValid(shortNameInput.isInputValid && longNameInput.isInputValid))
    }, [shortNameInput.isInputValid, longNameInput.isInputValid]);

    return <>
        <label className={inputStyles.container}>
            <div
                className={`
                    ${inputStyles.header} 
                    ${longNameInput.isDirty && !longNameInput.isInputValid ? inputStyles.error : ""}
                    ${inputStyles.required}
                    `}>
                Наименование полное
            </div>
            <input
                style={{width: "505px"}}
                required={true}
                placeholder="ООО «Масковская промышленная компания»"
                className={inputStyles.input}
                onBlur={longNameInput.onBlur}
                onChange={longNameInput.onChange}
                value={longNameInput.value}/>
        </label>
        <label className={inputStyles.container}>
                <span
                    className={`
                    ${inputStyles.header} 
                    ${shortNameInput.isDirty && !shortNameInput.isInputValid ? inputStyles.error : ""}
                    ${inputStyles.required}
                    `}>
                    Наименование сокращенное
                </span>
            <input
                required={true}
                className={inputStyles.input}
                style={{width: "315px"}}
                placeholder="ООО «МПК»"
                onBlur={shortNameInput.onBlur}
                onChange={shortNameInput.onChange}
                value={shortNameInput.value}/>
        </label>
    </>
}