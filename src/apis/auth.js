import axios from "axios";

const authAPI = axios.create({
  baseURL: import.meta.env.VITE_APP_AUTH_SERVER_URL,
});

authAPI.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  function (error) {
    console.error("요청 오류", error.response.data.message);
    return Promise.reject(error);
  }
);

export default authAPI;
