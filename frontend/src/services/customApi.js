import axios from "axios";

const baseApi = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    // headers:{
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    // }
})


baseApi.interceptors.request.use(
    (request) => {

        // request.headers.Authorization = 
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

