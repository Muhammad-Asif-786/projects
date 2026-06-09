import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const ResetPasswordSuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* Green Circle Icon */}
      <View style={styles.iconWrapper}>
        <Icon name="check" size={36} color="#28a745" />
      </View>

      {/* Title */}
      <Text style={styles.title}>Password Reset Successful</Text>

      {/* Description */}
      <Text style={styles.subtitle}>
        Your password has been successfully updated. You can now use your new
        password to log in to your account.
      </Text>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Proceed to Login</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ResetPasswordSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  iconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "#e8f5e9",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#969494",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 30,
    paddingHorizontal: 10,
  },

  button: {
    backgroundColor: "#28a745",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop:"110",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});