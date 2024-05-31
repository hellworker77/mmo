import {configureStore, createSerializableStateInvariantMiddleware,
    isPlain,
    Tuple} from "@reduxjs/toolkit";
import questionnaireSlice from "../modules/questionnaireModules/store/index";
import requisitesSlice from "../modules/requisitesModules/store/index";
import {thunk} from "redux-thunk"

const isSerializable = (value: any) =>
   value instanceof File || value instanceof Date || isPlain(value)

const serializableMiddleware = createSerializableStateInvariantMiddleware({
    isSerializable
})

export const store = configureStore({
    reducer: {
        questionnaire: questionnaireSlice,
        requisites: requisitesSlice
    },
    middleware: () => new Tuple(serializableMiddleware, thunk),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch