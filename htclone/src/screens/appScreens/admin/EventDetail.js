// ✅ EventDetail.js

import React, { useState } from "react";
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

import Filter from "../../../components/Filter/Filter.jsx";

const EventDetail = ({ route }) => {

  // ✅ ADDED FILTER STATE
  const [filterVisible, setFilterVisible] = useState(false);

  const { item } = route.params;
  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => navigation.goBack()}
          >
            <Icon name="chevron-left" size={22} color="#16A34A" />
            <Text style={styles.back}>Back</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Testing event</Text>

        {/* Sub Info */}
        <View style={styles.subRow}>
          <Text style={styles.lots}>2 lots</Text>

          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>LIVE</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Event Card */}
        <View style={styles.eventCard}>
          <Image
            source={item?.image}
            style={styles.eventImage}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.eventTitle}>Testing event</Text>

            <Text style={styles.eventTime}>
              Start: 4 May 2026, 23:59 | End: 5 May 2026, 22:14
            </Text>
          </View>
        </View>

        {/* Results + Filter */}
        <View style={styles.rowBetween}>
          <Text style={styles.resultText}>2 results</Text>

          {/* ✅ OPEN FILTER */}
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => setFilterVisible(true)}
          >
            <Text style={styles.filterText}>Filters</Text>
          </TouchableOpacity>
        </View>

        {/* Lot 1 */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("LotDetail", { item: item })
          }
        >
          <View style={styles.lotCard}>

            <Image
              source={item?.image}
              style={styles.eventImage}
            />

            <View style={{ flex: 1 }}>
              <Text style={styles.lotTitle}>chairs</Text>

              <Text style={styles.lotSub}>Testing event</Text>

              <View style={styles.priceRow}>
                <Text style={styles.clock}>⏱</Text>

                <View>
                  <Text style={styles.priceLabel}>
                    STARTING PRICE
                  </Text>

                  <Text style={styles.price}>
                    USD 50.00
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.rightInfo}>
              <Text style={styles.timeLeftLabel}>
                TIME LEFT
              </Text>

              <Text style={styles.timeLeft}>
                9h 11m
              </Text>

              <Text style={styles.lotNumber}>
                LOT #006
              </Text>

              <Text style={styles.bids}>
                0 bids
              </Text>
            </View>
          </View>
        </TouchableOpacity>

      </ScrollView>

      {/* ✅ FILTER COMPONENT */}
      <Filter
        visible={filterVisible}
        onClose={() => setFilterVisible(false)}
      />
    </>
  );
};

export default EventDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 16,
  },

  header: {
    marginTop:10,
    marginBottom: 10,
  },

  back: {
    color: "#16A34A",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 3,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
  },

  subRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  lots: {
    fontSize: 16,
    color: "#6B7280",
  },

  liveBadge: {
    backgroundColor: "#E5E7EB",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },

  liveText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#374151",
  },

  divider: {
    height: 1,
    backgroundColor: "#f0f2f5ff",
    marginVertical: 16,
  },

  eventCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 16,
  },

  eventImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
    resizeMode: "contain",
    backgroundColor: "#f0ececff",
  },

  eventTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  eventTime: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 4,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  resultText: {
    fontSize: 16,
    color: "#6B7280",
  },

  filterBtn: {
    borderWidth: 1,
    borderColor: "#16A34A",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },

  filterText: {
    color: "#16A34A",
    fontWeight: "600",
  },

  lotCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 14,
  },

  lotTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  lotSub: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 6,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  clock: {
    fontSize: 14,
  },

  priceLabel: {
    fontSize: 10,
    color: "#9CA3AF",
  },

  price: {
    fontSize: 16,
    color: "#16A34A",
    fontWeight: "700",
  },

  rightInfo: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },

  timeLeftLabel: {
    fontSize: 10,
    color: "#9CA3AF",
  },

  timeLeft: {
    fontSize: 16,
    color: "#16A34A",
    fontWeight: "700",
  },

  lotNumber: {
    fontSize: 13,
    color: "#374151",
  },

  bids: {
    fontSize: 12,
    color: "#9CA3AF",
  },
});