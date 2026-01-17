import axios from "axios";
import baseApi from "./customApi";


const loginApi = async (body)=>{
    try{
        const response = await baseApi.post(`/login`, body);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from loginApi function')
    }
}

const RegisterApi = async (body)=>{
    try{
        const response = await baseApi.post(`/register`, body);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from RegisterApi function')
    }
}




const currentUserApi = async () =>{
    try{
        const response = await baseApi.get('/currentUser');
        return response.data; 

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from RegisterApi function')
    }
}


export { loginApi, RegisterApi };











