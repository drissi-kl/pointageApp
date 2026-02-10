import axios from "axios";
import baseApi from "./customApi"



const createSheetApi = async (body) => {
    try{
        const response = await baseApi.post(`/post`, body);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }

        new Error("exists error from createSheetApi function");
    }
} 





export {createSheetApi,  };



