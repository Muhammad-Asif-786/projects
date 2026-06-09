import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const DATA = [
  { id: "1", name: "masif", email: "masif@gmail.com", exempt: false },
  { id: "2", name: "buyer 2", email: "masif@gmail.com", exempt: false },
  { id: "3", name: "masif ali", email: "masif@gmail.com", exempt: false },
  { id: "4", name: "masif Meyo", email: "masif@gmail.com", exempt: false },
  { id: "5", name: "test test", email: "masif@yopmail.com", exempt: true },
  { id: "6", name: "IOS buyer", email: "masif@yopmail.com", exempt: true },
  { id: "7", name: "abcd", email: "abcd@gmail.com", exempt: true },
  { id: "8", name: "m masif", email: "masif@gmail.com", exempt: true },
  { id: "9", name: "asif ali", email: "masif@yopmail.com", exempt: true },
  { id: "10", name: "IOS buyer", email: "masif@yopmail.com", exempt: true },
  { id: "11", name: "subham", email: "subham@gmail.com", exempt: true },
  { id: "12", name: "ahmad", email: "ahmad@gmail.com", exempt: true },
  { id: "13", name: "umer", email: "umer@yopmail.com", exempt: true },
];

const DepositExemption = () => {
  const [buyers, setBuyers] = useState(DATA);
  const [search, setSearch] = useState("");

   const navigation = useNavigation();

  const toggleSwitch = (id) => {
    const updated = buyers.map((item) =>
      item.id === id ? { ...item, exempt: !item.exempt } : item
    );
    setBuyers(updated);
  };

  const filteredData = buyers.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>

      <Switch
      value={item.exempt}
      onValueChange={() => toggleSwitch(item.id)}
      trackColor={{
        false: "#767577",
        true: "#B7E08A", // light green background
      }}
      thumbColor={item.exempt ? "#3FAE49" : "#f4f3f4"} // logo wala green
    />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
    {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <Text style={styles.menu}>☰</Text>
              </TouchableOpacity>
      
              <View style={styles.headerContent}>
                <View style={styles.logoBox}>
                  <Image
                    source={require('../../../assets/logo.png')}
                    style={styles.logoImage}
                    />
                </View>
      
                <View>
                  <Text style={styles.heading}>Deposit Exemption</Text>
                  <Text style={styles.subHeading}>
                    Buyer ememption control
                  </Text>
                </View>
              </View>
            </View>

     <View style={styles.searchBox}>

        <TextInput
          placeholder="Search buyers by name or email..."
          value={search}
          onChangeText={setSearch}
          style={styles.search}
        />
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default DepositExemption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 15,
    marginHorizontal: -15,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
    backgroundColor: "#F5F5F5",
  },

  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 22,
  },

  menu: {
    fontSize: 24,
    fontWeight: "500",
    marginLeft: 8,
    marginTop: 11,
  },

  logoImage: {
    width: 28,
    height: 28,
    marginRight: 18,
    marginTop:12,
  },

  logoText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
  },

  heading: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  subHeading: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  search: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    paddingLeft: 16,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#f1f3f5",
  },
  searchBox: {
    marginTop:10,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  email: {
    fontSize: 12,
    color: "gray",
  },
});

