import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../../navigations/drawers/CustomDrawer";
import AuctionScreen from "../../screens/appScreens/AuctionScreen";
import ProductDetail from "../../screens/appScreens/ProductDetail"

import Home from "../../screens/appScreens/Home.js";
import Buy from "../../screens/appScreens/buyer/Buy.js";
import Sell from "../../screens/appScreens/buyer/Sell.js";
import About from "../../screens/appScreens/About.js";
import Contact from "../../screens/appScreens/Contact.js";
import Register from "../../../src/screens/authScreens/Register.js";
import Login from "../../../src/screens/authScreens/Login.js";

// Buy Screens
import Electronics from "../../screens/appScreens/buyer/Electronics";
import Goods from "../../screens/appScreens/buyer/Goods";
import Musicalinstruments from "../../screens/appScreens/buyer/Musicalinstruments";
import OutofHand from "../../screens/appScreens/buyer/OutofHand";
import TestingCategory from "../../screens/appScreens/buyer/TestingCategory";
import VehiclesEquipments from "../../screens/appScreens/buyer/VehiclesEquipments";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{ headerShown: false }}
      >

        {/* MAIN SCREENS */}
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Sell" component={Sell} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Login" component={Login} />

        {/* BUY SCREENS (IMPORTANT) */}
        <Drawer.Screen name="Electronics" component={Electronics} />
        <Drawer.Screen name="Goods" component={Goods} />
        <Drawer.Screen name="Musicalinstruments" component={Musicalinstruments} />
        <Drawer.Screen name="OutofHand" component={OutofHand} />
        <Drawer.Screen name="TestingCategory" component={TestingCategory} />
        <Drawer.Screen name="VehiclesEquipments" component={VehiclesEquipments} />
         
          {/*  SCREENS (IMPORTANT) */}
        <Drawer.Screen name="AuctionScreen" component={AuctionScreen} />
        <Drawer.Screen name="ProductDetail" component={ProductDetail} />

      </Drawer.Navigator>
  );
};

export default DrawerNavigator;

