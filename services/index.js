import axios from "axios";
export const BASE_URL = "https://api.prounity.uz";

export const SignUpUser = async (data) => {
    const response = await axios.post(`${BASE_URL}/auth/signup`, data);
    return response.data;
};
export const GetCountry = async (data) => {
    const response = await axios.get(`${BASE_URL}/country`);
    return response.data;
};
export const GetCountrySearch = async (searchData) => {
    const response = await axios.get(`${BASE_URL}/country?name=${searchData}`);
    return response.data;
};
export const GetGender = async (data) => {
    const response = await axios.get(`${BASE_URL}/gender`);
    return response.data;
};
