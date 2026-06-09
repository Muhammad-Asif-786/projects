import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../reduxToolkit/actions/Authactions.js";
import { useRoute } from "@react-navigation/native";


const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const route = useRoute();
  const { email } = route.params;
  
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const [data, setData] = useState({
     email: email,   // ya isliay k ya pichli screen sy arhi hy params k through
    newPassword: "",
    confirmPassword: "",
  })

  const handleChange = (name, value) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const result = await dispatch(resetPassword(data)); //data teno fields lay k ja rha hy

      if (resetPassword.rejected.match(result)) {
        alert(result.payload);
        return;
      }

      if (resetPassword.fulfilled.match(result)) {
        alert(result.payload.message);

        navigation.navigate("ResetPasswordSuccess"); // yahan change kro
      }
    } catch (error) {
      console.log(error);
    }
  };
 



  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Reset Password</Text>

        <View style={{ width: 30 }} />
      </View>

      {/* Form */}
      <View style={styles.content}>
        <Text style={styles.label}>New Password</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter new password"
            placeholderTextColor="#8A8A8A"
            secureTextEntry={!showPassword}
            value={data.newPassword}
            onChangeText={(text) =>
            setData((prev) => ({ ...prev, newPassword: text }))
            }
            style={styles.input}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon
              name={showPassword ? "eye" : "eye-off"}
              size={16}
              color="#4CAF50"
            />
          </TouchableOpacity>
        </View>

        <Text style={[styles.label, { marginTop: 25 }]}>
          Confirm New Password
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Confirm new password"
            placeholderTextColor="#8A8A8A"
            secureTextEntry={!showConfirmPassword}
            value={data.confirmPassword}
            onChangeText={(text) =>
            setData((prev) => ({ ...prev, confirmPassword: text }))
            }
            style={styles.input}
          />

          <TouchableOpacity
            onPress={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
          >
            <Icon
              name={showConfirmPassword ? "eye" : "eye-off"}
              size={16}
              color="#4CAF50"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.infoText}>
          Password must be 8 characters long and include a
          {"\n"}
          number, special character and one uppercase letter.
        </Text>
      </View>

      {/* Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button}
        onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },

  content: {
    marginTop: 280,
    paddingHorizontal: 25,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 2,
  },

  inputContainer: {
    height: 50,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 14,
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },

  infoText: {
    marginTop: 20,
    fontSize: 14,
    color: "#8A8A8A",
    lineHeight: 18,
  },

  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 60,
  },

  button: {
    height: 62,
    backgroundColor: "#39B54A",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});