import React from "react";
import { useSelector } from "react-redux";
import AdminDrawerNavigator from "../roleStack/AdminStack.js";
import BuyerDrawerNavigator from "../roleStack/BuyerStack.js";
import SellerDrawerNavigator from "../roleStack/SellerStack.js";
import ManagerDrawerNavigator from "../roleStack/ManagerStack.js";
import GuestDrawerNavigator from "../roleStack/GuestStack.js";
import AuthStack from "../authStack/AuthStack.js";

const AppStack = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) return <AuthStack />;

  switch (user.role) {
    case "admin":
      return <AdminDrawerNavigator />;

    case "buyer":
      return <BuyerDrawerNavigator />;

    case "seller":
      return <SellerDrawerNavigator />;

    case "manager":
      return <ManagerDrawerNavigator />;

    default:
      return <GuestDrawerNavigator />;
  }
};

export default AppStack;


