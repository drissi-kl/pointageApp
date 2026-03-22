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

// RegisterApi for create supreadmin
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


// StoreApi for create supreadmin
const StoreApi = async (body)=>{
    try{
        const response = await baseApi.post(`/store`, body);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from StoreApi function')
    }
}

const updateUserApi = async (body) =>{
    try{
        const response = await baseApi.post('/update', body);
        return response.data; 

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from updateUserApi function')
    }
}

const ForgetPasswordApi = async (body)=>{
    try{
        const response = await baseApi.post(`/forgetPassword`, body);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from ForgetPasswordApi function')
    }
}

const ResetPasswordApi = async (body)=>{
    try{
        const response = await baseApi.post(`/resetPassword`, body);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from ResetPasswordApi function')
    }
}


const logoutApi = async () =>{
    try{
        const response = await baseApi.post('/logout');
        return response.data; 

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from logout function')
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


export { loginApi, logoutApi, RegisterApi, StoreApi, updateUserApi, currentUserApi, ForgetPasswordApi, ResetPasswordApi };











