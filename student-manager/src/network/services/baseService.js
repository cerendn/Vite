import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export const baseService = {
  get: async (endpoint, configs = {}) => {
    try {
      const response = await axiosInstance.get(endpoint, configs);
      console.log(response);
      return response;
    } catch (error) {
      console.error(`GET ${endpoint} error: ${error}`);
      throw error;
    }
  },
  post: async (endpoint, data, configs = {}) => {
    try {
      const response = await axiosInstance.post(endpoint, data, configs);
      return response;
    } catch (error) {
      console.error(`POST ${endpoint} error: ${error}`);
      throw error;
    }
  },
  delete: async (endpoint, configs = {}) => {
    try {
      const response = await axiosInstance.delete(endpoint, configs);
      return response;
    } catch (error) {
      console.error(`DELETE ${endpoint} error: ${error}`);
    }
  },
};
