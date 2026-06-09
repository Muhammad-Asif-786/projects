import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import SellerCustomDrawer from "../../navigations/drawers/SellerCustomDrawer.js";
import SellerDashboard from "../../screens/appScreens/seller/SellerDashboard.js";

const Drawer = createDrawerNavigator();

const SellerDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <SellerCustomDrawer {...props} />}
    >
      <Drawer.Screen name="SellerDashboard"component={SellerDashboard} />

    </Drawer.Navigator>
  );
};

export default SellerDrawerNavigator;

