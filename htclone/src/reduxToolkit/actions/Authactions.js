import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../../utils/Axios.js';
import SummaryApi from '../../apies/SummaryApi.js';
import AsyncStorage from "@react-native-async-storage/async-storage";


/* registerUser */
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (data, { rejectWithValue }) => {       //frontend dispatch se aata hai
    try {
      const res = await Axios({
        ...SummaryApi.register, 
        data,
      });
      return res.data;

    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Register failed'
      );
    }
  }
);

/* loginUser */
export const loginUser = createAsyncThunk(
  "auth/loginUser",
    async (data, { rejectWithValue }) => {
      try {
        const res = await Axios({
          ...SummaryApi.login,
          data,
        });
        
        await AsyncStorage.setItem( "accessToken", res.data.data.accessToken);
        await AsyncStorage.setItem( "refreshToken", res.data.data.refreshToken);
        return res.data;
        console.log("Login ka data dakho:", res.data);

      } catch (error) {
        return rejectWithValue(
          error.response?.data?.message || "Login failed"
        );
      }
    }
  );

/* forgotPassword */
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (data, { rejectWithValue }) => {
    try {
      const res = await Axios({
        ...SummaryApi.forgotPassword,
        data,
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to send OTP"
      );
    }
  }
);

/* resetPassword */
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios({
        ...SummaryApi.resetPassword,
        data,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Reset password failed"
      );
    }
  }
);

/* logoutUser */
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
    async (_, { rejectWithValue }) => {
      try {

        const token = await AsyncStorage.getItem("accessToken");

        const res = await Axios({
          ...SummaryApi.logout,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        await AsyncStorage.removeItem("accessToken");
        await AsyncStorage.removeItem("refreshToken");

        return res.data;

      } catch (error) {
        return rejectWithValue(
          error?.response?.data?.message || "Logout failed"
        );
      }
    }
  );
