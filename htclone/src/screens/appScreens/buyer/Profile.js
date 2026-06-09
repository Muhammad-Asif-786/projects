import React from "react";
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Profile = () => {

    const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>

      {/* FIXED HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Text style={styles.menu}>☰</Text>
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <View style={styles.logoBox}>
            <Image
              source={require("../../../assets/logo.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

          <View>
            <Text style={styles.headerTitle}>Profile</Text>
            <Text style={styles.headerSub}>
              Register or sign in to continue
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      {/* SCROLL CONTENT */}
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >

        {/* Welcome Card */}
        <View style={styles.card}>
          <Text style={styles.welcomeTitle}>
            Welcome to Hammer & Tongues
          </Text>

          <Text style={styles.subText}>
            Register or sign in to continue
          </Text>

           <TouchableOpacity activeOpacity={1}  onPress={() => navigation.navigate("Register")}>
            <View style={styles.innerCard}>
            <View style={styles.innerCard1}>
              <Ionicons style={styles.icon1} name="person-circle-outline" size={20} color="#16a34a" />
              <Text style={styles.cardTitle1}>Register as buyer</Text>
            </View>
            <View style={{ flex: 1, marginLeft: 1 }}>
              <Text style={styles.cardDesc}>
                Create an account to discover vehicles, place bids, and manage
                your purchases.
              </Text>
              <Text style={styles.link}>Register →</Text>
            </View>
          </View>
           </TouchableOpacity>

          <TouchableOpacity activeOpacity={1}  onPress={() => navigation.navigate("Login")}>
            <View style={styles.innerCard}>
            <View style={styles.innerCard1}>
              <Ionicons style={styles.icon1} name="log-in-outline" size={20} color="#16a34a" />
              <Text style={styles.cardTitle1}>Login</Text>
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.cardDesc}>
                Access your account to manage bids, listings, and more.
              </Text>
              <Text style={styles.link}>Login →</Text>
            </View>
          </View>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>QUICK ACTIONS</Text>

        <View style={styles.row}>
          <View style={styles.quickCard}>
            <Ionicons style={styles.cardicon} name="notifications-outline" size={22} color="#16a34a" />
            <Text style={styles.quickTitle}>Notification preferences</Text>
            <Text style={styles.quickDesc}>
             Configure bidding, payout, and marketing alerts.
            </Text>
          </View>

          <View style={styles.quickCard}>
            <Ionicons style={styles.cardicon} name="lock-closed-outline" size={22} color="#16a34a" />
            <Text style={styles.quickTitle}>Security center</Text>
            <Text style={styles.quickDesc}>
              Update password and enable multi-factor auth.
            </Text>
          </View>
        </View>

        {/* Security Info */}
        <View style={styles.securityBox}>
          <Text style={styles.securityTitle}>Keep your profile secure</Text>

          <View style={styles.update1}>
            <Text style={styles.stepnumbers}>01 </Text>
            <Text style={styles.stepTitle1}>Update details</Text>
          </View>
            <Text style={styles.stepDesc1}>
              Keep your contact and verification information current.
           </Text>
          <View style={styles.divider} />

          <View style={styles.update1}>
            <Text style={styles.stepnumbers}>02 </Text>
            <Text style={styles.stepTitle1}>Choose your role</Text>
          </View>
            <Text style={styles.stepDesc1}>
              Switch between buyer and seller mode as needed.
           </Text>
          <View style={styles.divider} />

          <View style={styles.update1}>
            <Text style={styles.stepnumbers}>03 </Text>
            <Text style={styles.stepTitle1}>Manage notifications</Text>
          </View>
            <Text style={styles.stepDesc1}>
              Control bid alerts, payout notices, and account security reminders.
           </Text>
        </View>

      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
    header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    marginTop:20,
  },
    divider: {
    height: 1,
    width:'85%',
     alignSelf:"center",
    backgroundColor: "#e5e7eb",
    marginVertical: 10,
  },

  menu: {
    fontSize: 22,
    marginRight: 12,
    marginLeft:22,
     fontWeight: '400',
    marginBottom:12,
    marginTop:8,
  },
  logo: {
    width: 28,
    height: 28,
    backgroundColor: "#16a34a",
    borderRadius: 6,
  },
    headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },


  logoBox: {
    marginRight: 8,
  },
    logoImage: {
    width: 26,   // apne hisab se size adjust karo
    height: 26,
    marginRight: 16,
    marginLeft:12,
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
  subText: {
    color: "#6b7280",
    marginTop: 5,
    marginBottom: 10,
        flex:1,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
  },
  card: {
    borderRadius: 16,
    padding: 16,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    backgroundColor: "#f9fafb",
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon:{
    marginTop:12,
  },
  welcomeTitle: {
    fontSize: 24,
    fontFamily: 'RobotoSlab-Bold',
    color: "#111827",
    paddingHorizontal:12,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
  },
  innerCard1:{
     marginLeft:10,
    flexDirection: "row",
  },
  icon1:{
    marginLeft:6,
    marginTop:6,
  },
  cardTitle1:{
    marginTop:6,
    marginLeft:14,
    fontFamily: 'RobotoSlab-Bold',
    fontSize:16,
  },
innerCard: {
  backgroundColor: "#d1fae5",
  paddingHorizontal: 14,
  paddingVertical:18, 
  paddingLeft:20,  
  borderRadius: 12,
  
  // Android shadow
  elevation: 4,
  marginVertical: 6,
  marginHorizontal: 10,
},
  cardTitle: {
    marginVertical:12,
    marginLeft:12,
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },
  cardDesc: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 12,
    color: "#374151",
    marginTop: 4,
  },
  link: {
    marginTop: 6,
    color: "#16a34a",
    fontWeight: "600",
  },
  sectionTitle: {
    marginTop: 30,
    marginBottom:10,
    fontWeight: "700",
    color: "#6b7280",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  quickCard: {
    flex: 1,
    backgroundColor: "#d1fae5",
    padding: 14,
    borderRadius: 14,
    marginHorizontal: 5,
    paddingBottom:25,
  },
  quickTitle: {
    fontFamily: 'RobotoSlab-Bold',
    marginBottom:6,
    color: "#111",
  },
  cardicon:{
    marginTop:10,
    marginBottom:10,
  },
  quickDesc: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 13,
    marginTop: 5,
    color: "#767e8bff",
  },
  securityBox: {
    borderRadius: 16,
    paddingHorizontal: 26,
    paddingLeft:18,
    marginTop: 30,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    backgroundColor: "#f9fafb",
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 150,
  },
  securityTitle: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 15,
    marginBottom: 20,
    marginLeft:25,
    marginTop:15,
  },
  stepTitle: {
    fontWeight: "700",
    marginTop: 10,
  },
  stepDesc: {
    fontSize: 12,
    color: "#6b7280",
  },

    update1:{
    flexDirection: "row",
    marginTop:6,
  },
  stepnumbers:{
    marginRight:6,
    fontSize:14,
    fontWeight:'bold',
    color:'#11c314ff'
  },
  stepTitle1:{
    fontSize:15,
    fontFamily: 'RobotoSlab-Bold',
    marginBottom:10,
    marginLeft:7,
  },
  stepDesc1:{
    fontFamily: 'RobotoSlab-Regular',
    fontSize:12,
    color:"#6b7280",
    marginLeft:28,
    marginBottom:10,
  },

});