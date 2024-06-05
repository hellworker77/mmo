import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface INameFormPartState {
    longName: string,
    shortName: string,
    isValid: boolean
}

const initialState: INameFormPartState = {
    longName: "",
    shortName: "",
    isValid: false
}

export const nameFormSlice = createSlice({
    name: 'NameForm',
    initialState,
    reducers: {
        setShortName: (state, action: PayloadAction<string>) => {
            state.shortName = action.payload
        },
        setLongName: (state, action: PayloadAction<string>) => {
            state.longName = action.payload
        },
        setValid: (state, action: PayloadAction<boolean>) => {
            state.isValid = action.payload
        }
    }
})

export const {
    setValid,
    setShortName,
    setLongName
} = nameFormSlice.actions
export default nameFormSlice.reducer