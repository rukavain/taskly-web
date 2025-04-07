import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true, // this is the key!
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("access_token");
  console.log(token)
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});


// login user call
// interface LoginResponse {
//   access: string;
//   refresh: string;
// }

export const loginUser = async (
  email: string,
  password: string
): Promise<string> => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  const response = await axiosInstance.post("login/", formData);

  return response.data;
};

export const logoutUser = (): void => {
  localStorage.removeItem("access_token");
};

export default axiosInstance;

