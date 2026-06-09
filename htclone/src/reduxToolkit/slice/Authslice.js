import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, forgotPassword, resetPassword, logoutUser } from '../actions/Authactions.js';

const initialState = {
  accessToken: null,
  refreshToken: null,
  _id: '',
  name: '',
  email: '',
  role: '',
  refresh_toke: '',
  verify_email: '',
  emailVerifyOtp: '',
  emailVerifyExpiry: '',
  mobile: '',
  forgotPasswordOtp: '',
  forgotPasswordExpiry: '',
  isActive: '',
  user: null,
  loading: false,
  error: null,
  forgotPasswordLoading: false,
  forgotPasswordSuccess: false,
  forgotPasswordMessage: "",
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  logout: () => initialState,
},

  extraReducers: (builder) => {
    builder
      /* REGISTER */
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload?.data; // backend response
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* Login */
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;

        state.accessToken = action.payload?.data?.accessToken;
        state.refreshToken = action.payload?.data?.refreshToken;
        state.user = action.payload?.data?.user; 
        state._id = action.payload?.data?.user?.id;
        state.name = action.payload?.data?.user?.name;
        state.email = action.payload?.data?.user?.email;
        state.role = action.payload?.data?.user?.role;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /*ForgotPassword */
      .addCase(forgotPassword.pending, (state) => {
        state.forgotPasswordLoading = true;
        state.forgotPasswordSuccess = false;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.forgotPasswordLoading = false;
        state.forgotPasswordSuccess = true;
        state.forgotPasswordMessage = action.payload?.message;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.forgotPasswordLoading = false;
        state.forgotPasswordSuccess = false;
        state.error = action.payload;
      })

      /* Reset Password */
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* Logout User */
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;