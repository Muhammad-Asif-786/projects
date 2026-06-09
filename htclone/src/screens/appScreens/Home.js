import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const auctionsData = [
  { id: '1', title: 'Auto Motive', code: 'EVT-2026-002', status: 'LIVE', lots: 2, start: 'Jan 13', end: 'Jun 16', image: require('../../assets/rng.png') },
  { id: '2', title: 'Auto Motive', code: 'EVT-2026-002', status: 'SCHEDULED', lots: 3, start: 'Apr 16', end: 'Apr 16', image: require('../../assets/kia.jpg') },
  { id: '3', title: 'Auto Motive', code: 'EVT-2026-002', status: 'LIVE', lots: 2, start: 'Apr 17', end: 'Apr 16', image: require('../../assets/rng.png') },
  { id: '4', title: 'Auto Motive', code: 'EVT-2026-002', status: 'LIVE', lots: 2, start: 'Apr 19', end: 'Apr 16', image: require('../../assets/kia.jpg') },
  { id: '5', title: 'Auto Motive', code: 'EVT-2026-002', status: 'SCHEDULED', lots: 3, start: 'Apr 20', end: 'Apr 16', image: require('../../assets/rng.png') },
   { id: '6', title: 'Auto Motive', code: 'EVT-2026-002', status: 'LIVE', lots: 2, start: 'Jan 13', end: 'Jun 16', image: require('../../assets/kia.jpg') },
  { id: '7', title: 'Auto Motive', code: 'EVT-2026-002', status: 'SCHEDULED', lots: 3, start: 'Apr 16', end: 'Apr 16', image: require('../../assets/rng.png') },
  { id: '8', title: 'Auto Motive', code: 'EVT-2026-002', status: 'LIVE', lots: 2, start: 'Jan 13', end: 'Jun 16', image: require('../../assets/kia.jpg') },
  { id: '9', title: 'Auto Motive', code: 'EVT-2026-002', status: 'SCHEDULED', lots: 3, start: 'Apr 16', end: 'Apr 16', image: require('../../assets/rng.png') },
  { id: '10', title: 'Auto Motive', code: 'EVT-2026-002', status: 'LIVE', lots: 2, start: 'Apr 17', end: 'Apr 16', image: require('../../assets/kia.jpg') },
  { id: '11', title: 'Auto Motive', code: 'EVT-2026-002', status: 'LIVE', lots: 2, start: 'Apr 19', end: 'Apr 16', image: require('../../assets/rng.png') },
];

const AuctionItem = ({ item }) => {
  const navigation = useNavigation();

  const start = item.start.split(' ');
  const end = item.end.split(' ');

  return (

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      
      {/* 👉 MAKE THIS CLICKABLE */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('AuctionScreen', { item })}
      >
        <View style={styles.card}>
          
          {/* IMAGE */}
          <View style={styles.imgBox}>
            <Image source={item.image} style={styles.img} />
            <View style={styles.imgauction}>
              <Text style={styles.auctiontext}>Auction</Text>
            </View>
          </View>

          {/* CONTENT */}
          <View style={styles.content}>
            
            {/* DATE */}
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

            {/* INFO */}
            <View style={{ marginLeft: 14, marginRight: 13 }}>
              <Text style={styles.title1}>{item.title}</Text>

              <View style={styles.codeBox}>
                <Text style={styles.code}>{item.code}</Text>
              </View>

              <Text style={styles.status}>{item.status}</Text>
            </View>

            {/* LOTS */}
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


export default function Home() {
  const navigation = useNavigation();

  const [tab, setTab] = useState('upcoming');
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;

  const filtered = auctionsData.filter(item =>
    tab === 'upcoming'
      ? item.status === 'LIVE' || item.status === 'SCHEDULED'
      : item.status === 'PAST'
  );

  // 👉 pagination logic
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = filtered.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Text style={styles.menu}>☰</Text>
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Image source={require("../../assets/logo.png")} style={styles.logoImage} />
            <Text style={styles.headerTitle}>Hammer & Tongues</Text>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      {/* LIST */}
      <FlatList
        data={paginatedData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <AuctionItem item={item} />}

        ListHeaderComponent={
          <View>
            {/* BANNER */}
            <View style={styles.banner}>
              <Text style={styles.bannerTitle}>
                Premier Online Auctions. Unbeatable Value.
              </Text>
              <Text style={styles.bannerSub}>
                Discover exclusive deals on vehicles, real estate, art, and more.You next prized possession awaits.
              </Text>
            </View>

            {/* TABS */}
            <View style={styles.tabs}>
              <View style={styles.tabsLeft}>

                <TouchableOpacity
                  onPress={() => {
                    setTab('upcoming');
                    setPage(1); // reset page
                  }}
                  style={[styles.tab, tab === 'upcoming' && styles.tabActive]}
                >
                  <Text style={[styles.tabText, tab === 'upcoming' && styles.tabTextActive]}>
                    Upcoming
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setTab('past');
                    setPage(1); // reset page
                  }}
                  style={[styles.tab, tab === 'past' && styles.tabActive]}
                >
                  <Text style={[styles.tabText, tab === 'past' && styles.tabTextActive]}>
                    Past
                  </Text>
                </TouchableOpacity>

              </View>

              <Text style={styles.eventtext}>16 Events</Text>
            </View>

          </View>
        }

        // ✅ FOOTER (ONLY ONCE)
        ListFooterComponent={
          <View style={styles.pagination}>

            <TouchableOpacity
              style={styles.prevBtn}
              disabled={page === 1}
              onPress={() => setPage(page - 1)}
            >
              <Text style={styles.prevText}>Previous</Text>
            </TouchableOpacity>

            <Text style={styles.pageText}>{page} of {totalPages}</Text>

            <TouchableOpacity
              style={styles.nextBtn}
              disabled={page === totalPages}
              onPress={() => setPage(page + 1)}
            >
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>

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
    marginTop:20,
  },

  menu: { fontSize: 24, marginLeft: 25, marginRight: 20 },

  headerCenter: { flexDirection: 'row', alignItems: 'center' },

  headerTitle: { fontSize: 20, fontWeight: 'bold' },

  logoImage: { width: 26, height: 26, marginRight: 20 },

  divider: { height: 1, backgroundColor: '#d1cfcf' },

  banner: {
    backgroundColor: 'rgba(14, 154, 82, 0.25)',
    padding: 25,
    paddingTop: 40,
    paddingBottom: 40,
    borderRadius: 20,
    marginVertical: 10,
  },

  bannerTitle: { fontSize: 24, marginBottom: 15, fontFamily: 'RobotoSlab-Bold', },

  bannerSub: { fontSize: 15, color: '#7d7878' },

  tabs: {
    marginTop: 24,
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: "space-between"
  },

  tabsLeft: {
    flexDirection: 'row',
    width: '70%',
    gap: 10,
  },

  tab: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: '#e6e6e6',
    borderRadius: 8,
  },

  tabActive: { backgroundColor: '#1ec669' },

  tabText: { color: '#666', fontWeight: '600' },

  tabTextActive: { color: '#fff' },

  eventtext: { fontSize: 14, color: '#555' },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#dad4d4",
  },

imgBox: {
  // backgroundColor:"green",
  width: 95,
  height: 75,
  marginRight: 13,
  marginTop:6,
  marginBottom: 9,
  position: "relative",
  borderRadius: 12,
  overflow: "hidden", // 👈 VERY IMPORTANT
},

img: {
  width: 100,
  height: 67,
  resizeMode: "contain",
  borderRadius: 10, // optional but better
},

imgauction: {
  position: "absolute",
  bottom: 0,
  width: "100%",
  backgroundColor: "rgba(40, 41, 40, 0.83)",
  borderBottomRightRadius: 6,
  borderBottomLeftRadius: 6,
  alignItems: "center",
  
},

auctiontext: {
  fontSize: 9,
  color: "white",
  fontWeight: "bold",
  padding: 2,
},
  content: { flexDirection: 'row', alignItems: 'center', marginTop:-24 },

  dateBox: {
    width: 36,
    height: 35,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    paddingBottom:4,
    paddingTop:4,
  },

  month: { fontSize: 10, color: '#938e8e', fontWeight:800,marginTop: 4 },

  date: { fontSize: 14, color: "#83de5f", fontWeight:800,marginBottom:4 },

  dateRed: { fontSize: 14, color: '#f47040', fontWeight:800,marginBottom:4  },

  codeBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: "#eee",
    marginTop: 3
  },
  title1: {
    fontFamily: 'RobotoSlab-regualr',
    fontWeight: '700', 
    marginBottom: 3
  },

  code: { fontSize: 10, fontWeight: '600' },

  status: { fontSize: 10, color: 'gray', marginTop: 3 },

  lotBtn: {
    backgroundColor: '#ece6e6',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginLeft: 40,
    borderWidth:1,
    borderColor:'#d0cbcb',
    
  },

  lotText: { color: '#1c1b1b', fontSize: 13 },

  // ✅ PAGINATION
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
    borderWidth: .5,
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
});

