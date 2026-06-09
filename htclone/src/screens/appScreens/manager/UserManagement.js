import React, { useState } from 'react';
import {
  View,
  Text,
 StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const usersData = [
  {
    id: '1',
    name: 'Ios Manager',
    email: 'iosmanager@yopmail.com',
    role: 'manager',
    status: 'Active',
  },
  {
    id: '2',
    name: 'New Manager',
    email: 'newmanager@yopmail.com',
    role: 'manager',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Ali Seller',
    email: 'seller@yopmail.com',
    role: 'seller',
    status: 'Active',
  },
  {
    id: '4',
    name: 'Hamza Seller',
    email: 'hamza@yopmail.com',
    role: 'seller',
    status: 'Active',
  },
  {
    id: '5',
    name: 'Usman Buyer',
    email: 'buyer@yopmail.com',
    role: 'buyer',
    status: 'Active',
  },
  {
    id: '6',
    name: 'Ahmed Buyer',
    email: 'ahmed@yopmail.com',
    role: 'buyer',
    status: 'Active',
  },
  {
    id: '7',
    name: 'Bilal Clerk',
    email: 'clerk@yopmail.com',
    role: 'clerk',
    status: 'Active',
  },
  {
    id: '8',
    name: 'Finance Admin',
    email: 'finance@yopmail.com',
    role: 'finance',
    status: 'Active',
  },
];

const UserCard = ({ item }) => {
  return (
    <View style={styles.userCard}>

      <View style={styles.userTop}>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {item.name.charAt(0)}
          </Text>
        </View>

        <View>
          <Text style={styles.userName}>
            {item.name}
          </Text>

          <Text style={styles.userEmail}>
            {item.email}
          </Text>

          <View style={styles.activeBadge}>
            <Text style={styles.activeText}>
              {item.status}
            </Text>
          </View>
        </View>

      </View>

      <View style={styles.line} />

    </View>
  );
};

export default function UserManagement() {

  const navigation = useNavigation();

  const [tab, setTab] = useState('manager');
  const [search, setSearch] = useState('');

  const filtered = usersData.filter(item => {
    return (
      item.role === tab &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Text style={styles.menu}>☰</Text>
        </TouchableOpacity>

        <View style={styles.headerCenter}>

          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logoImage}
          />

          <View>
            <Text style={styles.headerTitle}>
              User management
            </Text>

            <Text style={styles.headerSub}>
              Search and manage accounts
            </Text>
          </View>

        </View>

      </View>

      <View style={styles.divider} />

      {/* TABS */}
      <View style={styles.tabs}>

        <TouchableOpacity
          onPress={() => setTab('manager')}
          style={[styles.tab, tab === 'manager' && styles.tabActive]}
        >
          <Text style={[styles.tabText, tab === 'manager' && styles.tabTextActive]}>
            Manager
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setTab('seller')}
          style={[styles.tab, tab === 'seller' && styles.tabActive]}
        >
          <Text style={[styles.tabText, tab === 'seller' && styles.tabTextActive]}>
            Seller
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setTab('buyer')}
          style={[styles.tab, tab === 'buyer' && styles.tabActive]}
        >
          <Text style={[styles.tabText, tab === 'buyer' && styles.tabTextActive]}>
            Buyer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setTab('clerk')}
          style={[styles.tab, tab === 'clerk' && styles.tabActive]}
        >
          <Text style={[styles.tabText, tab === 'clerk' && styles.tabTextActive]}>
            Clerk
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setTab('finance')}
          style={[styles.tab, tab === 'finance' && styles.tabActive]}
        >
          <Text style={[styles.tabText, tab === 'finance' && styles.tabTextActive]}>
            Finance
          </Text>
        </TouchableOpacity>

      </View>

      {/* SEARCH */}
      <View style={styles.searchcontainer}>

        <View style={styles.searchbox}>

          <Icon
            name="search"
            size={20}
            color="#9ca3af"
            style={styles.searchIcon}
          />

          <TextInput
            placeholder="Search users..."
            placeholderTextColor="#9ca3af"
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />

        </View>

      </View>

      {/* BUTTON */}
      <TouchableOpacity style={styles.button}>

        <Text style={styles.buttonText}>
          + Create {tab}
        </Text>

      </TouchableOpacity>

      {/* LIST */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <UserCard item={item} onPress={() => navigation.navigate('managerdetail', { userData: item })} />
        )}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingBottom: 120,
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    marginTop: 12,
  },

  menu: {
    fontSize: 24,
    marginLeft: 25,
    marginRight: 20,
  },

  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },

  logoImage: {
    width: 28,
    height: 28,
    marginRight: 18,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },

  headerSub: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },

  divider: {
    height: 1,
    backgroundColor: '#dddddd',
    marginTop: 12,
  },

  tabs: {
    flexDirection: 'row',
    marginTop: 8,
    marginHorizontal: 15,
    marginBottom: 8,
    gap: 10,
  },

  tab: {
    backgroundColor: '#ececec',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 14,
  },

  tabActive: {
    backgroundColor: '#37b34a',
  },

  tabText: {
    color: '#6b7280',
    fontSize: 13,
    fontWeight: '600',
  },

  tabTextActive: {
    color: '#fff',
  },

  searchcontainer: {
    marginBottom: 10,
  },

  searchbox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#dddddd',
    paddingHorizontal: 14,
    height: 45,
  },

  searchIcon: {
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#111827',
  },

  button: {
    backgroundColor: '#37b34a',
    marginHorizontal: 15,
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,

  },

  buttonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },

  userCard: {
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 10,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },

  userTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 50,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  avatarText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },

  userName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },

  userEmail: {
    fontSize: 15,
    color: '#6b7280',
    marginTop: 4,
  },

  activeBadge: {
    marginTop: 10,
    backgroundColor: '#e9f5d9',
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  activeText: {
    color: '#426b1f',
    fontWeight: '700',
    fontSize: 14,
  },

  line: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 10,
  },

  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  roleBtn: {
    color: '#3b82f6',
    fontSize: 12,
    paddingleft: 4,
    fontWeight: '500',
    marginRight: 28,
  },

  deleteBtn: {
    color: '#ef4444',
    fontSize: 12,
    fontWeight: '500',
  },

});

