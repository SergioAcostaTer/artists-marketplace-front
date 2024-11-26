import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://studiohub.es/api/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
