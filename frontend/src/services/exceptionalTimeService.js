import axios from "axios";
import baseApi from "./customApi"


const getAllExceptionTimeApi = async (user_id) => {
    try {
        const response = await baseApi.get(`/exceptionalTimes/${user_id}`);
        return response.data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error;
        }
        throw new Error('exist error in getAllExceptionTimeApi function');
    }
}


const createExceptionTimeApi = async (body) => {
    try {
        const response = await baseApi.post(`/exceptionalTimes`, body);
        return response.data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error;
        }
        throw new Error('exist error in createExceptionTimeApi function');
    }
}



export { createExceptionTimeApi, getAllExceptionTimeApi };
