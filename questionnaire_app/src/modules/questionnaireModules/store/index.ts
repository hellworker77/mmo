import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {KindOfActivity} from "../../../domain/enums/kindOfActivity";

interface IQuestionnaireState {
    activity: KindOfActivity | null
    longName: string
    shortName: string
    contractAvailability: boolean
    INN: number
    OGRNIP: number
    OGRN: number
    scanINN: File | null
    scanEGRIP: File | null
    scanOGRNIP: File | null
    scanOGRN: File | null
    scanContract: File | null
    registrationDate: Date | null
}

const initialState: IQuestionnaireState = {
    activity: null,
    longName: "",
    shortName: "",
    contractAvailability: false,
    INN: 0,
    OGRNIP: 0,
    OGRN: 0,
    scanINN: null,
    scanEGRIP: null,
    scanOGRNIP: null,
    scanOGRN: null,
    scanContract: null,
    registrationDate: null
}

export const questionnaireSlice = createSlice({
    name: 'Questionnaire',
    initialState,
    reducers: {
        setActivity: (state, activity: PayloadAction<KindOfActivity | null>) => {
            state.activity = activity.payload
        },
        setLongname: (state, longName: PayloadAction<string>) => {
            state.longName = longName.payload
        },
        setShortname: (state, shortName: PayloadAction<string>) => {
            state.shortName = shortName.payload
        },
        toggleContractAvailability: (state, availability: PayloadAction<boolean>) => {
            state.contractAvailability = availability.payload
        },
        setINN: (state, INN: PayloadAction<number>) => {
            state.INN = INN.payload
        },
        setOGRN: (state, OGRN: PayloadAction<number>) => {
            state.OGRN = OGRN.payload
        },
        setOGRNIP: (state, OGRNIP: PayloadAction<number>) => {
            state.OGRNIP = OGRNIP.payload
        },
        setScanINN: (state, scanINN: PayloadAction<File | null>) => {
            state.scanINN = scanINN.payload
        },
        setScanOGRN: (state, scanOGRN: PayloadAction<File | null>) => {
            state.scanOGRN = scanOGRN.payload
        },
        setScanOGRNIP: (state, scanOGRNIP: PayloadAction<File | null>) => {
            state.scanOGRNIP = scanOGRNIP.payload
        },
        setScanEGRIP: (state, scanEGRIP: PayloadAction<File | null>) => {
            state.scanEGRIP = scanEGRIP.payload
        },
        setScanContract: (state, scanContract: PayloadAction<File | null>) => {
            state.scanContract = scanContract.payload
        },
        setRegisterDate: (state, date: PayloadAction<Date>) => {
            state.registrationDate = date.payload
        }
    },
})

export const {
    setActivity,
    setLongname,
    setShortname,
    toggleContractAvailability,
    setINN,
    setOGRN,
    setOGRNIP,
    setScanINN,
    setScanOGRN,
    setScanOGRNIP,
    setScanEGRIP,
    setScanContract,
    setRegisterDate
} = questionnaireSlice.actions
export default questionnaireSlice.reducer
