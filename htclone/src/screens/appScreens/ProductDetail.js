import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../reduxToolkit/slice/Authslice.js";

const ProductDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { item } = route.params;

  // 🔥 STATE
  const [activeTab, setActiveTab] = useState("bidInfo");

  const bidData = [
  { id: '1', amount: 920, time: '15/04/2026, 14:57:48', highest: true },
  { id: '2', amount: 370, time: '15/04/2026, 14:43:33' },
  { id: '3', amount: 320, time: '15/04/2026, 14:43:30' },
  { id: '4', amount: 270, time: '15/04/2026, 14:43:28' },
  { id: '5', amount: 220, time: '15/04/2026, 14:20:11' },
];

const renderItem = ({ item }) => (
  <View style={styles.bidRow}>

      <View style={styles.leftLineContainer}>
        <View style={[styles.leftLine,item.highest && { backgroundColor: '#48ba54ff' }]}
        />
      </View>

    <View style={styles.leftstyle}>
      {item.highest && (
        <View style={styles.highestTag}>
          <Text style={styles.highestText}>Icon</Text>
          <Text style={styles.highestText}>HIGHEST</Text>
        </View>
      )}

      <Text style={styles.timeText}>{item.time}</Text>
    </View>

    <Text
      style={[
        styles.amountText,
        item.highest && { color: '#16A34A' },
      ]}
    >
      USD {item.amount}
    </Text>
  </View>
);




  return (
    <ScrollView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={20} color="#121212" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kia Sportage</Text>
      </View>

      {/* IMAGE */}
      <View style={styles.imageContainer}>
        <Image
          source={
            typeof item.image === "string"
              ? { uri: item.image }
              : item.image
          }
          style={styles.image}
        />

        <TouchableOpacity style={[styles.arrow, { left: 10 }]}>
          <Text style={styles.arrowText}>‹</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.arrow, { right: 10 }]}>
          <Text style={styles.arrowText}>›</Text>
        </TouchableOpacity>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>

        {/* TITLE */}
        <View style={styles.titleCard}>
          <Text style={styles.badge}>Goods</Text>
          <Text style={styles.title}>Kia Sportage</Text>
        </View>

        {/* INFO BOXES */}
        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Ionicons name="car-outline" size={16} color="#a6c087" />
            <Text style={styles.infoLabel}>Make</Text>
            <Text style={styles.infoValue}>Dawlance</Text>
          </View>

          <View style={styles.infoBox}>
            <Ionicons name="calendar-outline" size={16} color="#a6c087" />
            <Text style={styles.infoLabel}>Year</Text>
            <Text style={styles.infoValue}>2026</Text>
          </View>

          <View style={styles.infoBox}>
            <Ionicons name="time-outline" size={16} color="#a6c087" />
            <Text style={styles.infoLabel}>Time</Text>
            <Text style={styles.infoValue}>{item.time}</Text>
          </View>
        </View>

        {/* 🔥 TABS */}
        <View style={styles.tabs}>

          <TouchableOpacity onPress={() => setActiveTab("bidInfo")}>
            <Text style={[
              styles.tab,
              activeTab === "bidInfo" && styles.activeTab
            ]}>
              Bid Info
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab("productInfo")}>
            <Text style={[
              styles.tab,
              activeTab === "productInfo" && styles.activeTab
            ]}>
              Product Info
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab("bidHistory")}>
            <Text style={[
              styles.tab,
              activeTab === "bidHistory" && styles.activeTab
            ]}>
              Bid History
            </Text>
          </TouchableOpacity>

        </View>

        {/* 🔥 TAB CONTENT */}

        {/* BID INFO */}
        {activeTab === "bidInfo" && (
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.gray}>Status</Text>
              <Text style={styles.bold}>Active</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.row}>
              <Text style={styles.gray}>Starting bid</Text>
              <Text style={styles.price}>USD 120</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.row}>
              <Text style={styles.gray}>Currency</Text>
              <Text style={styles.bold}>USD</Text>
            </View>
            <View style={styles.divider} />
          </View>
        )}

        {/* PRODUCT INFO */}
        {activeTab === "productInfo" && (
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.gray}>Title</Text>
              <Text style={styles.bold}>bdbfd.bd.bd</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.row}>
              <Text style={styles.gray}>Description</Text>
            </View>
            <Text style={styles.bold1}>bdbfd.bd.bd</Text>

            <View style={styles.divider} />

            <View style={styles.row}>
              <Text style={styles.gray}>Category</Text>
              <Text style={styles.bold}>Electronics</Text>
            </View>
            <View style={styles.divider} />

            <View style={styles.row}>
              <Text style={styles.gray}>Make</Text>
              <Text style={styles.bold}>Econet</Text>
            </View>
            <View style={styles.divider} />

            <View style={styles.row}>
              <Text style={styles.gray}>Year</Text>
              <Text style={styles.bold}>2026</Text>
            </View>
            <View style={styles.divider} />
          </View>
        )}

        {/* BID HISTORY */}
        {activeTab === "bidHistory" && (
          <View style={styles.card}>
            
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Total Bids: {bidData.length}
            </Text>

            <View style={styles.divider} />

            <FlatList
              data={bidData}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
            />

          </View>
        )}

        {/* SIGN IN */}
        <View style={styles.signCard}>
          <Text style={styles.signTitle}>Sign in to place a bid</Text>
          <Text style={styles.bigPrice}>USD 120.00</Text>
          <Text style={styles.note}>
            You can view all details as guest, bidding requires login.
          </Text>
        </View>

      </View>

      {/* BOTTOM BUTTON */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.button}
           onPress={() => {
              dispatch(logoutUser()); // 👈 THIS IS CORRECT WAY
            }}
          // onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>
            Sign in to place a bid ↗
          </Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default ProductDetail;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },

  backBtn: {
    marginLeft: 22,
    marginRight: 40,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  imageContainer: {
    marginHorizontal: 17,
    marginTop: 15,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#d1d5db",
  },

  image: {
    width: "100%",
    height: 230,
  },

  arrow: {
    position: "absolute",
    top: "35%",
    backgroundColor: "#22c55e",
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  arrowText: {
    color: "#fff",
    fontSize: 20,
  },

  content: {
    marginHorizontal: 17,
  },

  titleCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical:20,
    marginTop: 20,
    borderWidth: .5,
    borderColor: "#d1d5db",
  },

  badge: {
    fontFamily: "RobotoSlab-Regular",
    backgroundColor: "#bbf7d0",
    color: "#15803d",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
    marginBottom: 8,
  },

  title: {
    fontFamily: "RobotoSlab-Bold",
    fontSize: 22,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom:6,
    paddingVertical:10
  },

  infoBox: {
    backgroundColor: "#c1f2da",
    width: "32%",
    padding: 15,
    borderRadius: 20,
  },

  infoLabel: {
    fontFamily: "RobotoSlab-Regular",
    color: "#4b5563",
    // marginTop: 5,
    paddingVertical:10
  },

  infoValue: {
    fontFamily: "RobotoSlab-Bold",
    fontWeight: "bold",
  },

  tabs: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 10,
  },

  tab: {
    fontFamily: "RobotoSlab-Regular",
    borderWidth: 1,
    borderColor: "#d1d5db",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    color: "#6b7280",
  },

  activeTab: {
    backgroundColor: "#c1f2da",
    borderColor: "#22c55e",
    color: "#15803d",
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 18,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  totalText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },

  row: {
    flexDirection: "row",
    // justifyContent: "space-between",
  },

  gray: {
    fontFamily: "RobotoSlab-Regular",
    color: "#6b7280",
    
  },

  bold: {
    fontFamily: "RobotoSlab-Bold",
    fontWeight: "500",
    fontSize:13,
    marginLeft:10,
  },
    bold1: {
    fontWeight: "500",
    fontSize:14,
    marginTop:10,
  },

  price: {
    color: "#22c55e",
    fontWeight: "bold",
    marginLeft:10,
  },

  divider: {
    height: 1,
    backgroundColor: "#e5e7eb",
    marginVertical: 10,
  },

  signCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 20,
    marginTop: 24,
    borderWidth: .5,
    borderColor: "#d1d5db",
  },
  
  signTitle: {
    fontFamily: "RobotoSlab-Regular",
    color: "#6b7280",
  },
  
  bigPrice: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 5,
  },
  
  note: {
    fontFamily: "RobotoSlab-Regular",
    color: "#6b7280",
    fontSize: 11,
  },
  
  bottomBar: {
    paddingHorizontal: 15,
    marginBottom: 70,
    marginTop: 15,
  },
  
  button: {
    backgroundColor: "#1eab52",
    padding: 15,
    marginBottom:20,
    marginTop:10,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    fontFamily: "RobotoSlab-Bold",
    color: "#fff",
    fontSize: 15,
    fontWeight:"800"
  },
  bidRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius:6,
    
    
  },
  leftstyle: {
    flex:1,
    width: 36,
    alignItems: 'center',
    marginRight: 10,
  },
  leftLineContainer: {
    backgroundColor: "red",
    padding:10,
    width: 18,
    alignItems: 'center',
    marginRight: 10,
  },
  leftLine: {
    width: 6,
    height: 55,
    backgroundColor: '#D1D5DB',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
    highestTag: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    marginBottom: 4,
    alignSelf: 'flex-start',
  },
    highestText: {
    color: '#15803D',
    fontSize: 10,
    fontWeight: '700',
  },
    timeText: {
    color: '#6B7280',
    fontSize: 12,
  },
  amountText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
});

