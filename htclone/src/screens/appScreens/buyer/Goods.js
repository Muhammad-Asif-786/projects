import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

const categories = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Goods' },
  { id: 3, name: 'Musicalinstruments' },
  { id: 4, name: 'OutofHand' },
  { id: 5, name: 'TestingCategory' },
  { id: 6, name: 'VehiclesEquipments' },
];

const DATA = [
  {
    id: "1",
    title: "Vehicle",
    category: "Furniture Auction",
    price: "USD 299.99",
    time: "Closed",
    status: "Active",
    image: require("../../../assets/kia.jpg")
  },
  {
    id: "2",
    title: "Vehicle",
    category: "Econet",
    price: "USD 120.00",
    time: "Closed",
    status: "Active",
    image: require("../../../assets/rng.png")

  },
];

const Goods = () => {

  const [active, setActive] = useState(1);
  const navigation = useNavigation();
  const route = useRoute();

  // ✅ FIXED renderItem
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
       onPress={() => navigation.navigate("ProductDetail", { item })}
      activeOpacity={0.8}
      >
        <View style={styles.card}
          >
          <View style={styles.row}>

            {item.image ? (
              <Image
                source={
                  typeof item.image === "string"
                    ? { uri: item.image }
                    : item.image
                }
                style={styles.image}
              />
            ) : (
              <View style={styles.noImage}>
                <Text style={styles.noImageText}>No image</Text>
              </View>
            )}

            <View style={styles.middle}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.category}>{item.category}</Text>

              <Text style={styles.label}>CURRENT BID</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>

            <View style={styles.timeBox}>
              <Text style={styles.label}>TIME LEFT</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>

          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

          <View style={styles.header}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <Text style={styles.menu}>☰</Text>
              </TouchableOpacity>
            </View>
  
            <View style={styles.headerCenter}>
              <View style={styles.logoBox}>
                <Image 
                  source={require("../../../assets/logo.png")} // ya jahan logo.png ho
                  style={styles.logoImage} 
                  resizeMode="contain"
                />
              </View>
  
              <View >
                <Text style={styles.headerTitle}>Buy</Text>
                <Text style={styles.headerSub}>Browse lots in this category</Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

      {/* Categories */}
      <View style={styles.tabsWrapper}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map(item => {
          const isActive = route.name === item.name;

          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.tab, isActive && styles.activeTab]}
              onPress={() => {
                setActive(item.id);
                navigation.navigate(item.name); // 🔥 main fix
              }}
            >
              <Text
                style={[styles.tabText, isActive && styles.activeTabText]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>

      <View style={styles.divider} />

      <Text style={styles.result}>Your search returned 10 results</Text>

      {/* List */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

    </SafeAreaView>
  );
};

export default Goods;

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    marginTop:20,
  },

   menu: {
    fontSize: 22,
    marginRight: 12,
    marginLeft:22,
     fontWeight: '400',
    marginBottom:12,
  },
   headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
    logoBox: {
    marginRight: 8,
  },
     logoImage: {
    width: 26,   // apne hisab se size adjust karo
    height: 26,
    marginRight: 16,
    marginLeft:12,
  },

  headerTitle: {
    fontSize: 20,
    fontFamily: "RobotoSlab-Bold",
  },

  headerSub: {
    fontSize: 13,
    color: '#777',
    fontFamily: "RobotoSlab-Regular",
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
    color: '#374151',
  },

  activeTabText: {
    color: '#fff',
  },

  divider: {
    height: .5,
    backgroundColor: '#dedfe1',
    marginTop: 10,
  },
    result: {
    fontFamily: "RobotoSlab-Regular",
    marginVertical: 10,
    marginLeft:20,
    color: "#6b7280",
    fontSize: 13,

  },

  /* LIST CARD */
  card: {
    backgroundColor: '#fff',
    margin: 4,
    padding: 12,
    borderRadius: 12,
    borderWidth:1,
    borderColor:"#ddd",
    marginLeft:12,
    marginRight:12
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },

  noImage: {
    width: 60,
    height: 60,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  noImageText: {
    fontSize: 10,
    color: '#666',
  },

  middle: {
    flex: 1,
    marginLeft: 10,
  },

  title: {
    fontWeight: 'bold',
  },

  category: {
    fontSize: 12,
    color: '#6B7280',
  },

  label: {
    fontSize: 10,
    color: '#9CA3AF',
  },

  price: {
    color: '#22C55E',
    fontWeight: 'bold',
  },

  timeBox: {
    alignItems: 'flex-end',
  },

  time: {
    fontWeight: '600',
    fontSize:12
  },
});
       
       
       
