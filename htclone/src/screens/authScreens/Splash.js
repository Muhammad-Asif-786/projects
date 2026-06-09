import React, { useEffect } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';

const Splash = ({ navigation }) => {

  const authScreen = useSelector((state) => state.auth.authScreen);

  useEffect(() => {
    const timer = setTimeout(() => {

      if (authScreen === "Register") {
        navigation.replace("Register");
      } else {
        navigation.replace("Login");
      }

    }, 2000);

    return () => clearTimeout(timer);
  }, [authScreen, navigation]);

  return (
    <ImageBackground   
      source={require('../../assets/logo.png')}
      resizeMode="contain"
      style={styles.topimage}
    />
  );
};

export default Splash;

const styles = StyleSheet.create({
  topimage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
});



