import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import generatedAccessToken from "../utils/generatedAccessToken.js";
import generatedRefreshToken from "../utils/generatedRefreshToken.js";
import generateOtp from "../utils/generatedOtp.js";
import forgotPasswordTemplate from "../utils/forgotPasswordTemplate.js";
import sendEmail from "../utils/sendEmail.js";
import verifyEmailTemplate from "../utils/verifyEmailTemplate.js";



export async function registerController(request, response) {
  
  try {
    const { name, email, password, mobile  } = request.body;

    if(!name || !email || !password || !mobile) {
      return response.status(400).json({
       success: false,
       message: "Provide all required fields",
      error: true,
      });
    }

    const existingUser = await UserModel.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return response.status(400).json({
        success: false,
        message: "Email already registered",
        error: true,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const payload = {
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      mobile: mobile,
    };

    const newUser = new UserModel(payload);
    const savedUser = await newUser.save();

    const userResponse = {
      id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
      mobile: savedUser.mobile,
      isActive: savedUser.isActive,
      createdAt: savedUser.createdAt,
    };
    
    try {
      const verifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${savedUser._id}`;

      await sendEmail({
        sendTo: email,
        subject: "Verify email from projects application",
        html: verifyEmailTemplate({ name, url: verifyEmailUrl }),
      });

    }catch(error) {
      console.log("Email failed but user registered");
    }


    return response.status(201).json({
      error: false,
      success: true,
      message: "User registered successfully",
      data: userResponse,
    });


  }catch (error) {
    console.error("Error during registration:", error);
    return response.status(500).json({
      success: false,
      message: "Internal server error",
      error: true
    });
  }
}

export async function verifyEmailController(request, response) {
  try {
    const { code } = request.body;

    const user = await UserModel.findOne(
      {emailVerifyOtp: code },
      // {verify_email: true}
    );

    if (!user) {
      return response.status(400).json({
        message: "Invalid code",
        error: true,
        success: false,
      });
    }

    // expiry check
    if (user.emailVerifyExpiry && user.emailVerifyExpiry < new Date()) {
      return response.status(400).json({
        message: "Code expired",
        error: true,
        success: false,
      });
    }

    user.emailVerifyOtp = null;
    user.emailVerifyExpiry = null;
    user.verify_email = true;

    await user.save();

    return response.json({
      message: "Email verification done",
      success: true,
      error: false,
    });

  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function loginController(request, response) {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(400).json({
        success: false,
        message: "Provide email and password",
        error: true,
      });
    }

    const user = await UserModel
            .findOne({ email: email.toLowerCase() })            
            .select("+password");

    if (!user) {
      return response.status(400).json({
        success: false,
        message: "User not registered",
        error: true,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return response.status(400).json({
        success: false,
        message: "Invalid credentials",
        error: true,
      });
    }

    const accessToken = await generatedAccessToken(user._id);
    const refreshToken = await generatedRefreshToken(user._id);

    return response.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        accessToken,
        refreshToken,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
    });

  }catch (error) {
    console.error("Error during login:", error);
    return response.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
    });
  }
}

export async function logoutController(request, response) {
    try {
        const userid = request.userId

        const cookiesOption = {
            httpOnly : true,
            // secure : true,
            secure: process.env.NODE_ENV === "production",
            sameSite : "None"
        }

        response.clearCookie("accessToken",cookiesOption)
        response.clearCookie("refreshToken",cookiesOption)

        const removeRefreshToken = await UserModel.findByIdAndUpdate(userid,{
            refresh_token : ""
        })

        return response.json({
            message : "Logout successfully",
            error : false,
            success : true
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

export async function forgotPasswordController(request, response) {
  try {
    const { email } = request.body;

    if (!email) {
      return response.status(400).json({
        success: false,
        message: "Email is required",
        error: true,
      });
    }

    const user = await UserModel.findOne({
        email: email.toLowerCase(),
      });

      if (!user) {
        return response.status(400).json({
          success: false,
          message: "User not found",
          error: true,
        });
      }

  const otp = generateOtp();
  const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); 


  const update = await UserModel.findByIdAndUpdate(user._id, {
      forgotPasswordOtp: otp,
      forgotPasswordExpiry: otpExpiry,
    });

  await sendEmail({
        sendTo : email,
        subject : "Forgot Password OTP",
        html : forgotPasswordTemplate({
            name : user.name,
            otp : otp
        })
    })

    return response.json({
        message : "check your email",
        error : false,
        success : true
    })



  }catch (error) {
    console.error("Error during forgot password:", error);
    return response.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
    });
  }
}

export async function resetPasswordController(request, response) { 
  try {
     const {email, newPassword, confirmPassword} = request.body
     if (!email || !newPassword || !confirmPassword) {
        return response.status(400).json({
            message: "Provide required fields",
            error: true,
            success: false
        });
      }  

      const user = await UserModel.findOne({ email: email.toLowerCase() });

      if (!user) {
          return response.status(400).json({
              message: "Email is not available",
              error: true,
              success: false
          });
        }

        if (newPassword !== confirmPassword) {
          return response.status(400).json({
              message: "newPassword and confirmPassword must be same.",
              error: true,
              success: false
          });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(newPassword, salt);

        await UserModel.findOneAndUpdate(
            // { _id: user._id }, 
            { email: email.toLowerCase() },
            { password: hashPassword }
        );

        return response.json({
            message: "Password updated successfully.",
            error: false,
            success: true
        });


  } catch (error) {
    console.error("Error during resetPassword:", error);
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}
    