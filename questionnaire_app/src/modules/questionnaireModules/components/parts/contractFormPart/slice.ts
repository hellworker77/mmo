import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IContractFormState {
    lackContract: boolean
    scanContract: File | null
    isValid: boolean
}

const initialState: IContractFormState = {
    lackContract: false,
    scanContract: null,
    isValid: false
}

export const contractFormSlice = createSlice({
    name: 'contractForm',
    initialState,
    reducers: {
        setLackContract: (state, action: PayloadAction<boolean>) => {
            state.lackContract = action.payload
        },
        setScanContract: (state, action: PayloadAction<File | null>) => {
            state.scanContract = action.payload
        },
        setValid: (state, action: PayloadAction<boolean>) => {
            state.isValid = action.payload
        }
    },
})

export const {
    setLackContract,
    setScanContract,
    setValid
} = contractFormSlice.actions
export default contractFormSlice.reducer