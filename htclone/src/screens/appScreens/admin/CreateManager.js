import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const CreateManager = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backRow}
            onPress={() => navigation.goBack()}
          >
            <Icon name="chevron-left" size={22} color="#16A34A" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Create Manager</Text>

          <View style={{ width: 60 }} />
        </View>

        <View style={styles.divider} />
      </View>

      {/* FORM */}
{/* FORM */}
<ScrollView
  showsVerticalScrollIndicator={false}
  contentContainerStyle={styles.scrollContainer}
>
  <View style={styles.formContainer}>
    
    <Text style={styles.sectionTitle}>Account</Text>

    {/* EMAIL */}
    <View style={styles.inputGroup}>
      <Text style={styles.label}>Email*</Text>
      <TextInput
        style={styles.input}
        placeholder="name@company.com"
        value={email}
        onChangeText={setEmail}
      />
    </View>

    {/* PASSWORD */}
    <View style={styles.inputGroup}>
      <Text style={styles.label}>Password*</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
    </View>

    {/* FIRST NAME */}
    <View style={styles.inputGroup}>
      <Text style={styles.label}>First name*</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
      />
    </View>

    {/* LAST NAME */}
    <View style={styles.inputGroup}>
      <Text style={styles.label}>Last name*</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
      />
    </View>

    {/* DISPLAY NAME */}
    <View style={styles.inputGroup}>
      <Text style={styles.label}>Display name*</Text>
      <TextInput
        style={styles.input}
        value={displayName}
        onChangeText={setDisplayName}
      />
    </View>

    {/* PHONE */}
    <View style={styles.inputGroup}>
      <Text style={styles.label}>Phone*</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
    </View>

   

  </View>
  {/* BUTTON */}
<View>
    <TouchableOpacity style={styles.submitBtn}>
      <Text style={styles.submitText}>Create Manager</Text>
    </TouchableOpacity>
</View>
</ScrollView>

 
    </View>
  );
};

export default CreateManager;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },

  headerContainer: {
    backgroundColor: "#fff",
    paddingTop: 36,
    paddingHorizontal: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  backText: {
    color: "#16A34A",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 4,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  divider: {
    height: 0.5,
    backgroundColor: "#D1D5DB",
    marginTop: 12,
  },

  scrollContainer: {
    padding: 16,
    paddingBottom: 40,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },

  inputGroup: {
    marginBottom: 10,
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#808288",
    marginTop: 12,
    marginBottom: 8,
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: .5,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 44,
    fontSize: 15,
    color: "#111827",
  },
  formContainer: {
  backgroundColor: "#fff",
  borderRadius: 16,
  padding: 16,
  elevation: 2,
  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 5,
  shadowOffset: { width: 0, height: 2 },
},

submitBtn: {
  backgroundColor: "#16A34A",
  paddingVertical: 14,
  borderRadius: 12,
  marginTop: 20,
  marginBottom: 50,
  alignSelf: "center",   
  alignItems: "center",
  justifyContent: "center",
  width: "100%",          
},

submitText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "700",
},
});