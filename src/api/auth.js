import { postApi } from "@/api/axios.js";
import router from "@/routes/router.js";

export const signup = async (data) => {
  return await postApi("/api/auth/signup", data);
};

export const login = async (data) => {
  return await postApi("/api/auth/login", data);
};

export const setLogin = async (response) => {
  localStorage.setItem("accessToken", response.data.accessToken);
  await router.push({ path: "/" });
};

export const alertError = (error) => {
  console.log(error);
  const { httpStatus, message } = error.response.data;
  alert(`[${httpStatus}] : \n ${message}`);
};
