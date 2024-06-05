import formStyles from "../../../../layout/form.module.css";
import {NameFormPart} from "../parts/nameFormPart";
import {EGRIPFormPart} from "../parts/eGRIPFormPart";
import {ContractFormPart} from "../parts/contractFormPart";
import {INNFormPart} from "../parts/iNNFormPart";
import {OGRNFormPart} from "../parts/oGRNFormPart";
import {RegistrationDataFormPart} from "../parts/registractionFormPart";
import React from "react";

export const LimitedLiabilityCompanyForm = () => {

    return <div>
        <div className={formStyles.header}>
            Общество с ограниченой ответсвенностью (ООО)
        </div>
        <div className={formStyles.inputsContainer}>
            <NameFormPart />
            <RegistrationDataFormPart />
        </div>
        <div className={formStyles.inputsContainer}>
            <INNFormPart />
            <OGRNFormPart />
        </div>
        <div className={formStyles.inputsContainer}>
            <EGRIPFormPart />
            <ContractFormPart />
        </div>
    </div>
}