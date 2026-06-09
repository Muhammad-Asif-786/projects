/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../reduxToolkit/slice/Authslice.js';
import LogoutModal from '../../components/LogoutModel/LogoutModel.jsx';

const BuyerCustomDrawer = (props) => {

  const showBuyDropdownRef = React.useRef(false);
  const [showBuyDropdown, setShowBuyDropdown] = React.useState(false);
  const [activeSubItem, setActiveSubItem] = React.useState('');
  const dispatch = useDispatch();
  const [logoutVisible, setLogoutVisible] = useState(false);
  
  const activeRoute = props.state?.routes?.[props.state.index]?.name;

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
    { name: 'BuyerDashboard', label: 'Dashboard', icon: 'home' },

    {
      name: 'Buy',
      label: 'Buy',
      icon: 'shopping-bag',
      dropdown: [
        { label: 'Electronics', screen: 'Electronics' },
        { label: 'Goods', screen: 'Goods' },
        { label: 'Musical Instruments', screen: 'Musicalinstruments' },
        { label: 'Out of Hand', screen: 'OutofHand' },
        { label: 'Testing Category', screen: 'TestingCategory' },
        { label: 'Vehicles/Equipments', screen: 'VehiclesEquipments' },
      ],
    },

    { name: 'Sell', label: 'Sell', icon: 'tag' },
    { name: 'BuyerBids', label: 'My Bids', icon: 'clipboard' },
    { name: 'WonAuctions', label: 'Won Auctions', icon: 'award' },
    { name: 'WatchList', label: 'Watch List', icon: 'heart' },
    { name: 'Wallet', label: 'Wallet', icon: 'credit-card' },
    { name: 'Profile', label: 'Profile', icon: 'user' },
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
          <Text style={styles.title}>HT Buyer</Text>
        </View>

        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Icon name="x" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      {/* MENU */}
      <View style={styles.menu}>

        {drawerItems.map((item) => {
          const isActive = activeRoute === item.name;

          return (
            <View key={item.name}>

              {/* MAIN ITEM */}
              <TouchableOpacity
                style={[styles.menuItem, isActive && styles.activeItem]}
                onPress={() => {
                    if (item.name === 'Buy') {
                      showBuyDropdownRef.current = !showBuyDropdownRef.current;
                      setShowBuyDropdown(showBuyDropdownRef.current);
                    } else {
                      handleNavigate(item.name);
                    }
                  }}
              >

                {/* BUY ROW */}
                {item.name === 'Buy' ? (
                  <View style={styles.buyRow}>
                    <View style={styles.buyLeft}>
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
                    </View>

                    <Icon
                      name={showBuyDropdown ? "chevron-down" : "chevron-right"}
                      size={18}
                      color="#6BAF45"
                    />
                  </View>
                ) : (
                  <>
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
                  </>
                )}
              </TouchableOpacity>

              {/* DROPDOWN */}
              {item.name === 'Buy' && showBuyDropdown && (
                <View style={styles.dropdown}>
                  {item.dropdown.map((subItem) => (
                    <TouchableOpacity
                      key={subItem.label}
                      style={[
                        styles.dropdownItem,
                        activeSubItem === subItem.label && styles.activeItem
                      ]}
                      onPress={() => {
                        setActiveSubItem(subItem.label);
                        handleNavigate(subItem.screen);
                      }}
                    >
                      <Text style={[
                        styles.dropdownText,
                        activeSubItem === subItem.label && {
                          color: '#6BAF45',
                          fontWeight: '600'
                        }
                      ]}>
                        {subItem.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}

            </View>
          );
        })}

      </View>

      <View style={styles.dividerBottom} />

      {/* FOOTER */}
      <View style={styles.footer}>

        <View style={styles.roleBox}>
          <Text style={styles.roleText}>Buyer</Text>
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

export default BuyerCustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: 300,
    paddingHorizontal: 15,
    marginLeft: 18,
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
    paddingVertical: 10,
    borderRadius: 10,
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

  buyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginRight: 10,
  },

  buyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dropdown: {
    paddingLeft: 30,
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
  },

  dropdownItem: {
    paddingVertical: 8,
  },

  dropdownText: {
    fontSize: 13,
    color: '#555',
  },

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