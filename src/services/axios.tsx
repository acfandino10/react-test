import axios from "axios";

const API = process.env.REACT_APP_BASE_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

const axiosAuth = axios.create({
  baseURL: API,
});

const axiosNoAuth = axios.create({
  baseURL: API,
});

axiosAuth.interceptors.request.use(async (config) => {
  // TODO: Add token from login to request
  const accessToken = TOKEN;
  config.headers["accept"] = "application/json";
  config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : "";

  return config;
});

export { axiosAuth, axiosNoAuth };
