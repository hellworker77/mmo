import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import React, {ChangeEvent, FormEvent} from "react";
import {KindOfActivity} from "../../../domain/enums/kindOfActivity";
import formStyles from "../../../layout/form.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {setActivity} from "./slice";
import {LimitedLiabilityCompanyForm} from "./limitedLiabilityCompanyForm";
import {IndividualEntrepreneurForm} from "./individualEntrepreneurForm";
import {useQuestionnaireValidation} from "../../../hooks/useQuestionnaireValidation";
import {useNavigate} from "react-router-dom";

const notSelectedOption = 'Not selected'
export const QuestionnaireForm = () => {
    const activity = useAppSelector((state) => state.questionnaire.activity)
    const dispatch = useAppDispatch()
    const validator = useQuestionnaireValidation()
    const navigate = useNavigate()
    const onActivityChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value

        const activity: KindOfActivity | null = value === notSelectedOption ? null : parseInt(value)

        dispatch(setActivity(activity))
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(validator.isValid){
            navigate("/requisites")
        }
    }

    return <form onSubmit={onSubmit}>
        <div className={formStyles.header}>
            Форма собственности
        </div>
        <div>
            <div className={formStyles.inputBlock}>
                <div className={formStyles.inputHeader}>
                    Вид деятельности*
                </div>
                <select onChange={onActivityChange}
                        className={formStyles.combobox}
                        value={activity ?? notSelectedOption}>
                    <option value={notSelectedOption}>Не выбрано</option>
                    <option value={KindOfActivity.IndividualEntrepreneur}>Индивидуальный предприниматель (ИП)</option>
                    <option value={KindOfActivity.LimitedLiabilityCompany}>Общество с ограниченой отвественностью (ООО)
                    </option>
                </select>
            </div>
        </div>
        {
            activity !== null ?
                <FontAwesomeIcon
                    size={'10x'}
                    style={{margin: "50px 0 50px 0", color: "#808080"}}
                    icon={faArrowDown}/> : null
        }
        {activity === KindOfActivity.IndividualEntrepreneur ? <IndividualEntrepreneurForm/> : null}
        {activity === KindOfActivity.LimitedLiabilityCompany ? <LimitedLiabilityCompanyForm/> : null}
        {
            validator.isValid ?
                <div
                    className={formStyles.submitContainer}>
                    <input
                        type={'submit'}
                        value={"Далее"}/>
                </div> : null
        }

    </form>
}