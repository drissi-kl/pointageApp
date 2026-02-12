import axios from "axios";
import baseApi from "./customApi"



const createTimeSheetApi = async (body) => {
    try{
        const response = await baseApi.post(`/timesheet`, body);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }

        new Error("exists error from createSheetApi function");
    }
} 





export {createTimeSheetApi,  };



