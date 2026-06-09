import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import AuthStack from "../authStack/AuthStack.js";
import DrawerNavigator from "../appStack/AppStack"; // ya jo bhi naam hai

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        {user ? (
          <Stack.Screen name="AppStack" component={DrawerNavigator} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;



