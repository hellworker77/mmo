import {createSlice} from "@reduxjs/toolkit";

interface IRequisitesState {

}

const initialState: IRequisitesState = {

}

export const requisitesSlice = createSlice({
    name: 'Requisites',
    initialState,
    reducers: {
    },
})

export const {} = requisitesSlice.actions
export default requisitesSlice.reducer