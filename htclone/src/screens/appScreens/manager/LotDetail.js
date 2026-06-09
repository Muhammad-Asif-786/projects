import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const LotDetails = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      
      {/* FIXED HEADER */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => navigation.goBack()}
          >
            <Icon name="chevron-left" size={22} color="#16A34A" />
            <Text style={styles.back}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Lot Details</Text>

          <View style={{ width: 60 }} />
        </View>

        <View style={styles.divider} />
      </View>

      {/* SCROLLABLE CONTENT */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* CARD */}
        <View style={styles.card}>
          {/* IMAGE */}
          <View style={styles.imageBox}>
            <Image
              source={item?.image}
              style={styles.image}
              resizeMode="contain"
            />

            <TouchableOpacity style={styles.enlargeBtn}>
              <Text style={styles.enlargeText}>Enlarge</Text>
            </TouchableOpacity>
          </View>

          {/* TITLE */}
          <Text style={styles.title}>
            {item?.title || "hyundai sentafei"}
          </Text>

          <Text style={styles.subTitle}>Phantom Event</Text>

          {/* TAGS */}
          <View style={styles.row}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>
                LOT #{item?.id || "013"}
              </Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>
                {item?.status || "ACTIVE"}
              </Text>
            </View>
          </View>

          {/* PRICE */}
          <View style={styles.priceRow}>
            <View>
              <Text style={styles.label}>CURRENT BID</Text>
              <Text style={styles.price}>USD 2,050.00</Text>
              <Text style={styles.small}>39 bids on this lot</Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                <Icon name="clock" size={14} color="#999" />
                <Text style={styles.label}>TIME LEFT</Text>
              </View>
              <Text style={styles.ended}>Ended</Text>
          </View>
          </View>

          {/* RESERVE */}
          <Text style={styles.sectionTitle}>Initial / reserve</Text>
          <Text style={styles.desc}>
            Initial USD 100.00 · Reserve 4,500.00
          </Text>

          {/* DESCRIPTION */}
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.desc}>home driven car.</Text>
        </View>

        {/* BID HISTORY */}
        <View style={styles.card2}>
          <Text style={styles.sectionTitle}>Bid history</Text>
          <Text style={styles.small}>Newest first</Text>

          {[1, 2, 3].map((num) => (
            <View key={num} style={styles.bidItem}>
              <View style={styles.bidcard}>
                <View style={styles.bidItemLeft}>
                  <Text style={styles.bidItemSrNo}>{num}</Text>
                </View>

                <View style={styles.biditemright}>
                  <Text style={styles.bidPrice}>USD 2,050.00</Text>
                  <Text style={styles.small}>
                    05/06/2026 - 06:34 PM
                  </Text>
                  <Text style={styles.smallb}>
                    s**************t
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
         <View style={styles.smallCard}>
        <Text style={styles.cardTitleMuted}>View-only</Text>
        <Text style={styles.muted}>
          This lot is active. Edit and delete are disabled — same as the web admin
          lot view.
        </Text>
      </View>
      </ScrollView>
    </View>
  );
};

export default LotDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafcff",
  },

  headerContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: 36,
    // paddingBottom: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    zIndex: 100,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  back: {
    color: "#16A34A",
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "600",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },

  divider: {
    height: 0.5,
    backgroundColor: "#d1cfcf",
    marginTop: 12,
  },

  scrollContainer: {
    padding: 15,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    paddingLeft: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#d9d7d7ff",
  },

  card2: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    paddingLeft: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#d9d7d7ff",
  },

  imageBox: {
    alignItems: "center",
    marginBottom: 10,
    position: "relative",
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },

  enlargeBtn: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#666",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },

  enlargeText: {
    color: "#fff",
    fontSize: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },

  subTitle: {
    color: "#888",
    marginBottom: 10,
    marginTop:15,
  },

  row: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },

  tag: {
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  tagText: {
    fontSize: 12,
    fontWeight: "600",
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  label: {
    fontSize: 14,
    color: "#999",
    fontWeight:"bold"
  },

  price: {
    fontSize: 18,
    color: "#16A34A",
    fontWeight: "700",
  },

  small: {
    marginTop:4,
    fontSize: 12,
    color: "#777",
    paddingVertical:2
  },

  smallb: {
    fontSize: 16,
    color: "#0e0d0dff",
    fontWeight: "800",
    // marginBottom: 2,
  },

  ended: {
    fontSize: 16,
    color: "#D97706",
    fontWeight: "700",
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 8,
  },

  desc: {
    color: "#555",
    fontSize: 13,
  },

  bidItem: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: "#eee",
    marginBottom: 10,
  },

  bidItemSrNo: {
    fontSize: 12,
    fontWeight: "600",
    color: "#717372ff",
  },

  biditemright: {
    paddingLeft: 10,
    borderRadius: 14,
  },

  bidcard: {
    flexDirection: "row",
    gap: 20,
  },

  bidPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#16A34A",
  },
   smallCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 20,
    marginBottom:80,
    padding:20,
  },

  cardTitle: {
    // fontSize: 20,
    fontWeight:"bold",
    color: "#111827",
    marginBottom: 30,
  },

  cardTitleMuted: {
    fontSize: 18,
    fontWeight:"bold",
    color: "#717274ff",
    marginBottom: 6,
  },
    muted: {
    fontSize: 14,
    color: "#717274ff",
  },
});

