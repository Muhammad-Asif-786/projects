/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Switch,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Feather";
import DeleteUserModal from '../../../components/DeleteUserModal/DeleteUserModal.jsx';

const categories = [
  {
    id: 1,
    name: "Electronics",
    active: true,
  },
  {
    id: 2,
    name: "Furniture",
    active: true,
  },
  {
    id: 3,
    name: "Vehicles",
    active: false,
  },
];

const CategoryManagement = () => {
    const navigation = useNavigation();

      const [data, setData] = useState(categories);

      const [modalVisible, setModalVisible] = useState(false);
      const [selectedCategory, setSelectedCategory] = useState(null);


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
            <Text style={styles.heading}>Categories</Text>
            <Text style={styles.subHeading}>
              Manage auction categories
            </Text>
          </View>
        </View>
      </View>

      
        {/* Description */}
        <Text style={styles.description}>
          Create categories and define category fields for auction
          listings. Inactive categories stay hidden from new listings.
        </Text>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#9CA3AF" />

          <TextInput
            placeholder="Search categories..."
            placeholderTextColor="#9CA3AF"
            style={styles.input}
          />
        </View>

        {/* Add Button */}
        <TouchableOpacity style={styles.addButton}
        onPress={() => navigation.navigate('CreateCategory')}
        >
          <Text style={styles.addButtonText}>+ Add category</Text>
        </TouchableOpacity>

        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >

        {/* Cards */}
        {data.map((item) => (
          <View key={item.id} style={styles.card}>
            {/* Top */}
            <View style={styles.cardTop}>
              <Text style={styles.cardTitle}>{item.name}</Text>

              <View
                style={[
                  styles.statusBadge,
                  {
                    borderColor: item.active
                      ? "#39B54A"
                      : "#9CA3AF",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    {
                      color: item.active
                        ? "#39B54A"
                        : "#9CA3AF",
                    },
                  ]}
                >
                  {item.active ? "ACTIVE" : "INACTIVE"}
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

            {/* Middle */}
            <View style={styles.middleRow}>
              <View>
                <Text style={styles.visibleText}>
                  Visible / active
                </Text>

                <Text style={styles.smallText}>
                  Turn off to hide from new listings
                </Text>
              </View>

              <Switch
                value={item.active}
                thumbColor="#39B54A"
                trackColor={{
                  false: "#D1D5DB",
                  true: "#9BE7A5",
                }}
              />
            </View>

            {/* Buttons */}
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.editBtn}
                onPress={() =>
                  navigation.navigate('EditCategory', {
                    category: item,   // 👈 yahan data pass ho raha hai
                  })
                }
              >
                <Icon name="layers" size={16} color="#111827" />

                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => {
                  setSelectedCategory(item);
                  setModalVisible(true);
                }}
              >
                <Icon name="trash-2" size={16} color="#DC2626" />

                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* ✅ MODAL */}
      <DeleteUserModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onDelete={() => {
        setData(prev => prev.filter(cat => cat.id !== selectedCategory.id));
        setModalVisible(false);
        setSelectedCategory(null);
      }}
      />
    </SafeAreaView>
    
  );
};

export default CategoryManagement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    backgroundColor: "#F5F5F5",
  },

  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 18,
  },

  menu: {
    fontSize: 22,
    fontWeight: "500",
    marginLeft: 16,
    marginTop: 2,
  },

  logoImage: {
    width: 28,
    height: 28,
    marginRight: 18,
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

  description: {
    fontSize: 15,
    color: "#6B7280",
    lineHeight: 30,
    paddingHorizontal: 20,
    marginTop: 14,
  },

  searchContainer: {
    height: 43,
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginHorizontal: 20,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
    marginLeft: 8,
  },

  addButton: {
    height: 46,
    backgroundColor: "#39B54A",
    marginHorizontal: 20,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },

  addButtonText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#111827",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 14,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#111827",
  },

  statusBadge: {
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#e6f5ee",
  },

  statusText: {
    fontSize: 10,
    fontWeight: "700",
  },

  divider: {
    height: 1,
    backgroundColor: "#d6d8db",
    marginVertical: 16,
  },

  middleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  visibleText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#6B7280",
  },

  smallText: {
    fontSize: 14,
    color: "#9CA3AF",
    marginTop: 6,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  editBtn: {
    width: "47%",
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  deleteBtn: {
    width: "47%",
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DC2626",
    backgroundColor: "#FFF5F5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  editText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
    marginLeft: 5,
  },

  deleteText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#DC2626",
    marginLeft: 5,
  },
});

