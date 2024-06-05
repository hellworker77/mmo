import formStyles from "../../../layout/form.module.css";
import React, {FormEvent, MouseEvent} from "react";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {Requisite} from "./requisite";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useRequisitesValidation} from "../../../hooks/useRequisitesValidation";
import {addNote} from "./slice";
import {KindOfActivity} from "../../../domain/enums/kindOfActivity";
import {createIE} from "../../questionnaireModules/api/createIE";
import {getIERequest} from "../../../utilities/getIERequest";
import {getLLCRequest} from "../../../utilities/getLLCRequest";
import {createLLC} from "../../questionnaireModules/api/createLLC";

export const RequisitesForm = () => {
    const dispatch = useAppDispatch()
    const activity = useAppSelector(state => state.questionnaire.activity)
    const notes = useAppSelector(state => state.requisites.notes)
    const longName = useAppSelector(state => state.nameForm.longName)
    const shortName = useAppSelector(state => state.nameForm.shortName)
    const iNN = useAppSelector(state => state.iNNForm.INN)
    const scanINN = useAppSelector(state => state.iNNForm.scanINN)
    const oGRNIP = useAppSelector(state => state.oGRNIPForm.OGRNIP)
    const scanOGRNIP = useAppSelector(state => state.oGRNIPForm.scanOGRNIP)
    const scanEGRIP = useAppSelector(state => state.eGRIPForm.scanEGRIP)
    const scanContract = useAppSelector(state => state.contractForm.scanContract)
    const lackContract = useAppSelector(state => state.contractForm.lackContract)
    const oGRN = useAppSelector(state => state.oGRNForm.OGRN)
    const scanOGRN = useAppSelector(state => state.oGRNForm.scanOGRN)
    const registrationDate = useAppSelector(state => state.registrationDataForm.registrationDate)

    const validator = useRequisitesValidation(notes)

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        switch (activity) {
            case KindOfActivity.LimitedLiabilityCompany:
                dispatch(createLLC(getLLCRequest(longName, shortName, iNN, scanINN, oGRN, scanOGRN, registrationDate, scanEGRIP, scanContract, lackContract, notes)))
                break;
            case KindOfActivity.IndividualEntrepreneur:
                dispatch(createIE(getIERequest(iNN, scanINN, oGRNIP, scanOGRNIP, registrationDate, scanEGRIP, scanContract, lackContract, notes)))
                break;
        }
    }

    const onAddNote = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(addNote())
    }

    return <form onSubmit={onSubmit}>
        <div className={formStyles.header}>
            Банковские реквизиты
        </div>
        {notes.map((financialCredential, index) =>
            <Requisite
                key={index}
                index={index}
                financialCredential={financialCredential}/>
        )}
        {
            validator.isValid ? <>
                <div className={formStyles.addNote}>
                    <button
                        onClick={onAddNote}>
                        <FontAwesomeIcon
                            icon={faPlus}
                            size={"xl"}/>
                        <span>Добавить еще один банк</span>
                    </button>
                </div>
                <div
                    className={formStyles.submitContainer}>
                    <input
                        type={'submit'}
                        value={"Отправить"}/>
                </div>
            </> : null
        }
    </form>
}
