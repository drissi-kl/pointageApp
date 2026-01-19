import axios from "axios";
import getToken from "@/utilities/getToken";

const baseApi = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    // headers:{
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    // }
})


baseApi.interceptors.request.use(
    (request) => {
        const token = getToken();
        if(token){
            request.headers.authorization = `Bearer ${token}`;
        }
        console.log('request', token);
        return request;
    }
)

baseApi.interceptors.response.use(
    (response)=>{
        return response;
    },
    (error)=>{
        console.log('custom file error:', error);
        throw error;
    }
)


export default baseApi;

