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
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../reduxToolkit/slice/Authslice.js";

const LotDetails = ({ route }) => {
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
        {/* <View style={styles.infoRow}>
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
        </View> */}

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

          {/* <TouchableOpacity onPress={() => setActiveTab("bidHistory")}>
            <Text style={[
              styles.tab,
              activeTab === "bidHistory" && styles.activeTab
            ]}>
              Bid History
            </Text>
          </TouchableOpacity> */}

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
          <Text style={styles.signTitle}>Enter Custom Amount</Text>

          <View style={styles.cardamount}>
            <View style={styles.rowamount}>
                <Text style={styles.limittext}>Min USD 1,300 - Max USD 3,100</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.applyBtn}>
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.clearBtn}>
              <Text style={styles.clearText}>Clear all</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.signCard}>
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

export default LotDetails;

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
    cardamount: {
      marginVertical:10,
    backgroundColor: '#E5E7EB',
    paddingVertical: 18,
    borderRadius: 10,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#c2c4c6ff',
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
  },
 rowamount: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
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
    color: "#101010ff",
  },
 limittext: {
  fontFamily: "RobotoSlab-Regular",
  color: "#7a7878ff",
  textAlign: "center",
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
   footer: {
    flexDirection: "row",
    gap: 14,
    // marginTop: 10,
  },

  clearBtn: {
    flex: 1,
    height: 45,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  clearText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#6B7280",
  },

  applyBtn: {
    flex: 1,
    height: 45,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#34A853",
  },

  applyText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});




// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import Icon from "react-native-vector-icons/Feather";
// import { useNavigation } from "@react-navigation/native";

// const LotDetails = ({ route }) => {
//   const navigation = useNavigation();
//   const { item } = route.params;

//   return (
//     <View style={styles.container}>
      
//       {/* FIXED HEADER */}
//       <View style={styles.headerContainer}>
//         <View style={styles.header}>
//           <TouchableOpacity
//             style={{ flexDirection: "row", alignItems: "center" }}
//             onPress={() => navigation.goBack()}
//           >
//             <Icon name="chevron-left" size={22} color="#16A34A" />
//             <Text style={styles.back}>Back</Text>
//           </TouchableOpacity>

//           <Text style={styles.headerTitle}>Lot Details</Text>

//           <View style={{ width: 60 }} />
//         </View>

//         <View style={styles.divider} />
//       </View>

//       {/* SCROLLABLE CONTENT */}
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContainer}
//       >
//         {/* CARD */}
//         <View style={styles.card}>
//           {/* IMAGE */}
//           <View style={styles.imageBox}>
//             <Image
//               source={item?.image}
//               style={styles.image}
//               resizeMode="contain"
//             />

//             <TouchableOpacity style={styles.enlargeBtn}>
//               <Text style={styles.enlargeText}>Enlarge</Text>
//             </TouchableOpacity>
//           </View>

//           {/* TITLE */}
//           <Text style={styles.title}>
//             {item?.title || "hyundai sentafei"}
//           </Text>

//           <Text style={styles.subTitle}>Phantom Event</Text>

//           {/* TAGS */}
//           <View style={styles.row}>
//             <View style={styles.tag}>
//               <Text style={styles.tagText}>
//                 LOT #{item?.id || "013"}
//               </Text>
//             </View>

//             <View style={styles.tag}>
//               <Text style={styles.tagText}>
//                 {item?.status || "ACTIVE"}
//               </Text>
//             </View>
//           </View>

//           {/* PRICE */}
//           <View style={styles.priceRow}>
//             <View>
//               <Text style={styles.label}>CURRENT BID</Text>
//               <Text style={styles.price}>USD 2,050.00</Text>
//               <Text style={styles.small}>39 bids on this lot</Text>
//             </View>

//             <View style={{ alignItems: "flex-end" }}>
//               <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
//                 <Icon name="clock" size={14} color="#999" />
//                 <Text style={styles.label}>TIME LEFT</Text>
//               </View>
//               <Text style={styles.ended}>Ended</Text>
//           </View>
//           </View>

//           {/* RESERVE */}
//           <Text style={styles.sectionTitle}>Initial / reserve</Text>
//           <Text style={styles.desc}>
//             Initial USD 100.00 · Reserve 4,500.00
//           </Text>

//           {/* DESCRIPTION */}
//           <Text style={styles.sectionTitle}>Description</Text>
//           <Text style={styles.desc}>home driven car.</Text>
//         </View>

//         {/* BID HISTORY */}
//         <View style={styles.card2}>
//           <Text style={styles.sectionTitle}>Bid history</Text>
//           <Text style={styles.small}>Newest first</Text>

//           {[1, 2, 3].map((num) => (
//             <View key={num} style={styles.bidItem}>
//               <View style={styles.bidcard}>
//                 <View style={styles.bidItemLeft}>
//                   <Text style={styles.bidItemSrNo}>{num}</Text>
//                 </View>

//                 <View style={styles.biditemright}>
//                   <Text style={styles.bidPrice}>USD 2,050.00</Text>
//                   <Text style={styles.small}>
//                     05/06/2026 - 06:34 PM
//                   </Text>
//                   <Text style={styles.smallb}>
//                     s**************t
//                   </Text>
//                 </View>
//               </View>
//             </View>
//           ))}
//         </View>
//          <View style={styles.smallCard}>
//         <Text style={styles.cardTitleMuted}>View-only</Text>
//         <Text style={styles.muted}>
//           This lot is active. Edit and delete are disabled — same as the web admin
//           lot view.
//         </Text>
//       </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default LotDetails;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f9fafcff",
//   },

//   headerContainer: {
//     backgroundColor: "#fff",
//     paddingHorizontal: 15,
//     paddingTop: 36,
//     // paddingBottom: 10,
//     elevation: 3,
//     shadowColor: "#000",
//     shadowOpacity: 0.08,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     zIndex: 100,
//   },

//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },

//   back: {
//     color: "#16A34A",
//     fontSize: 16,
//     marginLeft: 5,
//     fontWeight: "600",
//   },

//   headerTitle: {
//     fontSize: 20,
//     fontWeight: "700",
//     color: "#111",
//   },

//   divider: {
//     height: 0.5,
//     backgroundColor: "#d1cfcf",
//     marginTop: 12,
//   },

//   scrollContainer: {
//     padding: 15,
//     paddingBottom: 40,
//   },

//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 14,
//     padding: 14,
//     paddingLeft: 20,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: "#d9d7d7ff",
//   },

//   card2: {
//     backgroundColor: "#fff",
//     borderRadius: 14,
//     padding: 14,
//     paddingLeft: 20,
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: "#d9d7d7ff",
//   },

//   imageBox: {
//     alignItems: "center",
//     marginBottom: 10,
//     position: "relative",
//   },

//   image: {
//     width: "100%",
//     height: 200,
//     borderRadius: 10,
//   },

//   enlargeBtn: {
//     position: "absolute",
//     bottom: 10,
//     right: 10,
//     backgroundColor: "#666",
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     borderRadius: 8,
//   },

//   enlargeText: {
//     color: "#fff",
//     fontSize: 12,
//   },

//   title: {
//     fontSize: 18,
//     fontWeight: "700",
//     color: "#111",
//   },

//   subTitle: {
//     color: "#888",
//     marginBottom: 10,
//     marginTop:15,
//   },

//   row: {
//     flexDirection: "row",
//     gap: 10,
//     marginBottom: 15,
//   },

//   tag: {
//     backgroundColor: "#eee",
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//   },

//   tagText: {
//     fontSize: 12,
//     fontWeight: "600",
//   },

//   priceRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 15,
//   },

//   label: {
//     fontSize: 14,
//     color: "#999",
//     fontWeight:"bold"
//   },

//   price: {
//     fontSize: 18,
//     color: "#16A34A",
//     fontWeight: "700",
//   },

//   small: {
//     marginTop:4,
//     fontSize: 12,
//     color: "#777",
//     paddingVertical:2
//   },

//   smallb: {
//     fontSize: 16,
//     color: "#0e0d0dff",
//     fontWeight: "800",
//     // marginBottom: 2,
//   },

//   ended: {
//     fontSize: 16,
//     color: "#D97706",
//     fontWeight: "700",
//   },

//   sectionTitle: {
//     fontSize: 14,
//     fontWeight: "700",
//     marginTop: 10,
//     marginBottom: 8,
//   },

//   desc: {
//     color: "#555",
//     fontSize: 13,
//   },

//   bidItem: {
//     marginTop: 10,
//     paddingTop: 10,
//     borderTopWidth: 1,
//     borderColor: "#eee",
//     marginBottom: 10,
//   },

//   bidItemSrNo: {
//     fontSize: 12,
//     fontWeight: "600",
//     color: "#717372ff",
//   },

//   biditemright: {
//     paddingLeft: 10,
//     borderRadius: 14,
//   },

//   bidcard: {
//     flexDirection: "row",
//     gap: 20,
//   },

//   bidPrice: {
//     fontSize: 16,
//     fontWeight: "700",
//     color: "#16A34A",
//   },
//    smallCard: {
//     backgroundColor: "#FFFFFF",
//     borderWidth: 1,
//     borderColor: "#E5E7EB",
//     borderRadius: 20,
//     marginBottom:80,
//     padding:20,
//   },

//   cardTitle: {
//     // fontSize: 20,
//     fontWeight:"bold",
//     color: "#111827",
//     marginBottom: 30,
//   },

//   cardTitleMuted: {
//     fontSize: 18,
//     fontWeight:"bold",
//     color: "#717274ff",
//     marginBottom: 6,
//   },
//     muted: {
//     fontSize: 14,
//     color: "#717274ff",
//   },
// });

