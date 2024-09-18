import axios from "axios";
const baseUrl = "http://14.225.220.131:8080/api/";
// const baseUrl = "http://localhost:8080/api/";

const config = {
  baseUrl: baseUrl,
};

const api = axios.create(config);

api.defaults.baseURL = baseUrl;

// handle before call API
const handleBefore = (config) => {
  // handle hành động trước khi call API

  // lấy ra cái token và đính kèm theo cái request
  const token = localStorage.getItem("token")?.replaceAll('"', "");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
};

api.interceptors.request.use(handleBefore, null);

export default api;
