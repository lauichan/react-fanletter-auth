import axios from "axios";

const authAPI = axios.create({
  baseURL: import.meta.env.VITE_APP_AUTH_SERVER_URL,
});

authAPI.interceptors.request.use(
  function (config) {
    console.log("요청 성공", config);
    return config;
  },
  function (error) {
    console.error("요청 오류", error);
    return Promise.reject(error);
  }
);

authAPI.interceptors.response.use(
  function (response) {
    console.log("응답 성공", response);
    return response;
  },

  function (error) {
    console.error("응답 오류", error);
    return Promise.reject(error);
  }
);

export default authAPI;
