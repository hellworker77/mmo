import {useAppSelector} from "../../../app/hooks";
import formStyles from "../../../layout/form.module.css";
import {NameFormPart} from "./parts/NameFormPart";
import {RegistrationDataFormPart} from "./parts/RegistrationDataFormPart";
import {FormPart} from "./parts/FormPart";
import {INNLength, OGRNLength} from "../../../domain/constants/filedConstants";
import {EGRIPFormPart} from "./parts/EGRIPFormPart";
import {ContractFormPart} from "./parts/ContractFormPart";
import {setINN, setOGRN, setScanINN, setScanOGRN} from "../store";

export const LimitedLiabilityCompanyForm = () => {

    const INN = useAppSelector((state) => state.questionnaire.INN)
    const OGRN = useAppSelector((state) => state.questionnaire.OGRN)

    const ScanINN = useAppSelector((state) => state.questionnaire.scanINN)
    const ScanOGRN = useAppSelector((state) => state.questionnaire.scanOGRN)

    return <div>
        <div className={formStyles.header}>
            Общество с ограниченой ответсвенностью (ООО)
        </div>
        <div className={formStyles.inputsContainer}>
            <NameFormPart />
            <RegistrationDataFormPart />
        </div>
        <div className={formStyles.inputsContainer}>
            <FormPart
                name="ИНН"
                valueSize={INNLength}
                scan={ScanINN}
                actualValue={INN}
                setValueCallback={setINN}
                scanCallback={setScanINN}
            />
            <FormPart
                name="ОГРН"
                valueSize={OGRNLength}
                scan={ScanOGRN}
                actualValue={OGRN}
                setValueCallback={setOGRN}
                scanCallback={setScanOGRN}
            />
        </div>
        <div className={formStyles.inputsContainer}>
            <EGRIPFormPart />
            <ContractFormPart />
        </div>
    </div>
}