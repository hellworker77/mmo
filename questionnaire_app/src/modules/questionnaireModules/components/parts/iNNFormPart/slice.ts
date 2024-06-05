import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IINNFormPartState {
    INN: string
    scanINN: File | null
    isValid: boolean
}

const initialState: IINNFormPartState = {
    INN: "",
    scanINN: null,
    isValid: false
}


export const iNNFormSlice = createSlice({
    name: 'iNNForm',
    initialState,
    reducers: {
        setINN: (state, action:PayloadAction<string>) => {
            state.INN = action.payload
        },
        setScanINN: (state, action: PayloadAction<File | null>) => {
            state.scanINN = action.payload
        },
        setValid: (state, action: PayloadAction<boolean>) => {
            state.isValid = action.payload
        }
    },
})
export const {setINN, setScanINN, setValid} = iNNFormSlice.actions
export default iNNFormSlice.reducer