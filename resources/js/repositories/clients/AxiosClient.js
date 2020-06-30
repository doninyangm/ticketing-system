import axios from "axios";

const baseDomain = "http://127.0.0.1:8000";
const baseURL = `${baseDomain}/api/v1`;

const httpsClient = axios.create({
  baseURL,
});

httpsClient.interceptors.request.use(
    config => {
      let token = localStorage.getItem("key");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

export default httpsClient;