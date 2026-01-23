import axios from "axios";
import baseApi from "./customApi";


const getAllAdminsApi = async ()=>{
    try{
        const response = await baseApi.get(`/admins`);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from getAllAdminsApi function')
    }
}


const getAdminApi = async ()=>{
    try{
        const response = await baseApi.get(`/admins`);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from getAdminApi function')
    }
}


const createAdminApi = async (body)=>{
    try{
        const response = await baseApi.post(`/store`, body);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from createAdminApi function')
    }
}


const deleteAdminApi = async (id)=>{
    try{
        const response = await baseApi.delete(`/store/${id}`, );
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from deleteAdminApi function')
    }
}


const updateAdminApi = async (id, body)=>{
    try{
        const response = await baseApi.put(`/update/${id}`, body );
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from updateAdminApi function')
    }
}


export {getAllAdminsApi, getAdminApi, createAdminApi, deleteAdminApi, updateAdminApi,  }




