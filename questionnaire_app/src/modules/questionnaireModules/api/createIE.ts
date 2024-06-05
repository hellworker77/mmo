import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const createIE = createAsyncThunk(
    "createIE",
    async (request: FormData, {dispatch}) => {
        try{
            await axios.post(`http://localhost:5000/api/Questionnaire/IE`, request)
            alert("Запись добавлена")
        }catch (error){
            alert("Запись не добавлена")
        }
    }
)
