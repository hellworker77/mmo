import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {KindOfActivity} from "../../../domain/enums/kindOfActivity";

interface IQuestionnaireState {
    activity: KindOfActivity | null
    pending: boolean
}

const initialState: IQuestionnaireState = {
    activity: null,
    pending: false
}

export const questionnaireSlice = createSlice({
    name: 'Questionnaire',
    initialState,
    reducers: {
        setActivity: (state, activity: PayloadAction<KindOfActivity | null>) => {
            state.activity = activity.payload
        },
    },
})

export const {
    setActivity,
} = questionnaireSlice.actions
export default questionnaireSlice.reducer
