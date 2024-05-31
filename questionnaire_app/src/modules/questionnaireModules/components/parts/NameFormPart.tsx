import formStyles from "../../../../layout/form.module.css";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {ChangeEvent} from "react";
import {setLongname, setShortname} from "../../store";

export const NameFormPart = () => {
    const dispatch = useAppDispatch()
    const longName = useAppSelector((state) => state.questionnaire.longName)
    const shortName = useAppSelector((state) => state.questionnaire.shortName)


    const changeLongname = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setLongname(e.target.value))
    }

    const changeShortname = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setShortname(e.target.value))
    }

    return <>
        <label className={formStyles.inputBlock}>
                <span className={formStyles.inputHeader}>
                    Наименование полное*
                </span>
            <input
                style={{width: "505px"}}
                required={true}
                placeholder="ООО «Масковская промышленная компания»"
                className={formStyles.input}
                onChange={changeLongname}
                value={longName}/>
        </label>
        <label className={formStyles.inputBlock}>
                <span className={formStyles.inputHeader}>
                    Наименование сокращенное*
                </span>
            <input
                required={true}
                className={formStyles.input}
                style={{width: "315px"}}
                placeholder="ООО «МПК»"
                onChange={changeShortname}
                value={shortName}/>
        </label>
    </>
}