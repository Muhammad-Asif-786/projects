import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation, useRoute } from "@react-navigation/native";

const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(293);

  const navigation = useNavigation();
  const route = useRoute();

  const { email } = route.params || {};

  // ✅ ADD: refs for auto focus
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  // ✅ FIXED: auto move next input
  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // move to next box
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      alert("Enter complete OTP");
      return;
    }

    navigation.navigate("ResetPassword", {
      email,
      otp: enteredOtp,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Otp Verification</Text>

        <View style={{ width: 30 }} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Enter the 6-digit code</Text>

        <Text style={styles.subtitle}>
          We have sent the code to{"\n"}
          newadmin@yopmail.com
        </Text>

        {/* OTP Boxes */}
        <View style={styles.otpContainer}>
          {otp.map((item, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              value={item}
              onChangeText={(text) => handleOtpChange(text, index)}
              keyboardType="number-pad"
              maxLength={1}
              style={styles.otpBox}
            />
          ))}
        </View>

        {/* Timer */}
        <Text style={styles.timer}>{formatTime(timer)}</Text>

        {/* Resend */}
        <TouchableOpacity>
          <Text style={styles.resendText}>
            Resend Code ({formatTime(timer)})
          </Text>
        </TouchableOpacity>
      </View>

      {/* Verify Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={handleVerify}
        >
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 26,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },

  content: {
    paddingHorizontal: 25,
    marginTop: 40,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 16,
    color: "#8A8A8A",
    lineHeight: 26,
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 70,
    gap: 6,
  },

  otpBox: {
    width: 48,
    height: 80,
    borderWidth: 1,
    borderColor: "#9CD6A5",
    borderRadius: 16,
    textAlign: "center",
    fontSize: 24,
    color: "#000",
    backgroundColor: "#fff",
  },

  timer: {
    textAlign: "center",
    marginTop: 90,
    fontSize: 22,
    fontWeight: "700",
    color: "#8A8A8A",
  },

  resendText: {
    textAlign: "center",
    marginTop: 70,
    fontSize: 18,
    fontWeight: "600",
    color: "#A7DDB0",
  },

  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  verifyButton: {
    backgroundColor: "#39B54A",
    height: 60,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 34,
  },

  verifyText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});