import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import React, {ChangeEvent} from "react";
import {KindOfActivity} from "../../../domain/enums/kindOfActivity";
import formStyles from "../../../layout/form.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {setActivity} from "../store";
import {LimitedLiabilityCompanyForm} from "./LimitedLiabilityCompanyForm";
import {IndividualEntrepreneurForm} from "./IndividualEntrepreneurForm";

export const QuestionnaireForm = () => {
    const activity = useAppSelector((state) => state.questionnaire.activity)
    const dispatch = useAppDispatch()

    const notSelectedOption = 'Not selected'
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        let value = event.target.value

        let activity: KindOfActivity | null = value === notSelectedOption ? null : parseInt(value)

        dispatch(setActivity(activity))
    };
    const renderSubQuestionnaire = () => {
        switch (activity) {
            case KindOfActivity.LimitedLiabilityCompany:
                return <LimitedLiabilityCompanyForm />
            case KindOfActivity.IndividualEntrepreneur:
                return <IndividualEntrepreneurForm />
            default:
                return null
        }
    }
    return <form>
        <div className={formStyles.header}>
            Форма собственности
        </div>
        <div>
            <div className={formStyles.inputBlock}>
                <div className={formStyles.inputHeader}>
                    Вид деятельности*
                </div>
                <select onChange={handleChange}
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
        {renderSubQuestionnaire()}
        {
            activity !== null ?
                <div className={formStyles.submitContainer}>
                    <input
                        type={'submit'}
                        value={"Далее"}/>
                </div> : null
        }
    </form>
}