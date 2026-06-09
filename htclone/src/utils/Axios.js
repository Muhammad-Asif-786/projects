// utils/Axios.js ✅ FIXED
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SummaryApi, { baseURL } from "../apies/SummaryApi.js";
import AxiosToastError from "./AxiosToastError.js";
import { Alert } from "react-native";

// ==================== MAIN AXIOS INSTANCE ====================
const Axios = axios.create({
  baseURL: baseURL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ==================== REQUEST INTERCEPTOR ====================
Axios.interceptors.request.use(
  async (config) => {
    const accessToken = await AsyncStorage.getItem("accessToken");

    // ✅ PUBLIC ROUTES CHECK
    const publicRoutes = [
      // SummaryApi.login.url,
      SummaryApi.register.url,
      // "/api/user/verify-email",
      // "/api/user/forgot-password",
    ];

    const isPublicRoute = publicRoutes.some(route => config.url?.includes(route));
        if (accessToken && !isPublicRoute) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }

    return config;
  },
  (error) => Promise.reject(error)
);

// ==================== RESPONSE INTERCEPTOR ====================
Axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // ✅ FIX: only refresh token for protected routes
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/refresh-token")
    ) {
      originalRequest._retry = true;

      const refreshToken = await AsyncStorage.getItem("refreshToken");

      if (refreshToken) {
        const newAccessToken = await refreshAccessToken(refreshToken);

        if (newAccessToken) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return Axios(originalRequest); // retry original request
        }
      }

      await logoutUser();
    }

    AxiosToastError(error);
    return Promise.reject(error);
  }
);

// ==================== REFRESH TOKEN ====================
const refreshAccessToken = async (refreshToken) => {
  try {
    const refreshAxios = axios.create({
      baseURL,
      headers: { "Content-Type": "application/json" },
    });

    const response = await refreshAxios({
      ...SummaryApi.refreshToken,
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    const accessToken = response.data?.data?.accessToken;

    if (accessToken) {
      await AsyncStorage.setItem("accessToken", accessToken);
      return accessToken;
    }

    return null;
  } catch (error) {
    console.log("Axios error:", error);
    AxiosToastError("error", error.message);
    return null;
  }
};

export default Axios;

