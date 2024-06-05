import {FinancialCredential} from "../../../../domain/interfaces/financialCredential";
import formStyles from "../../../../layout/form.module.css";
import React from "react";
import {BikForm} from "../parts/bikFormPart";
import {BankNameForm} from "../parts/bankNameFormPart";
import {CheckingAccountForm} from "../parts/checkingAccountFormPart";
import {CorrespondentAccountForm} from "../parts/correspondentAccountFormPart";

type props = {
    index: number
    financialCredential: FinancialCredential
}
export const Requisite: React.FC<props> = ({index, financialCredential}) => {
    return <>
        <div className={formStyles.inputsContainer}>
            <BikForm
                bik={financialCredential.bik}
                index={index}/>

            <BankNameForm
                bankName={financialCredential.bankName}
                index={index}/>
        </div>
        <div className={formStyles.inputsContainer}>
            <CheckingAccountForm
                checkingAccount={financialCredential.checkingAccount}
                index={index}/>

            <CorrespondentAccountForm
                correspondentAccount={financialCredential.correspondentAccount}
                index={index}/>
        </div>
    </>
}