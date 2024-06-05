import {FinancialCredential} from "../domain/interfaces/financialCredential";
import {useEffect, useState} from "react";
import isEqual from 'lodash/isEqual';

export const useRequisitesValidation = (notes: FinancialCredential[]) => {
    const [isValid, setIsValid] = useState(false)
    const [prevNotes, setPrevNotes] = useState<FinancialCredential[]>([])

    useEffect(() => {
        if (isEqual(prevNotes, notes)) {
            return
        }

        setPrevNotes(notes)

        let result = true
        for (const note of notes) {
            if (note.bik === "" || note.checkingAccount === "" || note.correspondentAccount === "" || note.bankName === "") {
                result = false
                break;
            }
        }
        setIsValid(result)
    }, [notes, prevNotes]);

    return {
        isValid
    }
}