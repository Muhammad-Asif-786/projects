// SellerDashboard.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const SellerDashboard = () => {

  const navigation = useNavigation();


  return (
    
    <SafeAreaView style={styles.container}>    
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity  onPress={() => navigation.toggleDrawer()}> 
            <Icon name="menu" size={24} color="#111827" />
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <View style={styles.logoRow}>
              <View style={styles.logoBox}>
                <Image 
                source={require('../../../assets/logo.png')}
                style={styles.logo}
                />
              </View>

              <View  style={styles.headerTitlesText}>
                <Text style={styles.dashboardTitle}>
                  Seller Dashboard
                </Text>

                <Text style={styles.dashboardSubtitle}>
                  Your dashboard is updated in real-time
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.headerRight}>
            <TouchableOpacity style={{marginRight: 14}}>
              <View>
                <Icon name="bell" size={20} color="#111827" />
                <View style={styles.notificationDot} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="settings" size={20} color="#111827" />
            </TouchableOpacity>
          </View>
        </View>

        
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardValue}>$0</Text>
            <Text style={styles.cardLabel}>Total Earning</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardValue}>9</Text>
            <Text style={styles.cardLabel}>Total items</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardValue}>0</Text>
            <Text style={styles.cardLabel}>Sold items</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardValue}>9</Text>
            <Text style={styles.cardLabel}>Unsold items</Text>
          </View>
        </View>

        {/* Menu Cards */}
        <View style={styles.menuContainer}>
          
          <TouchableOpacity style={styles.menuCard}>
            <View style={styles.menuLeft}>
              <MaterialCommunityIcons
                name="cube-outline"
                size={24}
                color="#22C55E"
              />

              <Text style={styles.menuText}>My Products</Text>
            </View>

            <Icon name="chevron-right" size={20} color="#6B7280" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCard}>
            <View style={styles.menuLeft}>
              <FeatherTag />

              <Text style={styles.menuText}>Sales</Text>
            </View>

            <Icon name="chevron-right" size={20} color="#6B7280" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCard}>
            <View style={styles.menuLeft}>
              <Icon name="user" size={24} color="#22C55E" />

              <Text style={styles.menuText}>Profile</Text>
            </View>

            <Icon name="chevron-right" size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Recent Activity */}
        <Text style={styles.recentTitle}>Recent Activity</Text>

        {/* Product Card */}
        <View style={styles.activityCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
            }}
            style={styles.productImage}
          />

          <View style={styles.activityContent}>
            <Text style={styles.productTitle}>
              LOT #001 - Artisian sofa
            </Text>

            <Text style={styles.productPrice}>USD $100</Text>

            <Text style={styles.bidText}>— • 16 bid(s)</Text>

            <View style={styles.activeBadge}>
              <Text style={styles.activeText}>ACTIVE</Text>
            </View>
          </View>
        </View>

        {/* Product Card 2 */}
        <View style={styles.activityCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
            }}
            style={styles.productImage}
          />

          <View style={styles.activityContent}>
            <Text style={styles.productTitle}>
              LOT #002 - Iphone 15
            </Text>

            <Text style={styles.productPrice}>USD $900</Text>

            <Text style={styles.bidText}>— • 24 bid(s)</Text>

            <View style={styles.activeBadge}>
              <Text style={styles.activeText}>ACTIVE</Text>
            </View>
          </View>
        </View>

        {/* Product Card 3 */}
        <View style={styles.activityCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569',
            }}
            style={styles.productImage}
          />

          <View style={styles.activityContent}>
            <Text style={styles.productTitle}>
              LOT #002 - Iphone 15
            </Text>

            <Text style={styles.productPrice}>USD $900</Text>

            <Text style={styles.bidText}>— • 24 bid(s)</Text>

            <View style={styles.activeBadge}>
              <Text style={styles.activeText}>ACTIVE</Text>
            </View>
          </View>
        </View>

        {/* Product Card 4 */}
        <View style={styles.activityCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
            }}
            style={styles.productImage}
          />

          <View style={styles.activityContent}>
            <Text style={styles.productTitle}>
              LOT #002 - Iphone 15
            </Text>

            <Text style={styles.productPrice}>USD $900</Text>

            <Text style={styles.bidText}>— • 24 bid(s)</Text>

            <View style={styles.activeBadge}>
              <Text style={styles.activeText}>ACTIVE</Text>
            </View>
          </View>
        </View>

        {/* Product Card 5 */}
        <View style={styles.activityCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569',
            }}
            style={styles.productImage}
          />

          <View style={styles.activityContent}>
            <Text style={styles.productTitle}>
              LOT #002 - Iphone 15
            </Text>

            <Text style={styles.productPrice}>USD $900</Text>

            <Text style={styles.bidText}>— • 24 bid(s)</Text>

            <View style={styles.activeBadge}>
              <Text style={styles.activeText}>ACTIVE</Text>
            </View>
          </View>
        </View>

        {/* Product Card 6 */}
        <View style={styles.activityCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
            }}
            style={styles.productImage}
          />

          <View style={styles.activityContent}>
            <Text style={styles.productTitle}>
              LOT #002 - Iphone 15
            </Text>

            <Text style={styles.productPrice}>USD $900</Text>

            <Text style={styles.bidText}>— • 24 bid(s)</Text>

            <View style={styles.activeBadge}>
              <Text style={styles.activeText}>ACTIVE</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const FeatherTag = () => {
  return (
    <MaterialCommunityIcons
      name="tag-outline"
      size={24}
      color="#22C55E"
    />
  );
};

export default SellerDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  headerCenter: {
    flex: 1,
    marginLeft: 14,
  },
  logo: {
  width: 30,
  height: 30,
  resizeMode: 'contain',
},

  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoBox: {
    width: 46,
    height: 46,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
  headerTitlesText:{
    marginTop:8
  },

  dashboardTitle: {
    fontSize: 22,
    fontFamily: "RobotoSlab-Bold",
    color: '#0F172A',
  },

  dashboardSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    width: 170,
    marginTop: 2,
    lineHeight: 16,
    fontFamily: 'RobotoSlab-regualr',
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },

  notificationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    position: 'absolute',
    right: -1,
    top: -2,
  },

  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginTop: 22,
  },

  card: {
    width: '48%',
    backgroundColor: '#dafae5ff',
    borderRadius: 24,
    padding: 18,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  cardValue: {
    fontSize: 34,
    fontWeight: '800',
    color: '#0F172A',
  },

  cardLabel: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
    fontWeight: '500',
  },

  menuContainer: {
    paddingHorizontal: 18,
    marginTop: 18,
  },

  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuText: {
    fontSize: 14,
    fontFamily: 'RobotoSlab-SemiBold',
    color: '#111827',
    marginLeft: 18,
  },

  recentTitle: {
    fontSize: 21,
    fontFamily: 'RobotoSlab-ExtraBold',
    color: '#0F172A',
    paddingHorizontal: 18,
    marginTop: 20,
    marginBottom: 18,
  },

  activityCard: {
    backgroundColor: '#fff',
    marginHorizontal: 18,
    borderRadius: 20,
    padding: 12,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 10,
  },

  productImage: {
    marginTop:6,
    width: 80,
    height: 80,
    borderRadius: 20,
  },

  activityContent: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },

  productTitle: {
    fontSize: 16,
    // fontWeight: '800',
    color: '#111827',
    fontFamily: 'RobotoSlab-ExtraBold',
  },

  productPrice: {
    fontSize: 17,
    // fontWeight: '800',
    color: '#16A34A',
    fontFamily: 'RobotoSlab-ExtraBold',
  },

  bidText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },

  activeBadge: {
    backgroundColor: '#DFF3D6',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginTop: 6,
  },

  activeText: {
    color: '#111827',
    fontWeight: '700',
    fontSize: 12,
  },
});

