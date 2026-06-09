import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AdminDashboard from "../../screens/appScreens/admin/AdminDashboard.js";
import UserManagement from "../../screens/appScreens/admin/UserManagement.js";
import CategoryManagement from "../../screens/appScreens/admin/CategoryManagement.js";
import CreateEvent from "../../screens/appScreens/admin/CreateEvent.js";
import EventDetail from "../../screens/appScreens/admin/EventDetail.js";
import LotDetail from "../../screens/appScreens/admin/LotDetail.js";
import UnsoldInventory from "../../screens/appScreens/admin/UnsoldInventory.js";
import DepositExemption from "../../screens/appScreens/admin/DepositExemption.js";
import DepositMultiplierOverride from "../../screens/appScreens/admin/DepositMultiplierOverride.js";
import GoodsReceivedVerification from "../../screens/appScreens/admin/GoodsReceivedVerification.js";
import Finance from "../../screens/appScreens/admin/Finance.js";

import AdminCustomDrawer from "../../navigations/drawers/AdminCustomDrawer.js";
import CreateManager from "../../screens/appScreens/admin/CreateManager.js";
import ManagerDetailsScreen from "../../screens/appScreens/admin/ManagerDetailsScreen.js";
import RoleManagementScreen from "../../screens/appScreens/admin/RoleManagementScreen.js";
import CreateCategory from "../../screens/appScreens/admin/CreateCategory.js";
import EditCategory from "../../screens/appScreens/admin/EditCategory.js";
import CategoryFieldsScreen from "../../screens/appScreens/admin/CategoryFields.js";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// Only drawer-visible screens go here
const AdminDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <AdminCustomDrawer {...props} />}
    >
      <Drawer.Screen name="AdminDashboard" component={AdminDashboard} />
      <Drawer.Screen name="UserManagement" component={UserManagement} />
      <Drawer.Screen name="CategoryManagement" component={CategoryManagement} />
      <Drawer.Screen name="UnsoldInventory" component={UnsoldInventory} />
      <Drawer.Screen name="DepositExemption" component={DepositExemption} />
      <Drawer.Screen name="DepositMultiplierOverride" component={DepositMultiplierOverride} />
      <Drawer.Screen name="GoodsReceivedVerification" component={GoodsReceivedVerification} />
      <Drawer.Screen name="Finance" component={Finance} />
    </Drawer.Navigator>
  );
};

// Stack wraps the drawer — screens added here are pushed on top (no drawer)
const AdminDrawerNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AdminDrawer" component={AdminDrawer} />
        <Stack.Screen name="CreateEvent" component={CreateEvent} />
        <Stack.Screen name="EventDetail" component={EventDetail} />
        <Stack.Screen name="LotDetail" component={LotDetail} />
        <Stack.Screen name="CreateManager" component={CreateManager} />
        <Stack.Screen name="ManagerDetails" component={ManagerDetailsScreen} />
        <Stack.Screen name="RoleManagement" component={RoleManagementScreen} />
        <Stack.Screen name="CreateCategory" component={CreateCategory} />
        <Stack.Screen name="EditCategory" component={EditCategory} />
        <Stack.Screen name="CategoryFields" component={CategoryFieldsScreen} />
      </Stack.Navigator>
    );
};

export default AdminDrawerNavigator;




