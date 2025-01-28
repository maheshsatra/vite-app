import axios from 'axios';

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: 'http://10.10.10.23:3030/api',
  headers: {
    'Content-Type': 'application/json',
    authorization:`Bearer ${JSON.parse(localStorage.getItem("loginInfo"))?.token}`,
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('loginInfo');
    if (token) {
      config.headers['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem("loginInfo"))?.token}`;
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
      toast.error('Server error, please try again later.');
    } else {
      toast.error('An error occurred. Please try again.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
