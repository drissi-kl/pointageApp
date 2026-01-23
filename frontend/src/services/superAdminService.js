import axios from "axios";
import baseApi from "./customApi";




const updateSuperAdminApi = async (id, body)=>{
    try{
        const response = await baseApi.put(`/update/${id}`, body );
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from updateSuperAdminApi function')
    }
}


export {updateSuperAdminApi,   }




