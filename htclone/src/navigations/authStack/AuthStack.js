import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import Splash from "../../screens/authScreens/Splash.js";
import Login from "../../screens/authScreens/Login.js";
import Register from "../../screens/authScreens/Register.js";
import OtpVerification from "../../screens/authScreens/OtpVerification.js";
import ResetPassword from "../../screens/authScreens/ResetPassword.js";
import ResetPasswordSuccess from "../../screens/authScreens/ResetPasswordSuccess.js"

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const authScreen = useSelector((state) => state.auth.authScreen);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash"
    >
      {/* sab screens register karo */}
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ResetPasswordSuccess" component={ResetPasswordSuccess} />
    </Stack.Navigator>
  );
};

export default AuthStack;


