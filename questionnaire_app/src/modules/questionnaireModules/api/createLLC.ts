import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const createLLC = createAsyncThunk(
    "createLLC",
    async (request: FormData, {dispatch}) => {
        try{
            await axios.post(`http://localhost:5000/api/Questionnaire/LLC`, request)
            alert("Запись добавлена")
        }catch (error){
            alert("Запись не добавлена")
        }
    }
)
