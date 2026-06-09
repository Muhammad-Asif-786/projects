import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const categories = [
  { id: 1, name: 'E2E Test [922cc88f]' },
  { id: 2, name: 'E2E Test [b639f223]' },
  { id: 3, name: 'electronics' },
];

const Buy = () => {

  const [active, setActive] = useState(1);
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Text style={styles.menu}>☰</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerAlignment}>
  
  <View style={styles.logoRow}>
    <View style={styles.logoBox}>
      <Image 
        source={require("../../../assets/logo.png")} // ya jahan logo.png ho
        style={styles.logoImage} 
        resizeMode="contain"
      />
    </View>
  </View>

  <View >
    <Text style={styles.title}>Buy</Text>
    <Text style={styles.subtitle}>
      Browse lots in this category
    </Text>
  </View>

</View>
      </View>
       {/* <View style={styles.divider} /> */}
      {/* Category Tabs */}
      <View style={styles.tabsWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map(item => {
            const isActive = active === item.id;
            return (
              <TouchableOpacity
                // key={item.id}
                key={`cat-${item.id}`}
                style={[
                  styles.tab,
                  isActive && styles.activeTab,
                ]}
                onPress={() => setActive(item.id)}
              >
                <Text
                  style={[
                    styles.tabText,
                    isActive && styles.activeTabText,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Empty State */}
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          No data found in this category.
        </Text>
      </View>

    </SafeAreaView>
  );
};

export default Buy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },


  menu: {
    fontSize: 22,
    marginRight: 10,
     fontWeight: '400',
  },
  

    header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingTop:20,
    padding: 15, 
    backgroundColor: '#fff' 
  },
 logoImage: {
  width: 26,   // apne hisab se size adjust karo
  height: 26,
  marginRight: 16
},
  

  headerTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginLeft: 10 
  },
  headerAlignment: {
  flexDirection: 'row',      // left-right layout
  alignItems: 'center',      // vertical center
  justifyContent: 'flex-start', 
},

logoRow: {
  marginRight: 15,           // HT aur text ke darmiyan gap
},

  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // logoBox: {
  //   width: 30,
  //   height: 30,
  //   backgroundColor: '#22C55E',
  //   borderRadius: 6,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginRight: 16,

  // },

  logoText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  title: {
    fontFamily: "RobotoSlab-Bold",
    fontSize: 22,
    // fontWeight: 'bold',
    color: '#111827',
  },

  subtitle: {
    fontFamily: "RobotoSlab-Bold",
    color: '#6B7280',
    marginTop: 2,
    
  },

  tabsWrapper: {
    paddingHorizontal: 10,
    marginTop: 10,
    
  },

  tab: {
    backgroundColor: '#eeeff2',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
  },

  activeTab: {
    backgroundColor: '#22C55E',
  },

  tabText: {
    fontFamily: "RobotoSlab-Regular",
    color: '#374151',
    fontWeight: '500',
  },

  activeTabText: {
    fontFamily: "RobotoSlab-Regular",
    color: '#fff',
    // fontWeight: 'bold',
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginTop: 10,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    color: '#6B7280',
    fontSize: 16,
  },
});




