import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true, 
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});


axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const sessionId = localStorage.getItem("session_id");
  console.log(`session_id: ${sessionId}`);
  if (sessionId) {
    config.headers["X-Session-ID"] = sessionId;
  }
  return config;
});

export const loginUser = async (
  email: string,
  password: string
): Promise<void> => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  const response = await axiosInstance.post("login/", formData);

  const sessionId = response.data?.data?.user_session_id;

  if (sessionId) {
    localStorage.setItem("session_id", sessionId);
  }

  return response.data;
};

export const logoutUser = (): void => {
  localStorage.removeItem("session_id");
};

export default axiosInstance;
