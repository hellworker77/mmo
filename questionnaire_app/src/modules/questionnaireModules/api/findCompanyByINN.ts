import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {LimitedLiabilityCompany} from "../../../domain/interfaces/limitedLiabilityCompany";
import {setOGRN} from "../components/parts/oGRNFormPart/slice";
import {setLongName, setShortName} from "../components/parts/nameFormPart/slice";
import {setRegistrationDate} from "../components/parts/registractionFormPart/slice";

export const findCompanyByINN = createAsyncThunk(
    "inn/findCompanyByINN",
    async (inn: string, {dispatch}) => {
        try{
            const response = await axios.get<LimitedLiabilityCompany>(`http://localhost:5000/api/Questionnaire/Inn?inn=${inn}`)

            const company = response.data
            if (company) {
                dispatch(setOGRN(company.ogrn))
                dispatch(setLongName(company.longName))
                dispatch(setShortName(company.shortName))
                dispatch(setRegistrationDate(new Date(company.registerDate)))
            }
        }catch (error){
            alert("Неудалось получить данные по ИНН")
        }
    }
)
