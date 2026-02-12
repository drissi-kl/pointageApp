import axios from "axios";
import baseApi from "./customApi"


const getAllTimeSheetApi = async () => {
    try{
        const response = await baseApi.get(`/timesheets`, body);
        return response.data;
    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }

        new Error("exists error from getAllTimeSheetApi function");
    }
}


const createTimeSheetApi = async (body) => {
    try{
        const response = await baseApi.post(`/timesheets`, body);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }

        new Error("exists error from createTimeSheetApi function");
    }
} 


const updateTimeSheetApi = async (id) => {
    try{
        const response = await baseApi.delete(`/timesheets/${id}`);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }

        new Error("exists error from deleteTimeSheetApi function");
    }
}


const deleteTimeSheetApi = async (id) => {
    try{
        const response = await baseApi.delete(`/timesheets/${id}`);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }

        new Error("exists error from deleteTimeSheetApi function");
    }
} 





export {createTimeSheetApi, getAllTimeSheetApi, updateTimeSheetApi, deleteTimeSheetApi   };



