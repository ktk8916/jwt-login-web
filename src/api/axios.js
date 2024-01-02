import axios from "axios";

const BASE_URL = "http://localhost:3000";

axios.defaults.baseURL = BASE_URL;

export const getApi = async (url) => {
  return await axios.get(url);
};

export const postApi = async (url, data) => {
  return await axios.post(url, data);
};
