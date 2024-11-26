import axios from "axios";

const axiosInstance = axios.create({
  baseURL: true ? "https://studiohub.es/api" : "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
