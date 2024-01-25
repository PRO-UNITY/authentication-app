import axios from "axios";
export const BASE_URL = 'https://register-app.prounity.uz/api'

export const SignUpUser = async (data) => {
  const response = await axios.post(`${BASE_URL}/auth/auth/signup`, data);
  return response.data;
};
export const GetCountry = async (data) => {
  const response = await axios.get(`${BASE_URL}/auth/country`);
  return response.data;
};
export const GetCountrySearch = async (searchData) => {
  const response = await axios.get(`${BASE_URL}/auth/country?name=${searchData}`);
  return response.data;
};
export const GetGender = async (data) => {
  const response = await axios.get(`${BASE_URL}/auth/gender`);
  return response.data;
};



// export const SignInUser = async (data) => {
//   const response = await axios.post(${BASE_URL}/auth/sigin, data);
//   return response.data;
// };
// export const GetUsers = async () => {
//   const response = await api.get(/auth/users);
//   return response.data;
// };
// export const GetUser = async () => {
//   const response = await api.get(/auth/user);
//   return response.data;
// };