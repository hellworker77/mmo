import formStyles from "../../../../layout/form.module.css";
import {EGRIPFormPart} from "../parts/eGRIPFormPart";
import {INNFormPart} from "../parts/iNNFormPart";
import {OGRNIPFormPart} from "../parts/oGRNIPFormPart";
import {ContractFormPart} from "../parts/contractFormPart";
import {RegistrationDataFormPart} from "../parts/registractionFormPart";

export const IndividualEntrepreneurForm = () => {

    return <div>
        <div className={formStyles.header}>
            Индивидуальный предприниматель (ИП)
        </div>
        <div className={formStyles.inputsContainer}>
            <INNFormPart />
            <OGRNIPFormPart />
        </div>
        <div className={formStyles.inputsContainer}>
            <RegistrationDataFormPart />
            <EGRIPFormPart />
            <ContractFormPart />
        </div>

    </div>
}