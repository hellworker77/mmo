import {useAppSelector} from "../../../app/hooks";
import formStyles from "../../../layout/form.module.css";
import {FormPart} from "./parts/FormPart";
import {INNLength, OGRNIPLength} from "../../../domain/constants/filedConstants";
import {RegistrationDataFormPart} from "./parts/RegistrationDataFormPart";
import {EGRIPFormPart} from "./parts/EGRIPFormPart";
import {ContractFormPart} from "./parts/ContractFormPart";
import {setINN, setOGRNIP, setScanINN, setScanOGRNIP} from "../store";

export const IndividualEntrepreneurForm = () => {
    const INN = useAppSelector((state) => state.questionnaire.INN)
    const OGRNIP = useAppSelector((state) => state.questionnaire.OGRNIP)

    const ScanINN = useAppSelector((state) => state.questionnaire.scanINN)
    const ScanOGRNIP = useAppSelector((state) => state.questionnaire.scanOGRNIP)

    return <div>
        <div className={formStyles.header}>
            Индивидуальный предприниматель (ИП)
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
                name="ОГРНИП"
                valueSize={OGRNIPLength}
                scan={ScanOGRNIP}
                actualValue={OGRNIP}
                setValueCallback={setOGRNIP}
                scanCallback={setScanOGRNIP}
            />
        </div>
        <div className={formStyles.inputsContainer}>
            <RegistrationDataFormPart />
            <EGRIPFormPart />
            <ContractFormPart />
        </div>
    </div>
}