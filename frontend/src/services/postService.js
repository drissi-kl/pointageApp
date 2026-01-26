import axios from "axios";
import baseApi from "./customApi";


const getAllPostsApi = async ()=>{
    try{
        const response = await baseApi.get(`/posts`);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from getAllPostsApi function')
    }
}


const getPostApi = async ()=>{
    try{
        const response = await baseApi.get(`/posts`);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from getPostApi function')
    }
}

const createPostApi = async (body)=>{
    try{
        const response = await baseApi.post(`/posts`, body);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from createPostApi function')
    }
}

const updatePostApi = async (id, body)=>{
    try{
        const response = await baseApi.put(`/posts/${id}`, body);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from updatePostApi function')
    }
}

const deletePostApi = async (id)=>{
    try{
        const response = await baseApi.delete(`/posts/${id}`);
        return response.data;

    }catch(error){
        if(axios.isAxiosError(error)){
            throw error;
        }
        throw new Error('exists error from deletePostApi function')
    }
}

export {getAllPostsApi, getPostApi, createPostApi, updatePostApi, deletePostApi }