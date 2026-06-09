import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManagerDashboard from "../../screens/appScreens/manager/ManagerDashboard.js";
import CreateEvent from "../../screens/appScreens/manager/CreateEvent.js";
import EventDetail from "../../screens/appScreens/manager/EventDetail.js";
import LotDetail from "../../screens/appScreens/manager/LotDetail.js";
import UserManagement from "../../screens/appScreens/manager/UserManagement.js";
import CategoryManagement from "../../screens/appScreens/manager/CategoryManagement.js";
import UnsoldInventory from "../../screens/appScreens/manager/UnsoldInventory.js";
import DepositExemption from "../../screens/appScreens/manager/DepositExemption.js";
import DepositMultiplierOverride from "../../screens/appScreens/manager/DepositMultiplierOverride.js";
import GoodsReceivedVerification from "../../screens/appScreens/manager/GoodsReceivedVerification.js";
import CompletedAuctions from "../../screens/appScreens/manager/CompletedAuctions.js";
import ManagerCustomDrawer from "../../navigations/drawers/ManagerCustomDrawer.js";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


// Only drawer-visible screens go here
const ManagerDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <ManagerCustomDrawer {...props} />}
    >
      <Drawer.Screen name="ManagerDashboard" component={ManagerDashboard} />
      <Drawer.Screen name="UserManagement" component={UserManagement} />
      <Drawer.Screen name="CategoryManagement" component={CategoryManagement} />
      <Drawer.Screen name="UnsoldInventory" component={UnsoldInventory} />
      <Drawer.Screen name="DepositExemption" component={DepositExemption} />
      <Drawer.Screen name="DepositMultiplierOverride" component={DepositMultiplierOverride} />
      <Drawer.Screen name="GoodsReceivedVerification" component={GoodsReceivedVerification} />
      <Drawer.Screen name="CompletedAuctions" component={CompletedAuctions} />
     
    </Drawer.Navigator>
  );
};


// Stack wraps the drawer — screens added here are pushed on top (no drawer)
const ManagerDrawerNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ManagerDrawer" component={ManagerDrawer} />
        <Stack.Screen name="CreateEvent" component={CreateEvent} />
        <Stack.Screen name="EventDetail" component={EventDetail} />
        <Stack.Screen name="LotDetail" component={LotDetail} />
      </Stack.Navigator>
    );
};

export default ManagerDrawerNavigator;


