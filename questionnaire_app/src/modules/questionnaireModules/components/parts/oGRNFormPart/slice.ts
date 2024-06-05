import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IOGRNFormPartState {
    OGRN: string
    scanOGRN: File | null
    isValid: boolean
}

const initialState: IOGRNFormPartState = {
    OGRN: "",
    scanOGRN: null,
    isValid: false
}

export const oGRNSlice = createSlice({
    name: 'oGRNForm',
    initialState,
    reducers: {
        setOGRN: (state, action:PayloadAction<string>) => {
            state.OGRN = action.payload
        },
        setScanOGRN: (state, action: PayloadAction<File | null>) => {
            state.scanOGRN = action.payload
        },
        setValid: (state, action: PayloadAction<boolean>) => {
            state.isValid = action.payload
        }
    },
})

export const {setOGRN, setScanOGRN, setValid} = oGRNSlice.actions
export default oGRNSlice.reducer