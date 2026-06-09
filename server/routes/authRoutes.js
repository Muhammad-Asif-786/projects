import express from "express";
import {Router} from "express"

import { forgotPasswordController, loginController, logoutController, registerController, resetPasswordController, verifyEmailController} from "../controllers/authController.js";
import auth from "../middleware/auth.js";

const authRouter = Router()

authRouter.post("/register", registerController);
authRouter.post("/verify-email", verifyEmailController)
authRouter.post("/login", loginController);
authRouter.post("/forgotPassword", forgotPasswordController);
authRouter.post("/logout",auth, logoutController)
authRouter.post("/resetPassword", resetPasswordController)


export default authRouter