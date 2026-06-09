/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import { CircleDollarSign } from "lucide-react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../reduxToolkit/slice/Authslice.js';
import LogoutModal from '../../components/LogoutModel/LogoutModel.jsx';
import logoutHandler from "../../utils/logoutHandler.js";

const AdminCustomDrawer = (props) => {
  const dispatch = useDispatch();
  const [logoutVisible, setLogoutVisible] = useState(false);

  const activeRoute = props.state.routeNames[props.state.index];

  const handleNavigate = (screen) => {
    props.navigation.navigate(screen);
    props.navigation.closeDrawer();
  };

const handleLogout = async () => {

     setLogoutVisible(false);
     await logoutHandler({
      dispatch, navigation: props.navigation,
      showSuccessToast: (msg) => console.log(msg), // agar toast nahi hai to temporary
      showErrorToast: (msg) => console.log(msg),
    });
  };

const menu = [
  { name: "AdminDashboard", label: "Dashboard", icon: "home" },

  { name: "UserManagement", label: "User Management", icon: "users" },

  { name: "CategoryManagement", label: "Category Management", icon: "grid" },

  { name: "UnsoldInventory", label: "Unsold Inventory", icon: "archive" },

  { name: "DepositExemption", label: "Deposit Exemption", icon: "dollar-sign" },

  { name: "DepositMultiplierOverride", label: "Deposit Multiplier Override", icon: "percent" },

  { name: "GoodsReceivedVerification", label: "Goods Received Verification", icon: "clipboard" },

  { name: "Finance", label: "Finance", icon: "file-text" },
];

  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>HT Admin</Text>
        </View>

        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Icon name="x" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.dividerBottom} />

      {/* MENU */}
      <View style={styles.menu}>
        {menu.map((item) => {
          const isActive = activeRoute === item.name;

          return (
            <TouchableOpacity
              key={item.name}
              style={[styles.item, isActive && styles.active]}
              onPress={() => handleNavigate(item.name)}
            >
              <Icon name={item.icon} size={20} color="#333" />
              <Text style={styles.text}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.dividerBottom} />

      {/* FOOTER */}
      <View style={styles.footer}>

        <View style={styles.roleBox}>
          <Text style={styles.roleText}>Admin</Text>
        </View>

        <TouchableOpacity
          style={styles.logoutBox}
          onPress={() => setLogoutVisible(true)}
        >
          <Icon name="log-out" size={18} color="#777" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

      </View>

      {/* LOGOUT MODAL */}
      <LogoutModal
        visible={logoutVisible}
        onClose={() => setLogoutVisible(false)}
        onLogout={handleLogout}
      />

    </SafeAreaView>
  );
};

export default AdminCustomDrawer;

const styles = StyleSheet.create({

  container: { flex: 1, padding: 15, marginLeft: 8 },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
    marginBottom: 10,
    alignItems: 'center',
  },

  headerLeft: { flexDirection: 'row', alignItems: 'center' },

  logo: { width: 18, height: 18 },

  title: { marginLeft: 10, fontSize: 16, fontWeight: '600' },

  menu: { flex: 1 },

  item: {
    flexDirection: 'row',
    marginBottom: 5,
    padding: 8,
    borderRadius: 6
  },

  text: { marginLeft: 10, fontSize: 14 },

  active: { backgroundColor: '#eee' },

  dividerBottom: {
    height: 1,
    backgroundColor: '#dee1e8',
    marginVertical: 10,
  },

  footer: {
    flexDirection: 'row',
    gap: 25,
    marginBottom: 40,
    alignItems: 'center',
  },

  roleBox: {
    borderWidth: 1,
    borderColor: '#6BAF45',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },

  roleText: {
    color: '#6BAF45',
    fontWeight: '600',
  },

  logoutBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoutText: {
    marginLeft: 6,
    color: '#777',
  },
});