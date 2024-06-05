import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IOGRNIPFormPartState {
    OGRNIP: string
    scanOGRNIP: File | null
    isValid: boolean
}

const initialState: IOGRNIPFormPartState = {
    OGRNIP: "",
    scanOGRNIP: null,
    isValid: false
}

export const oGRNIPSlice = createSlice({
    name: 'oGRNIPForm',
    initialState,
    reducers: {
        setOGRNIP: (state, action:PayloadAction<string>) => {
            state.OGRNIP = action.payload
        },
        setScanOGRNIP: (state, action: PayloadAction<File | null>) => {
            state.scanOGRNIP = action.payload
        },
        setValid: (state, action: PayloadAction<boolean>) => {
            state.isValid = action.payload
        }
    },
})

export const {setOGRNIP, setScanOGRNIP, setValid} = oGRNIPSlice.actions
export default oGRNIPSlice.reducer