import {FinancialCredential} from "../domain/interfaces/financialCredential";

export const getLLCRequest = (
    longName: string,
    shortName: string,
    inn: string,
    scanINN: File | null,
    ogrn: string,
    scanOGRN:  File | null,
    registerDate: Date | null,
    scanEGRIP:  File | null,
    scanContract:  File | null,
    lackContract: boolean,
    financialCredentials: FinancialCredential[]
) => {
    const formData = new FormData();
    formData.append('longName', longName);
    formData.append('shortName', shortName);
    formData.append('inn', inn);
    if (scanINN) formData.append('scanINN', scanINN);
    formData.append('ogrn', ogrn);
    if (scanOGRN) formData.append('scanOGRN', scanOGRN);
    if (registerDate) formData.append('registerDate', registerDate.toISOString());
    if (scanEGRIP) formData.append('scanEGRIP', scanEGRIP);
    if (scanContract) formData.append('scanContract', scanContract);
    formData.append('lackContract', lackContract ? 'true' : 'false');

    for(let i = 0; i< financialCredentials.length; i++){
        formData.append(`financialCredentials[${i}].bik`, financialCredentials[i].bik);
        formData.append(`financialCredentials[${i}].bankName`, financialCredentials[i].bankName);
        formData.append(`financialCredentials[${i}].checkingAccount`, financialCredentials[i].checkingAccount);
        formData.append(`financialCredentials[${i}].correspondentAccount`, financialCredentials[i].correspondentAccount);
    }

    return formData;
}

