import axios from "axios";
import baseApi from "./customApi";


const getAllEmployeesApi = async ()=>{
    try{
        const response = await baseApi.get(`/employees`);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from getAllEmployeesApi function')
    }
}


const getEmployeeApi = async (id)=>{
    try{
        const response = await baseApi.get(`/employees/${id}`);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from getEmployeeApi function')
    }
}


const createEmployeeApi = async (body)=>{
    try{
        const response = await baseApi.post(`/employees`, body);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from createEmployeeApi function');
    }
}


const deleteEmployeeApi = async (id)=>{
    try{
        const response = await baseApi.delete(`/employees/${id}`, );
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from deleteEmployeeApi function')
    }
}


const updateEmployeeApi = async (id, body)=>{
    try{
        const response = await baseApi.put(`/update/${id}`, body );
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from updateEmployeeApi function')
    }
}


export {getAllEmployeesApi, getEmployeeApi, createEmployeeApi, deleteEmployeeApi, updateEmployeeApi,  }




