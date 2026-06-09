import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    role: {
      type: String,
      enum: ["admin", "manager", "buyer", "seller", "guest"],
      default: "guest",
    },

    refresh_token: {
      type: String,
      default: ""
    },

    verify_email: {
      type: Boolean,
      default: false,
    },

   emailVerifyOtp: {
      type: String,
      default: null,
    },
    emailVerifyExpiry: {
      type: Date,
      default: null,
    },

    mobile: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false,
    },

    forgotPasswordOtp: {
      type: String,
      default: null,
    },

    forgotPasswordExpiry: {
      type: Date,
      default: null,
    },
    
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);


export default mongoose.model("User", userSchema);