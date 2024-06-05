export interface FinancialCredentialByBik {
    correspondentAccount : string
    bankName: string
}

export interface FinancialCredential extends FinancialCredentialByBik {
    bik: string
    checkingAccount: string
}
