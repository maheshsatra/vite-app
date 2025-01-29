import axios from "axios";
import { BaseItemURL, BaseUserURL } from "./apis";

const getBaseURL = (type) => {
  switch (type) {
    case "user":
      return BaseUserURL;
    case "item":
      return BaseItemURL;
    default:
      return BaseUserURL;
  }
};

// Create an Axios instance that can be configured based on the base URL type
const createAxiosInstance = (type) => {
  const axiosInstance = axios.create({
    baseURL: getBaseURL(type),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${
        JSON.parse(localStorage.getItem("loginInfo"))?.token
      }`,
    },
  });

  // Request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("loginInfo");
      if (token) {
        config.headers["Authorization"] = `Bearer ${
          JSON.parse(localStorage.getItem("loginInfo"))?.token
        }`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // Handle errors globally
      if (error.response && error.response.status === 401) {
        // localStorage.removeItem('loginInfo');
        // toast.error('Session expired. Please login again.');
        // window.location.href = '/';
      } else if (error.response && error.response.status === 500) {
        toast.error("Server error, please try again later.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default createAxiosInstance;

// //how to use sample code
// // For User API
// const userAxios = createAxiosInstance('user');

// // For Item API
// const itemAxios = createAxiosInstance('item');

// // Example API call using userAxios
//  .get('/profile')
//   .then(response => console.log(response))
//   .catch(error => console.error(error));

// // Example API call using itemAxios
// itemAxios.get('/list')
//   .then(response => console.log(response))
//   .catch(error => console.error(error));
