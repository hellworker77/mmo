import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {FinancialCredentialByBik} from "../../../domain/interfaces/financialCredential";
import {setBankNameByIndex, setCorrespondentAccountByIndex} from "../components/slice";

type thunkArgs = {
    bik: string,
    index: number
}
export const findFinancialCredentialByBIK = createAsyncThunk(
    "inn/findFinancialCredentialByBIK",
    async ({bik, index}: thunkArgs, {dispatch}) => {
        try{
            const response = await axios.get<FinancialCredentialByBik>(`http://localhost:5000/api/Questionnaire/BIK?bik=${bik}`)

            const financialCredential = response.data

            if (financialCredential) {
                dispatch(setBankNameByIndex({index, value: financialCredential.bankName}))
                dispatch(setCorrespondentAccountByIndex({index, value: financialCredential.correspondentAccount}))
            }
        }catch (error){
            alert("Неудалось получить данные по БИК")
        }
    }
)
