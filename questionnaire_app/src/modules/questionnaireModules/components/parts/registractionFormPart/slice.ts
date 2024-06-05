import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IRegistrationDataFormState {
    registrationDate: Date | null
    isValid: boolean
}

const initialState: IRegistrationDataFormState = {
    registrationDate: null,
    isValid: false
}

export const registrationDataFormSlice = createSlice({
    name: 'registrationDataForm',
    initialState,
    reducers: {
        setRegistrationDateAsString: (state, action: PayloadAction<string>) => {
            const separated = action.payload.split('.')
            const day = parseInt(separated[0])
            const month = parseInt(separated[1])
            const year = parseInt(separated[2])

            state.registrationDate = new Date(year, month- 1, day)
        },
        setRegistrationDate: (state, action: PayloadAction<Date>) => {
            state.registrationDate = action.payload
        },
        setValid: (state, action: PayloadAction<boolean>) => {
            state.isValid = action.payload
        }
    },
})

export const {
    setRegistrationDateAsString,
    setValid,
    setRegistrationDate
} = registrationDataFormSlice.actions
export default registrationDataFormSlice.reducer