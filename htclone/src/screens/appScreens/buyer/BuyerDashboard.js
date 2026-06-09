import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const auctionsData = [
  { id: '1', title: 'Auto Motive', code: 'EVT-2026-002', status: 'LIVE', lots: 2, start: 'Jan 13', end: 'Jun 16', image: require('../../../assets/rng.png') },
  { id: '2', title: 'Auto Motive', code: 'EVT-2026-002', status: 'SCHEDULED', lots: 3, start: 'Apr 16', end: 'Apr 16', image: require('../../../assets/kia.jpg') },
  { id: '3', title: 'Auto Motive', code: 'EVT-2026-002', status: 'LIVE', lots: 2, start: 'Apr 17', end: 'Apr 16', image: require('../../../assets/rng.png') },
  { id: '4', title: 'Auto Motive', code: 'EVT-2026-002', status: 'PAST', lots: 2, start: 'Apr 19', end: 'Apr 16', image: require('../../../assets/kia.jpg') },
  { id: '5', title: 'Auto Motive', code: 'EVT-2026-002', status: 'SCHEDULED', lots: 3, start: 'Apr 20', end: 'Apr 16', image: require('../../../assets/rng.png') },
  { id: '6', title: 'Auto Motive', code: 'EVT-2026-002', status: 'LIVE', lots: 2, start: 'Jan 13', end: 'Jun 16', image: require('../../../assets/kia.jpg') },
  { id: '7', title: 'Auto Motive', code: 'EVT-2026-002', status: 'SCHEDULED', lots: 3, start: 'Apr 16', end: 'Apr 16', image: require('../../../assets/rng.png') },
  { id: '8', title: 'Auto Motive', code: 'EVT-2026-002', status: 'LIVE', lots: 2, start: 'Jan 13', end: 'Jun 16', image: require('../../../assets/kia.jpg') },
  { id: '9', title: 'Auto Motive', code: 'EVT-2026-002', status: 'PAST', lots: 3, start: 'Apr 16', end: 'Apr 16', image: require('../../../assets/rng.png') },
  { id: '10', title: 'Auto Motive', code: 'EVT-2026-002', status: 'LIVE', lots: 2, start: 'Apr 17', end: 'Apr 16', image: require('../../../assets/kia.jpg') },
  { id: '11', title: 'Auto Motive', code: 'EVT-2026-002', status: 'LIVE', lots: 2, start: 'Apr 19', end: 'Apr 16', image: require('../../../assets/rng.png') },
];

const AuctionItem = ({ item, onPress }) => {

  const start = item.start.split(' ');
  const end = item.end.split(' ');

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        activeOpacity={0.8}
         onPress={onPress}
      >
        <View style={styles.card}>

          <View style={styles.imgBox}>
            <Image source={item.image} style={styles.img} />
            <View style={styles.imgauction}>
              <Text style={styles.auctiontext}>Auction</Text>
            </View>
          </View>

          <View style={styles.content}>

            <View style={{ flexDirection: 'row', gap: 6, marginBottom: 16 }}>
              <View style={styles.dateBox}>
                <Text style={styles.month}>{start[0]}</Text>
                <Text style={styles.date}>{start[1]}</Text>
              </View>

              <View style={styles.dateBox}>
                <Text style={styles.month}>{end[0]}</Text>
                <Text style={styles.dateRed}>{end[1]}</Text>
              </View>
            </View>

            <View style={{ marginLeft: 14, marginRight: 13 }}>
              <Text style={styles.title1}>{item.title}</Text>

              <View style={styles.codeBox}>
                <Text style={styles.code}>{item.code}</Text>
              </View>

              <Text style={styles.status}>{item.status}</Text>
            </View>

            {item.lots > 0 && (
              <TouchableOpacity style={styles.lotBtn}>
                <Text style={styles.lotText}>{item.lots} lots</Text>
              </TouchableOpacity>
            )}

          </View>

        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default function BuyerDashboard() {

  const navigation = useNavigation();

  const [tab, setTab] = useState('all');
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;

  const filtered = auctionsData.filter(item => {
    if (tab === 'all') return true;
    if (tab === 'upcoming') return item.status === 'LIVE' || item.status === 'SCHEDULED';
    if (tab === 'live') return item.status === 'LIVE';
    if (tab === 'past') return item.status === 'PAST';
  });

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = filtered.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Text style={styles.menu}>☰</Text>
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Image source={require("../../../assets/logo.png")} style={styles.logoImage} />
          <View>
            <Text style={styles.headerTitle}>Live Auction</Text>
            <Text style={styles.headerSub}>Browse events and bid on lots</Text>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      {/* TABS */}
      <View style={styles.tabs}>

        <View style={styles.tabsLeft}>

          <TouchableOpacity onPress={() => { setTab('upcoming'); setPage(1); }}
            style={[styles.tab, tab === 'upcoming' && styles.tabActive]}>
            <Text style={[styles.tabText, tab === 'upcoming' && styles.tabTextActive]}>Upcoming</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { setTab('live'); setPage(1); }}
            style={[styles.tab, tab === 'live' && styles.tabActive]}>
            <Text style={[styles.tabText, tab === 'live' && styles.tabTextActive]}>Live</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { setTab('past'); setPage(1); }}
            style={[styles.tab, tab === 'past' && styles.tabActive]}>
            <Text style={[styles.tabText, tab === 'past' && styles.tabTextActive]}>Past</Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.eventtext}>{filtered.length} Events</Text>
      </View>

      {/* SEARCH */}
      <View style={styles.searchcontainer}>
        <View style={styles.searchbox}>
          <Icon name="search" size={18} color="#777" style={styles.searchIcon} />
          <TextInput
            placeholder="Search events..."
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>
      </View>

      {/* LIST */}
      <FlatList
        data={paginatedData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <AuctionItem item={item}
        onPress={() => navigation.navigate('EventDetail', { item })} 
        />}

        ListFooterComponent={
          <View style={styles.pagination}>

            {/* <TouchableOpacity
              style={styles.prevBtn}
              disabled={page === 1}
              onPress={() => setPage(page - 1)}
            >
              <Text style={styles.prevText}>Previous</Text>
            </TouchableOpacity> */}

            {/* <Text style={styles.pageText}>{page} of {totalPages}</Text> */}

            {/* <TouchableOpacity
              style={styles.nextBtn}
              disabled={page === totalPages}
              onPress={() => setPage(page + 1)}
            >
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity> */}

          </View>
        }

        contentContainerStyle={{ padding: 15, paddingBottom: 100 }}
      />

    </View>
  );
}



const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    marginTop: 12,
  },

  headerSub: {
    fontSize: 14,
    color: '#777',
    fontFamily: 'RobotoSlab-Regular',
    marginBottom: 6,
  },

  menu: { fontSize: 24, marginLeft: 25, marginRight: 20 },

  headerCenter: { flexDirection: 'row', alignItems: 'center',marginTop:16 },

  headerTitle: { fontSize: 20, fontWeight: 'bold' },

  logoImage: { width: 26, height: 26, marginRight: 20 },

  divider: { height: 1, backgroundColor: '#d1cfcf' },

  button: {
    backgroundColor: '#11a654ff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 30,
    alignItems: 'center',
    marginHorizontal: 20,
  },

  buttonText: { fontWeight: 'bold', color: '#000' },

  tabs: {
    marginTop: 8,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: "space-between"
  },

  tabsLeft: {
    backgroundColor:'#f9f5f5ff',
    marginHorizontal: 15,
    flexDirection: 'row',
    width: '70%',
    borderRadius:10,
    overflow:'hidden',
    // gap: 10,
  },

  tab: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: '#f9f5f5ff',
    borderRadius: 8,
  },

  tabActive: { backgroundColor: '#1ec669' },

  tabText: { color: '#666', fontWeight: '600' },

  tabTextActive: { color: '#fff',marginRight:8 },

  eventtext: { fontSize: 14, color: '#555', marginRight: 18,marginTop:10 },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#dad4d4",
  },

  imgBox: {
    width: 95,
    height: 75,
    marginRight: 13,
    marginTop: 6,
    marginBottom: 9,
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
  },

  img: {
    width: 100,
    height: 67,
    resizeMode: "contain",
  },

  imgauction: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(40, 41, 40, 0.83)",
    alignItems: "center",
  },

  auctiontext: {
    fontSize: 9,
    color: "white",
    fontWeight: "bold",
    padding: 2,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -24
  },

  dateBox: {
    width: 36,
    height: 35,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },

  month: { fontSize: 10, color: '#938e8e' },

  date: { fontSize: 14, color: "#83de5f" },

  dateRed: { fontSize: 14, color: '#f47040' },

  codeBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: "#eee",
    marginTop: 3
  },

  title1: { fontWeight: '700', marginBottom: 3 },

  code: { fontSize: 10 },

  status: { fontSize: 10, color: 'gray', marginTop: 3 },

  lotBtn: {
    backgroundColor: '#ece6e6',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginLeft: 40,
    borderWidth: 1,
    borderColor: '#d0cbcb',
  },

  lotText: { color: '#1c1b1b', fontSize: 13 },

  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },

  prevBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 13,
    borderWidth: 0.5,
    borderColor: '#959f99',
    backgroundColor: '#f2f2f2',
  },

  prevText: { color: '#6cc492', fontWeight: '600' },

  nextBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#19ec27',
  },

  nextText: { color: '#52c686', fontWeight: '600' },

  pageText: { marginHorizontal: 10, color: '#666' },

  searchcontainer: { marginTop: 2 },

  searchbox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginHorizontal: 15,
  },

  searchIcon: { marginRight: 8 },

  searchInput: { flex: 1, fontSize: 14, color: '#000' },
});




