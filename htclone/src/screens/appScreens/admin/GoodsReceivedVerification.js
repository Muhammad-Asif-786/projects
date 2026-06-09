import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const GoodsReceivedVerification = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Text style={styles.menu}>☰</Text>
        </TouchableOpacity>

        <View style={styles.headerContent}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logoImage}
          />

          <View>
            <Text style={styles.heading}>Goods received</Text>
            <Text style={styles.subHeading}>
              Draft lots.GRV checklist
            </Text>
          </View>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <TextInput
          placeholder="Search by title, event, or lot #..."
          placeholderTextColor="#9CA3AF"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />

        <View style={styles.emptyCard}>
          <Text style={styles.emptyText}>
            No draft lots fount
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GoodsReceivedVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 22,
    backgroundColor: "#F5F5F5",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  menu: {
    fontSize: 26,
    color: "#111827",
    marginTop: 24,
    fontWeight: "400",
    marginLeft: 6,
  },

  headerContent: {
    flexDirection: "row",
    marginLeft: 22,
    flex: 1,
  },

  logoImage: {
    width: 34,
    height: 34,
    marginTop: 26,
    marginRight: 18,
    resizeMode: "contain",
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginTop:14,
  },

  subHeading: {
    marginTop: 4,
    fontSize: 12,
    lineHeight: 18,
    color: "#6B7280",
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  infoText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 18,
  },

  searchInput: {
    height: 43,
    backgroundColor: "#b1b1b218",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
    paddingHorizontal: 22,
    fontSize: 12,
    color: "#111827",
    marginBottom: 12,
  },

  emptyCard: {
    borderWidth: 1,
    borderColor: "#d7d5d5",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  emptyText: {
    fontSize: 13,
    color: "#a09d9d",
    lineHeight: 20,
  },
});

