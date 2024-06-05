import {useAppSelector} from "../app/hooks";
import {useEffect, useState} from "react";
import {KindOfActivity} from "../domain/enums/kindOfActivity";

export const useQuestionnaireValidation = () => {
    const [isValid, setIsValid] = useState(false)

    const activity = useAppSelector((state) => state.questionnaire.activity)
    const iNNIsValid = useAppSelector((state) => state.iNNForm.isValid)
    const oGRNIsValid = useAppSelector((state) => state.oGRNForm.isValid)
    const oGRNIPIsValid = useAppSelector((state) => state.oGRNIPForm.isValid)
    const eGRIPIsValid = useAppSelector((state) => state.eGRIPForm.isValid)
    const contractIsValid = useAppSelector((state) => state.contractForm.isValid)
    const registrationDateIsValid = useAppSelector((state) => state.registrationDataForm.isValid)
    const nameIsValid = useAppSelector((state) => state.nameForm.isValid)

    useEffect(() => {
        switch (activity){
            case KindOfActivity.IndividualEntrepreneur:
                setIsValid(iNNIsValid && oGRNIPIsValid && registrationDateIsValid && eGRIPIsValid && contractIsValid)
                break
            case KindOfActivity.LimitedLiabilityCompany:
                setIsValid(iNNIsValid && oGRNIsValid && registrationDateIsValid && eGRIPIsValid && contractIsValid && nameIsValid)
                break
            default:
                setIsValid(false)
                break
        }
    }, [activity, iNNIsValid, oGRNIsValid, oGRNIPIsValid, eGRIPIsValid, contractIsValid, registrationDateIsValid, nameIsValid]);

    return{
        isValid
    }
}