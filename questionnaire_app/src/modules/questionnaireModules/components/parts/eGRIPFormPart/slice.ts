import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IEGRIPFormState {
    scanEGRIP: File | null,
    isValid: boolean
}

const initialState: IEGRIPFormState = {
    scanEGRIP: null,
    isValid: false
}

export const eGRIPFormSlice = createSlice({
    name: 'eGRIPForm',
    initialState,
    reducers: {
        setScanEGRIP: (state, action :PayloadAction<File | null>) => {
            state.scanEGRIP = action.payload
        },
        setValid: (state, action: PayloadAction<boolean>) => {
            state.isValid = action.payload
        }
    },
})

export const {setScanEGRIP, setValid} = eGRIPFormSlice.actions
export default eGRIPFormSlice.reducer