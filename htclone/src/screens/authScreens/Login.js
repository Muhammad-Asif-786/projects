import React, { useState } from "react";
import { View, Text, Image,ScrollView, TextInput, TouchableOpacity, StyleSheet,  KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch } from "react-redux";
import { loginUser, forgotPassword } from "../../reduxToolkit/actions/Authactions.js";
import { useSelector } from "react-redux";
import { store } from "../../reduxToolkit/store.js";



const Login = () => {

 const[ showPassword, setShowPassword ] = useState(false)
 const navigation = useNavigation();
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const dispatch = useDispatch();

 const { role } = useSelector(state => state.auth);


  // const handleLogin = () => {
  //   if (password !== "StrongPassword@123") {
  //     alert("Invalid password");
  //     return;
  //   }

  //   let role = "visitor";
  //   if (email === "newadmin@yopmail.com") role = "admin";
  //   else if (email === "newmanager@yopmail.com") role = "manager";
  //   else if (email === "buyer01@yopmail.com") role = "buyer";
  //   else if (email === "newseller@yopmail.com") role = "seller";
  //   // inky ilawa agar koi ur hy to wo visitors py lay jaiy

  //   dispatch(loginUser({ role }));
  // };

  const handleLogin = async () => {
      try {
        // 1️⃣ Validation
        if (!email || !password) {
          alert("Email and Password are required");
          return;
        }

        // 2️⃣ Dispatch thunk
        const sendData = dispatch(loginUser({
            email,
            password,
          })
        );

        const result = await sendData;

        // 3️⃣ Error check
        if (loginUser.rejected.match(result)) {
          alert(result.payload || "Login failed");
          return;
        }

        // 4️⃣ Success
       if (loginUser.fulfilled.match(result)) {
        alert(result.payload?.message || "Login successful");

        const userRole = result.payload?.data?.user?.role;

        let route = "AdminDrawer"; // default admin root

        if (userRole === "manager") {
          route = "ManagerDrawer";
        } else if (userRole === "buyer") {
          route = "BuyerDrawer";
        } else if (userRole === "seller") {
          route = "SellerDrawer";
        } else if (userRole === "admin") {
          route = "AdminDrawer";
        } else {
          route = "Visitor";
        }

      }

        // 5️⃣ Reset form
        setEmail("");
        setPassword("");

      } catch (error) {
        console.log("Login Error:", error);
        alert("Something went wrong. Please try again.");
      }
    };


    

  const handleForgotPassword = async () => {

      try {
        if (!email.trim()) {
          alert("Please provide email");
          return;
        }

        const result = await dispatch(
          forgotPassword({ email })
        );

        if (forgotPassword.rejected.match(result)) {
          alert(result.payload);
          return;
        }

        if (forgotPassword.fulfilled.match(result)) {
          alert(result.payload.message);

          navigation.navigate("OtpVerification", {
            email,
          });
        }

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  } 



  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior="padding"
    >
  <ScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    keyboardShouldPersistTaps="handled"
  >
    <View style={styles.container}>
      <View style={styles.box}>

        <Text style={styles.heading}>Login</Text>

        <Image
          source={require('../../assets/logo.png')}
          resizeMode="contain"
          style={styles.topimage}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="abc@example.com"
          value={email}
          onChangeText={(v) => setEmail(v)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordBox}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword((p) => !p)}
            style={styles.showBtn}
          >
            <Icon
              name={showPassword ? "eye-off" : "eye"}
              size={18}
              color="#30c243"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.forgotBtn}  
          onPress={handleForgotPassword}
        >
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.submitBtn} 
          onPress={handleLogin}
        >
          <Text style={styles.submitText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.registerBox}>
          <Text style={styles.registerBottomText}>
            Don’t have an account? 
          </Text>
          <TouchableOpacity 
           onPress={()=> navigation.navigate("Register")}
          >
            <Text style={styles.registerText}>Sign Up.</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  </ScrollView>
</KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // full white background
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "100%",
    flex: 1,
    padding: 20,
  },
  heading: {
    fontFamily: "RobotoSlab-ExtraBold",
    fontSize: 27,
    // fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    paddingTop: 8,
  },
  topimage: {
    marginTop: 20,
    width: '100%',
    height: 230,
    marginBottom: 10,
  },
  label: {
    fontFamily: "RobotoSlab-SemiBold",
    marginBottom: 4,
    color: "#374151",
    fontSize: 18,
    marginTop: 12,
  },
  input: {
    fontFamily: "RobotoSlab-semiBold",
    borderWidth: 1,
    borderColor: "#d1d7e0",
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
  },
  passwordBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    marginBottom: 10,
    padding: 5,
  },
  inputPassword: {
    fontFamily: "RobotoSlab-semiBold",
    flex: 1,
    padding: 10,
  },
  showBtn: {
    paddingHorizontal: 10,
  },
  forgotBtn: {
    alignSelf: "flex-end",
    marginBottom: 16,
  },
  forgotText: {
    fontFamily: "RobotoSlab-Bold",
    color: "#30c243",
    // fontWeight: "bold",
    fontSize: 18,
    marginTop: 12,
  },
  submitBtn: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#30c243",
    // marginTop: 8,
  },
  submitText: {
    fontFamily: "RobotoSlab-Bold",
    fontSize:16,
    color: "#fff",
    // fontWeight: "bold",
    justifyContent: "center",
  },
  registerBox: {
    marginTop: 115,
    flexDirection: "row",
    justifyContent: "center",
  },
  registerBottomText: {
    fontFamily: "RobotoSlab-Regular",
    color: "#b3b7bc",
    marginTop: 5,
  },
  registerText: {
    fontFamily: "RobotoSlab-Bold",
    color: "#30c243",
    // fontWeight: "800",
    fontSize: 18,
    textAlign: "center",
    marginLeft: 5,
  },
});

