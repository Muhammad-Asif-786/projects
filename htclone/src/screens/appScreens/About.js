import { useNavigation } from '@react-navigation/native';
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

const AboutScreen = () => {

   const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      

        {/* Header */}
        <View style={styles.header}>
                  <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Text style={styles.menu}>☰</Text>
                    </TouchableOpacity>
                  </View>
        
                  <View style={styles.headerCenter}>
                    <View style={styles.logoBox}>
                        <Image 
                          source={require("../../assets/logo.png")} // ya jahan logo.png ho
                          style={styles.logoImage} 
                          resizeMode="contain"
                        />
                    </View>
        
                    <View >
                      <Text style={styles.headerTitle}>About</Text>
                      <Text style={styles.headerSub}>About Hammer & Tongues</Text>
                    </View>
                  </View>
                </View>

                    <View style={styles.divider} />
        <ScrollView showsVerticalScrollIndicator={false}>
        {/* Main Title */}
        <View style={styles.section2}>
          <Text style={styles.title}>
            About Hammer & Tongues
          </Text>

          <Text style={styles.subtitle2}>
            Your trusted partner in premium online auctions.
            We connect buyers and sellers of exceptional items worldwide.
          </Text>
        </View>

        <View style={styles.divider} />

        {/* Who We Are */}
        <View style={styles.section}>
          <Text style={styles.smallHeading}>WHO WE ARE</Text>

          <Text style={styles.paragraph}>
            Hammer & Tongues is a premier online auction platform dedicated to
            connecting buyers and sellers of exceptional items. With years of
            experience in the auction industry, we have built a reputation for
            transparency, security, and excellence.
          </Text>

          <Text style={styles.paragraph}>
            Our platform brings together collectors, enthusiasts, and businesses
            from around the world, offering a seamless auction experience for
            everything from classic vehicles and real estate to fine art and
            industrial machinery.
          </Text>
        </View>

        {/* Mission */}
        <View style={styles.section}>
          <Text style={styles.smallHeading}>OUR MISSION</Text>

          <Text style={styles.missionText}>
            To make premium auctions accessible, transparent, and rewarding for
            everyone.
          </Text>
        </View>

        {/* Cards */}
        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <Text style={styles.check}>✓</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>Transparency</Text>
            <Text style={styles.cardText}>
              Complete transparency throughout the auction process. All parties
              have access to accurate information.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <Text style={styles.check}>✓</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>Reliability</Text>
            <Text style={styles.cardText}>
              Our secure platform and verified authentication ensure every
              transaction is safe for all participants.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
  <View style={styles.iconCircle}>
    <Text style={styles.check}>✓</Text>
  </View>

  <View style={{ flex: 1 }}>
    <Text style={styles.cardTitle}>Community</Text>
    <Text style={styles.cardText}>
      We foster a vibrant community of collectors and sellers, creating meaningful connections.
    </Text>
  </View>
</View>




{/* WHY CHOOSE US */}
<View style={styles.section}>
  <Text style={styles.smallHeading}>WHY CHOOSE US</Text>
</View>

{/* Grid */}
<View style={styles.grid}>

  <View style={styles.gridCard}>
    <Text style={styles.gridTag}>VERIFIED</Text>
    <Text style={styles.gridTitle}>Verified Sellers</Text>
    <Text style={styles.gridText}>
      All sellers undergo thorough verification to ensure authenticity.
    </Text>
  </View>

  <View style={styles.gridCard}>
    <Text style={styles.gridTag}>SECURE</Text>
    <Text style={styles.gridTitle}>Secure Transactions</Text>
    <Text style={styles.gridText}>
      Advanced encryption and secure payment processing protect every transaction.
    </Text>
  </View>

  <View style={styles.gridCard}>
    <Text style={styles.gridTag}>24/7</Text>
    <Text style={styles.gridTitle}>24/7 Support</Text>
    <Text style={styles.gridText}>
      Our dedicated support team is available around the clock to assist you.
    </Text>
  </View>

  <View style={styles.gridCard}>
    <Text style={styles.gridTag}>GLOBAL</Text>
    <Text style={styles.gridTitle}>Global Reach</Text>
    <Text style={styles.gridText}>
      Connect with buyers and sellers from around the world in one platform.
    </Text>
  </View>

</View>

{/* Divider */}
<View style={styles.divider2} />

{/* BY THE NUMBERS */}
<View style={styles.section}>
  <Text style={styles.smallHeading}>BY THE NUMBERS</Text>
</View>

{/* Stats Grid */}
<View style={styles.grid}>

  <View style={styles.statCard}>
    <Text style={styles.statNumber}>10K+</Text>
    <Text style={styles.statLabel}>ACTIVE USERS</Text>
  </View>

  <View style={styles.statCard}>
    <Text style={styles.statNumber}>50K+</Text>
    <Text style={styles.statLabel}>AUCTIONS COMPLETED</Text>
  </View>

  <View style={styles.statCard}>
    <Text style={styles.statNumber}>$500M+</Text>
    <Text style={styles.statLabel}>VALUE TRADED</Text>
  </View>

  <View style={styles.statCard}>
    <Text style={styles.statNumber}>98%</Text>
    <Text style={styles.statLabel}>SATISFACTION RATE</Text>
  </View>

</View>



      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf9f9',
    marginBottom: '40'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    marginTop:20,
  },

  menu: {
    fontSize: 22,
    marginRight: 12,
    marginLeft:22,
    fontWeight: '400',
    marginBottom:12,
  },

  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  section2: {
  paddingHorizontal: 20,
  justifyContent: "center",   // vertical center
  alignItems: "center",       // horizontal center
  flex: 1,
  paddingBottom: 18,
  
},

  title: {
  textAlign: "center",
},


 subtitle2: {
  paddingHorizontal: 30,  // left & right space
  paddingTop: 12,
  fontSize: 13,
  color: '#a09d9d',
  textAlign: "center",    // text center
},
  logoBox: {
    marginRight: 8,
  },

  logoRow: { flexDirection: 'row', alignItems: 'center' },

  logoText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  headerTitle: {
    fontSize: 20,
    fontFamily: "RobotoSlab-Bold",
  },

  headerSub: {
    fontSize: 13,
    color: '#777',
    fontFamily: "RobotoSlab-Regular",
  },

  section: {
    paddingHorizontal: 20,
    paddingBottom:6,
  },

  title: {
    fontSize: 24,
    fontFamily: "RobotoSlab-Bold",
    color: '#111',
    marginTop:16,
    
  },

  subtitle: {
    fontFamily: "RobotoSlab-Regular",
    // paddingBottom:2,
    fontSize: 14,
    color: '#949191',
    lineHeight: 22,
  },

  divider: {
    height: 1,
    backgroundColor: '#ddd',
  },
divider2: {
  height: 1,
  backgroundColor: '#ddd',
  width: '90%',        // 👈 width control
  alignSelf: 'center', // center
  marginTop:10,
},
  smallHeading: {
    fontSize: 13,
    letterSpacing: 1,
    color: '#999',
    marginBottom: 10,
    marginTop:18,
    fontWeight: '600',
  },

  paragraph: {
    fontFamily: "RobotoSlab-Regular",
    fontSize: 13,
    color: '#959191',
    lineHeight: 24,
    marginBottom: 15,
  },

  missionText: {
    fontFamily: "RobotoSlab-Regular",
    fontSize: 16,
    color: '#80c547',
    fontWeight: '600',
    lineHeight: 18,
  },

 card: {
  flexDirection: 'row',
  backgroundColor: '#fff',
  marginHorizontal: 20,
  marginTop: 10,
  padding: 10,
  borderRadius: 12,

  borderWidth: 1,        // 👈 add
  borderColor: '#e8e1e1',   // 👈 halka border
},
   logoImage: {
    width: 26,   // apne hisab se size adjust karo
    height: 26,
    marginRight: 16,
    marginLeft:12,
  },

  iconCircle: {
    width: 24,
    height: 24,
    borderRadius: 18,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  check: {
    color: '#8dd254',
    fontWeight: 'bold',
  },

  cardTitle: {
    fontFamily: "RobotoSlab-ExtraBold",
    fontSize: 12,
    marginBottom: 5,
    color: '#3f3e3e',
  },

  cardText: {
    fontFamily: "RobotoSlab-Regular",
    fontSize: 13,
    color: '#666',
    lineHeight: 20,
  },
  
grid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  paddingHorizontal: 10,
  marginHorizontal:11
  
},

gridCard: {
  width: '48%',
  backgroundColor: '#fff',
  borderRadius: 12,
  padding: 12,
  marginBottom: 15,
  borderWidth: 1,        // 👈 simple border
  borderColor: '#e8e4e4',   // halki border
},

gridTag: {
  fontFamily: "RobotoSlab-Regular",
  color: '#8dd254',
  fontSize: 10,
  fontWeight: '700',
  marginBottom: 5,
},

gridTitle: {
  fontSize: 14,
  fontFamily: "RobotoSlab-Bold",
  marginBottom: 5,
},

gridText: {
  fontSize: 11,
  color: '#888686',
  lineHeight: 18,
},

statCard: {
  width: '48%',
  backgroundColor: '#fff',
  borderRadius: 12,
  borderWidth: 1,        // 👈 add
  borderColor: '#e0dbdb',   // 👈 halka border
  padding: 10,
  marginBottom: 15,
  alignItems: 'center',
},

statNumber: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#8dd254',
},

statLabel: {
  fontFamily: "RobotoSlab-Bold",
  marginTop: 5,
  fontSize: 9,
  color: '#999',
  letterSpacing: 1,
},
});







