import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from "react-redux";
import { setAuthScreen } from "../../reduxToolkit/slice/Authslice.js";
import { logout } from "../../reduxToolkit/slice/Authslice.js";

const CustomDrawer = props => {

  const showBuyDropdownRef = React.useRef(false);
  const [showBuyDropdown, setShowBuyDropdown] = React.useState(false);
  const [activeSubItem, setActiveSubItem] = React.useState('');
  const dispatch = useDispatch();

  const activeRoute = props.state?.routes?.[props.state.index]?.name;

  const drawerItems = [
    { name: 'Home', icon: 'home' },
    {
      name: 'Buy',
      icon: 'shopping-bag',
      dropdown: [
        { label: 'Electronics', screen: 'Electronics' },
        { label: 'Goods', screen: 'Goods' },
        { label: 'Mussical instruments', screen: 'Musicalinstruments' },
        { label: 'Out of Hand', screen: 'OutofHand' },
        { label: 'testing category', screen: 'TestingCategory' },
        { label: 'Vehicles/Equipments', screen: 'VehiclesEquipments' },
      ],
    },
    { name: 'Sell', icon: 'tag' },
    { name: 'About', icon: 'info' },
    { name: 'Contact', icon: 'phone' },
  ];

  const handleNavigate = screen => {
    props.navigation.navigate(screen);
    props.navigation.closeDrawer();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logoImage}
        />

        <Text style={styles.title}>Hammer & Tongues</Text>

        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Icon name="x" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      {/* Menu Items */}
      <View style={styles.menu}>
        {drawerItems.map(item => {
          const isActive = activeRoute === item.name;

          return (
            <View key={item.name}>
              {/* Main Item */}
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
                {/* LEFT SIDE ICON + TEXT + ARROW */}
                {item.name === 'Buy' ? (
                  <View style={styles.buyRow}>
                    <View style={styles.buyLeft}>
                      <Icon
                        name={item.icon}
                        size={20}
                        color={isActive ? '#6BAF45' : '#555'}
                      />

                      <Text
                        style={[
                          styles.menuText,
                          isActive && { color: '#6BAF45' },
                        ]}
                      >
                        {item.name}
                      </Text>
                    </View>

                    <Ionicons
                      name={
                        showBuyDropdown ? 'chevron-down' : 'chevron-forward'
                      }
                      size={18}
                      color="#577d4c"
                      style={{ marginLeft: 'auto', marginRight: 18 }}
                    />
                  </View>
                ) : (
                  <>
                    <Icon
                      name={item.icon}
                      size={20}
                      color={isActive ? '#6BAF45' : '#555'}
                    />

                    <Text
                      style={[
                        styles.menuText,
                        isActive && { color: '#6BAF45' },
                      ]}
                    >
                      {item.name}
                    </Text>
                  </>
                )}
              </TouchableOpacity>

              {/* Dropdown */}
              {item.name === 'Buy' && showBuyDropdown && (
                <View style={styles.dropdown}>
                  {item.dropdown.map(subItem => (
                    <TouchableOpacity
                      key={subItem.label}
                      style={[
                        styles.dropdownItem,
                        activeSubItem === subItem.label && styles.activeItem,
                      ]}
                       onPress={() => {
                          setActiveSubItem(subItem.label);
                          props.navigation.navigate(subItem.screen); // direct use
                          props.navigation.closeDrawer();
                        }}
                    >
                      <Text
                        style={[
                          styles.dropdownText,
                          activeSubItem === subItem.label && {
                            color: '#6BAF45',
                            fontWeight: '600',
                          },
                        ]}
                      >
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

      <View style={styles.divider1} />


      {/* Bottom Buttons */}
      {/* <TouchableOpacity
        style={styles.signInBtn}
        onPress={() => {
        dispatch(logoutUser()); 
        // dispatch(setAuthScreen("Login"));
        props.navigation.navigate("Login");
        }}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
      style={styles.signInBtn}
      onPress={() => {
        dispatch(logout());
      }}
    >
      <Text style={styles.signInText}>Sign In</Text>
    </TouchableOpacity>


<TouchableOpacity
  style={styles.createBtn}
  onPress={() => {
    dispatch(logoutUser());          // user null
    dispatch(setAuthScreen("Register")); // register set
  }}
>
  <Text style={styles.createText}>Create Account</Text>
</TouchableOpacity>
    </SafeAreaView>
  );
};

export default CustomDrawer;

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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingTop: 45,
  },

  logoImage: {
    width: 16,
    height: 16,
  },

  title: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },

  divider: {
    height: 1,
    backgroundColor: '#dee1e8',
    marginTop: 10,
  },
    divider1: {
    width: '112%',
    marginLeft: -20,
    height: 1,
    backgroundColor: '#dee1e8',
    marginBottom: 18,
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
  dropdown: {
    paddingLeft: 30,
    borderLeftWidth: 1,
    borderLeftColor: '#E0E0E0',
    marginLeft: 10,
  },

  activeItem: {
    backgroundColor: '#ecf2e8',
    paddingHorizontal: 10,
    borderRadius:10
  },

  menuText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: '#333',
  },

  buyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginRight:19,
  },

  buyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dropdownItem: {
    paddingVertical: 8,
  },

  dropdownText: {
    fontSize: 13,
    color: '#555',
  },

  signInBtn: {
    borderWidth: 1,
    borderColor: '#6BAF45',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },

  signInText: {
    color: '#6BAF45',
    fontWeight: '600',
  },

  createBtn: {
    backgroundColor: '#8ad062',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40,
  },

  createText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
