import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true, // required for session cookies
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

// Use session_id instead of token
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const sessionId = localStorage.getItem("session_id");
  console.log(`session_id: ${sessionId}`);
  
  if (sessionId) {
    config.headers["X-Session-ID"] = sessionId; // or use a custom header your backend accepts
  }

  return config;
});

export const loginUser = async (
  email: string,
  password: string
): Promise<any> => {
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
