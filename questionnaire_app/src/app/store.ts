import {configureStore, createSerializableStateInvariantMiddleware,
    isPlain,
    Tuple} from "@reduxjs/toolkit";
import questionnaireSlice from "../modules/questionnaireModules/components/slice";
import requisitesSlice from "../modules/requisitesModules/components/slice";
import {thunk} from "redux-thunk"
import nameFormSlice from "../modules/questionnaireModules/components/parts/nameFormPart/slice";
import iNNFormSlice from "../modules/questionnaireModules/components/parts/iNNFormPart/slice";
import oGRNSlice from "../modules/questionnaireModules/components/parts/oGRNFormPart/slice";
import oGRNIPSlice from "../modules/questionnaireModules/components/parts/oGRNIPFormPart/slice";
import contractFormSlice from "../modules/questionnaireModules/components/parts/contractFormPart/slice";
import eGRIPFormSlice from "../modules/questionnaireModules/components/parts/eGRIPFormPart/slice";
import registrationDataFormSlice from "../modules/questionnaireModules/components/parts/registractionFormPart/slice";

const isSerializable = (value: any) =>
   value instanceof File || value instanceof Date || isPlain(value)

const serializableMiddleware = createSerializableStateInvariantMiddleware({
    isSerializable
})

export const store = configureStore({
    reducer: {
        questionnaire: questionnaireSlice,
        requisites: requisitesSlice,
        nameForm: nameFormSlice,
        iNNForm: iNNFormSlice,
        oGRNForm: oGRNSlice,
        oGRNIPForm: oGRNIPSlice,
        contractForm: contractFormSlice,
        eGRIPForm: eGRIPFormSlice,
        registrationDataForm: registrationDataFormSlice
    },
    middleware: () => new Tuple(serializableMiddleware, thunk),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch