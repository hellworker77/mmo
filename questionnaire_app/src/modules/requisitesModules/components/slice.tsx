import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FinancialCredential} from "../../../domain/interfaces/financialCredential";

interface IRequisitesState {
    notes: FinancialCredential[]
}

const initialState: IRequisitesState = {
    notes: [{
        bik: "",
        bankName: "",
        checkingAccount: "",
        correspondentAccount: ""
    }]
}

export const requisitesSlice = createSlice({
    name: 'Requisites',
    initialState,
    reducers: {
        addNote: (state) => {
            const note: FinancialCredential = {
                bik: "",
                bankName: "",
                correspondentAccount: "",
                checkingAccount: ""
            }

            state.notes.push(note)
        },
        setBikByIndex: (state, action: PayloadAction<{ index: number, value: string }>) => {
            state.notes = state.notes.map((note, i) => {
                if (i === action.payload.index) {
                    note.bik = action.payload.value
                }
                return note
            })
        },
        setBankNameByIndex: (state, action: PayloadAction<{ index: number, value: string }>) => {
            state.notes = state.notes.map((note, i) => {
                if (i === action.payload.index) {
                    note.bankName = action.payload.value
                }
                return note
            })
        },
        setCheckingAccountByIndex: (state, action: PayloadAction<{ index: number, value: string }>) => {
            state.notes = state.notes.map((note, i) => {
                if (i === action.payload.index) {
                    note.checkingAccount = action.payload.value
                }
                return note
            })
        },
        setCorrespondentAccountByIndex: (state, action: PayloadAction<{ index: number, value: string }>) => {
            state.notes = state.notes.map((note, i) => {
                if (i === action.payload.index) {
                    note.correspondentAccount = action.payload.value
                }
                return note
            })
        }
    },
})

export const {
    addNote,
    setCorrespondentAccountByIndex,
    setCheckingAccountByIndex,
    setBankNameByIndex,
    setBikByIndex
} = requisitesSlice.actions
export default requisitesSlice.reducer