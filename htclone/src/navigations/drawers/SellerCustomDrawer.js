/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../reduxToolkit/slice/Authslice.js';
import LogoutModal from '../../components/LogoutModel/LogoutModel.jsx';

const SellerCustomDrawer = (props) => {
  const dispatch = useDispatch();
  const [logoutVisible, setLogoutVisible] = useState(false);

  // ✅ SAFE (error fix)
  // const activeRoute = props?.state?.routeNames?.[props?.state?.index];
  const activeRoute = props?.state?.routes?.[props?.state?.index]?.name;

  const handleNavigate = (screen) => {
    props.navigation.navigate(screen);
    props.navigation.closeDrawer();
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    setLogoutVisible(false);
    props.navigation.closeDrawer();
  };

  const drawerItems = [
    { name: 'SellerDashboard', label: 'Dashboard', icon: 'grid' },
  ];

  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>HT Seller</Text>
        </View>

        <TouchableOpacity  onPress={() => props.navigation.closeDrawer()}>
          <Icon name="x" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      {/* MENU */}
      <View style={styles.menu}>
        {drawerItems.map((item) => {
          const isActive = activeRoute === item.name;

          return (
            <TouchableOpacity
              key={item.name}
              style={[styles.menuItem, isActive && styles.activeItem]}
              onPress={() => handleNavigate(item.name)}
            >
              <Icon
                name={item.icon}
                size={20}
                color={isActive ? '#6BAF45' : '#555'}
              />

              <Text style={[
                styles.menuText,
                isActive && { color: '#6BAF45' }
              ]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.dividerBottom} />

      {/* FOOTER */}
      <View style={styles.footer}>

        <View style={styles.roleBox}>
          <Text style={styles.roleText}>Seller</Text>
        </View>

        <TouchableOpacity style={styles.logoutBox}
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

export default SellerCustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: 300,
    paddingHorizontal: 15,
    marginLeft: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 45,
    marginBottom: 10,
    alignItems: 'center',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 18,
    height: 18,
    marginLeft: 18,
  },

  title: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },

  divider: {
    height: 1,
    backgroundColor: '#dee1e8',
    marginVertical: 10,
  },

  menu: {
    flex: 1,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 6,
  },

  activeItem: {
    backgroundColor: '#ecf2e8',
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  menuText: {
    marginLeft: 12,
    fontSize: 15,
    color: '#333',
  },

  dividerBottom: {
    height: 1,
    backgroundColor: '#dee1e8',
    marginVertical: 10,
  },

  footer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
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

