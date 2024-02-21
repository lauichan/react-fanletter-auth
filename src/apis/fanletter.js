import axios from "axios";

const fanLetterAPI = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
});

export default fanLetterAPI;
