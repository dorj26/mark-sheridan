import axios from "axios";
const URL = "http://localhost:5000";

export const postForm = async (apiURL: string, data: any, options?: any) => {
    return axios.post(`${URL}/${apiURL}`, data, {
        ...options,
        headers: {},
    });
};

export const get = async (apiURL: string, params?: any, options?: any) => {
    return axios.get(`${URL}/${apiURL}`, {
        ...options,
        params,
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
        },
    });
};
