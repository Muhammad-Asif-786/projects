import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: '1',
    title: 'bdbfd.bd.bd',
    image: require('../../assets/kia.jpg'), // 👈 tumhari image
    bid: 'USD 4,650.00',
    lot: '#092',
    time: '1d 8h',
    bids: '82 bid(s)',
  },
];

const AuctionScreen = () => {

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
     onPress={() => navigation.navigate("ProductDetail", { item })}
     style={styles.card}>

      {/* LEFT IMAGE */}
      <Image source={item.image} style={styles.image} />

      {/* CENTER */}
      <View style={styles.center}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.liveText}>LIVE</Text>

        {/* BID */}
        <View style={styles.bidRow}>
          <View style={styles.clockBox}>
            <Ionicons name="time-outline" size={14} color="#c47a2c" />
          </View>

          <View>
            <Text style={styles.label}>CURRENT BID</Text>
            <Text style={styles.bid}>{item.bid}</Text>
          </View>
        </View>
      </View>

      {/* RIGHT SIDE */}
      <View style={styles.right}>
        <Text style={styles.timeLabel}>TIME LEFT</Text>
        <Text style={styles.time}>{item.time}</Text>

        <Text style={styles.lot}>LOT {item.lot}</Text>
        <Text style={styles.bids}>{item.bids}</Text>
      </View>

    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

  {/* LEFT SIDE */}
  <View style={styles.leftHeader}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back" size={22} color="#000" />
    </TouchableOpacity>

    <View style={{ marginLeft: 10 }}>
      <Text style={styles.headerTitle}>ibvdnod</Text>
      <Text style={styles.subText}>1 lot in this event</Text>
    </View>
  </View>

  {/* RIGHT SIDE */}
  <View style={styles.liveBadge}>
    <Text style={styles.liveBadgeText}>LIVE</Text>
  </View>

</View>

      <View style={styles.divider} />

      {/* SEARCH */}
      <View style={styles.searchRow}>
        <Text style={styles.resultText}>Your search returned 1 result</Text>

        <View style={styles.filterBtn}>
          <Text style={styles.filterText}>Filters</Text>
        </View>
      </View>

      {/* LIST */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    </View>
  );
};

export default AuctionScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 15,
  },

header: {
  flexDirection: 'row',
  justifyContent: 'space-between', // 👈 important
  alignItems: 'center',
  marginTop: 18,
},

leftHeader: {
  flexDirection: 'row',
  alignItems: 'center',
},

  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 30,
  },

  subText: {
    fontSize: 13,
    color: '#777',
    marginLeft: 30,
  },

  liveBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginRight: 1,
    backgroundColor:"#e7f7eeff",
    borderWidth:.5,
    borderColor:"#9edbb7ff",  
    borderRadius:10
  },

  liveBadgeText: {
    fontWeight: '600',
    fontSize:12
  },

  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 15,
  },

  searchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  resultText: {
    fontFamily: "RobotoSlab-Regular",
    color: '#777',
  },

  filterBtn: {
    borderWidth: 1,
    borderColor: '#1bbf5c',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
  },

  filterText: {
    color: '#1bbf5c',
    fontWeight: '600',
  },

  // ✅ CARD
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
  },

  center: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  liveText: {
    color: '#999',
    marginTop: 2,
  },

  bidRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  clockBox: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#f5e6d3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  label: {
    fontSize: 10,
    color: '#999',
  },

  bid: {
    fontSize: 16,
    color: '#1bbf5c',
    fontWeight: 'bold',
  },

  right: {
    alignItems: 'flex-end',
  },

  timeLabel: {
    fontSize: 10,
    color: '#999',
  },

  time: {
    color: '#1bbf5c',
    fontWeight: 'bold',
    marginBottom: 6,
  },

  lot: {
    fontWeight: '600',
  },

  bids: {
    fontSize: 12,
    color: '#999',
  },

});

