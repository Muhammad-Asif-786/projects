import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* ---------------- BUYER SCREENS ---------------- */
import BuyerDashboard from "../../screens/appScreens/buyer/BuyerDashboard";
import Buy from "../../screens/appScreens/buyer/Buy";
import Sell from "../../screens/appScreens/buyer/Sell";
import BuyerBids from "../../screens/appScreens/buyer/BuyerBids";
import WonAuctions from "../../screens/appScreens/buyer/WonAuctions";
import WatchList from "../../screens/appScreens/buyer/WatchList";
import Wallet from "../../screens/appScreens/buyer/Wallet";
import Profile from "../../screens/appScreens/buyer/Profile";

import Electronics from "../../screens/appScreens/buyer/Electronics";
import Goods from "../../screens/appScreens/buyer/Goods";
import Musicalinstruments from "../../screens/appScreens/buyer/Musicalinstruments";
import OutofHand from "../../screens/appScreens/buyer/OutofHand";
import TestingCategory from "../../screens/appScreens/buyer/TestingCategory";
import VehiclesEquipments from "../../screens/appScreens/buyer/VehiclesEquipments";

/* ---------------- DETAIL SCREENS ---------------- */
import EventDetail from "../../screens/appScreens/buyer/EventDetail";
import LotDetail from "../../screens/appScreens/buyer/LotDetail";

/* ---------------- CUSTOM DRAWER ---------------- */
import BuyerCustomDrawer from "../../navigations/drawers/BuyerCustomDrawer";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

/* ---------------- DRAWER SCREENS ---------------- */
const BuyerDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <BuyerCustomDrawer {...props} />}
    >
      <Drawer.Screen name="BuyerDashboard" component={BuyerDashboard} />
      <Drawer.Screen name="Buy" component={Buy} />
      <Drawer.Screen name="Sell" component={Sell} />

      <Drawer.Screen name="BuyerBids" component={BuyerBids} />
      <Drawer.Screen name="WonAuctions" component={WonAuctions} />
      <Drawer.Screen name="WatchList" component={WatchList} />
      <Drawer.Screen name="Wallet" component={Wallet} />
      <Drawer.Screen name="Profile" component={Profile} />

      <Drawer.Screen name="Electronics" component={Electronics} />
      <Drawer.Screen name="Goods" component={Goods} />
      <Drawer.Screen name="Musicalinstruments" component={Musicalinstruments} />
      <Drawer.Screen name="OutofHand" component={OutofHand} />
      <Drawer.Screen name="TestingCategory" component={TestingCategory} />
      <Drawer.Screen name="VehiclesEquipments" component={VehiclesEquipments} />
    </Drawer.Navigator>
  );
};

/* ---------------- STACK WRAPPER ---------------- */
const BuyerDrawerNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      {/* Drawer first */}
      <Stack.Screen name="BuyerDrawer" component={BuyerDrawer} />

      {/* Detail screens (no drawer) */}
      <Stack.Screen name="EventDetail" component={EventDetail} />
      <Stack.Screen name="LotDetail" component={LotDetail} />

    </Stack.Navigator>
  );
};

export default BuyerDrawerNavigator;

