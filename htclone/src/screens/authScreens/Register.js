import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { registerUser } from '../../reduxToolkit/actions/Authactions.js';
import { useDispatch } from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userID, setUserID] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+263');
  const [phone, setPhone] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [agreeTerms, setAgreeTerms] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigation = useNavigation();

  const handleNameChange = (first, last) => {
    setFirstName(first);
    setLastName(last);
    if (first && last) {
      setUserID(`${first.toLowerCase()}_${last.toLowerCase()}`);
    } else {
      setUserID('');
    }
  };


   const handleSubmit = async () => {
      try {
        // 1️⃣ Validation
         if (!agreeTerms) {
          alert('Please agree to Terms of Service and Privacy Policy');
          return;
        }

        if (password !== confirmPassword) {
          alert("Passwords do not match");
          return;
        }

        // 2️⃣ Dispatch thunk
        // const sendData = dispatch(registerUser(data));
        const sendData = dispatch(
          registerUser({
            name: `${firstName} ${lastName}`,
            email: email,
            password: password,
            mobile: `${countryCode}${phone}`,
          })
        );

        const result = await sendData;

        // 3️⃣ Error check
        if (registerUser.rejected.match(result)) {
          alert(result.payload || "Register failed");
          return;
        }

        // 4️⃣ Success
        if (registerUser.fulfilled.match(result)) {
          alert(result.payload?.message || "Account created successfully");
          navigation.navigate("Login");
        }

        // 5️⃣ reset form
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
        setAgreeTerms(false);

      } catch (error) {
        // ⚠️ unexpected errors (network crash, redux crash, etc.)
        console.log("Register Error:", error);
        alert("Something went wrong. Please try again.");
      }
    };

  return (
    <View style={{ flex: 1, backgroundColor: '#eff4f5' }}>

      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={20} color="#121212" />
        </TouchableOpacity>

        <Text style={styles.header}>Buyer Registration</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.section}>
          <Text style={styles.title}>Create Your Account</Text>
          <Text style={styles.subtitle}>
            Join as a buyer to bid on exclusive auctions
          </Text>
        </View>

        <Text style={styles.label}>First Name *</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={text => handleNameChange(text, lastName)}
          placeholder="John"
        />

        <Text style={styles.label}>Last Name *</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={text => handleNameChange(firstName, text)}
          placeholder="Doe"
        />

        <Text style={styles.label}>User ID</Text>
        <TextInput
          style={styles.inputuid}
          value={userID}
          editable={false}
          placeholder="Enter first and last name above"
        />

        <Text style={styles.infoText}>
          System will assign you an ID when name is filled
        </Text>

        <Text style={styles.label}>Email Address *</Text>
        {/* <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="yourname@example.com"
        /> */}
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text.toLowerCase())}
          placeholder="yourname@example.com"
        />

        <Text style={styles.label}>Phone Number</Text>

        {/* PHONE ROW */}
        <View style={styles.phoneContainer}>

          {/* COUNTRY BOX */}
          <View style={styles.countryBox}>
            <View style={styles.countryInner}>

              {/* FLAG */}
              <Text style={styles.flag}>
                {
                  countryCode === '+263' ? '🇿🇼' :
                  countryCode === '+1' ? '🇺🇸' :
                  countryCode === '+44' ? '🇬🇧' :
                  '🌍'
                }
              </Text>

              {/* CODE */}
              <Text style={styles.codeText}>{countryCode}</Text>

              {/* PICKER */}
              
                <Icon 
                  name="chevron-down" 
                  size={16} 
                  color="#555" 
                  style={{ marginLeft: 2 }} 
                />


              {/* ICON */}

            </View>
          </View>

          {/* PHONE INPUT */}
          <TextInput
            style={[styles.input, { flex: 1.5, marginLeft: 10 }]}
            value={phone}
            onChangeText={setPhone}
            placeholder="77X XXX XXX"
          />

        </View>

        {/* PASSWORD */}
        <Text style={styles.label}>Password *</Text>
        <View style={styles.passwordBox}>
          <TextInput
            style={styles.inputPassword}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholder="8+ chars: upper, lower, number, special"
          />
          <TouchableOpacity onPress={() => setShowPassword(p => !p)} style={styles.showBtn}>
            <Icon name={showPassword ? "eye-off" : "eye"} size={18} color="#30c243" />
          </TouchableOpacity>
        </View>

        {/* CONFIRM PASSWORD */}
        <Text style={styles.label}>Confirm Password *</Text>
        <View style={styles.passwordBox}>
          <TextInput
            style={styles.inputPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            placeholder="Confirm your password"
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(p => !p)} style={styles.showBtn}>
            <Icon name={showConfirmPassword ? "eye-off" : "eye"} size={18} color="#30c243" />
          </TouchableOpacity>
        </View>

        {/* TERMS */}
        <View style={styles.termsContainer}>
          <CheckBox value={agreeTerms} onValueChange={setAgreeTerms} tintColors={{ true: '#8BC34A', false: '#20211f24' }} />
          <Text style={styles.termsText}>
            I agree to the Terms of Service and Privacy Policy
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signInText}>
            Already have an account? <Text style={{ color: '#22cf4b' }}>Sign In</Text>
          </Text>
        </TouchableOpacity>

      </ScrollView>

      {/* BUTTON */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
headerContainer: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 10,
  marginTop: 30,
},
header: {
  fontFamily: "RobotoSlab-ExtraBold",
  fontSize: 22,
},

  container: {
    padding: 20,
    paddingBottom: 40,
  },

backBtn: {
  marginRight: 55, // space between icon & text
  marginLeft:8,
},

  section: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    borderWidth: .5,
    borderColor: '#ccc',
  },

  title: { fontSize: 20,fontFamily: "RobotoSlab-Bold", },
  subtitle: { fontSize: 14, color: '#666', marginTop: 7, fontFamily: "RobotoSlab-Regular", },

  label: { fontSize: 13, color: '#22cf4b', marginTop: 17,marginBottom: 17, fontFamily: "RobotoSlab-Regular", },

  input: {
    fontFamily: "RobotoSlab-Regular",
    borderWidth: .5,
    borderColor: '#d7d1d1',
    backgroundColor: '#f8f8f8',
    TextColor: '#fefdfd',
    fontSize: 14,
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
  },
  inputuid: {
    backgroundColor:"#86969611",
    fontFamily: "RobotoSlab-Regular",
    borderWidth: .5,
    borderColor: '#d7d1d1',
    TextColor: '#fefdfd',
    fontSize: 14,
    padding: 13,
    paddingTop: 15,
    paddingBottom:15,
    borderRadius: 10,
    marginTop: 5,
  },
  passwordBox: {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: .5,
  borderColor: "#d1d7e0",
  borderRadius: 8,
  paddingRight: 10,
},

inputPassword: {
  flex: 1,
  padding: 14,
},

showBtn: {
  padding: 5,
},

  infoText: { fontSize: 12, color: '#999', marginTop: 12, fontFamily: "RobotoSlab-Regular", },

  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  picker: { width: 100, height: 50, },
  plus: {
  fontSize: 16,
  marginRight: 5,
  color: '#000',
  fontWeight: 'bold',
},

  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },

  termsText: { marginLeft: 10,marginTop:30,marginBottom:20, flex: 1, color: '#555',fontFamily: "RobotoSlab-Regular", },

  signInText: {
    textAlign: 'center',
    marginTop: 18,
    color: '#555',
    
  },
  codeText: {
  fontSize: 14,
  marginLeft: 5,
  marginRight: 5,
  fontWeight: '600',
  color: '#000',
},

countryBox: {
  borderWidth: 0.5,
  borderColor: '#d7d1d1',
  backgroundColor: '#f8f8f8',
  borderRadius: 10,
  width: 100,
  height: 50, // 👈 match TextInput height
  justifyContent: 'center',
},

countryInner: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 8,
  paddingRight: 5, // right gap remove
},

phoneContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 5,
},


  bottomContainer: {
  padding: 15,
  borderColor: '#ddd',
  // marginTop:60,
  marginBottom:50
},

button: {
  backgroundColor: '#28a745',
  paddingVertical: 15,
  borderRadius: 12,
  alignItems: 'center',
},

buttonText: {
  fontFamily: "RobotoSlab-Bold",
  color: '#fff',
  fontSize: 16,
},



flag: {
  fontSize: 18,
  marginRight: 5,
},

picker: {
  flex: 1,
  height: 50,
},
});


