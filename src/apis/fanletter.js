import axios from "axios";

const fanLetterAPI = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
});

fanLetterAPI.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.error("요청 오류", error.response.data.message);
    return Promise.reject(error);
  }
);

export default fanLetterAPI;
