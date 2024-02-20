import axios from "axios";

const fanLetterAPI = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
});

fanLetterAPI.interceptors.request.use(
  function (config) {
    console.log("요청 성공", config);
    return config;
  },
  function (error) {
    console.error("요청 오류", error);
    return Promise.reject(error);
  }
);

fanLetterAPI.interceptors.response.use(
  function (response) {
    console.log("응답 성공", response);
    return response;
  },

  function (error) {
    console.error("응답 오류", error);
    return Promise.reject(error);
  }
);

export default fanLetterAPI;
