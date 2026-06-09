import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const managerdetail = () => {

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
              <Text style={styles.headerTitle}>Contact</Text>
              <Text style={styles.headerSub}>Get in touch with us</Text>
            </View>
          </View>
        </View>

         <View style={styles.divider} />
        
        <ScrollView showsVerticalScrollIndicator={false}>

        {/* Title */}
        <View style={styles.section}>
          <Text style={styles.title}>Get In Touch</Text>
          <Text style={styles.subtitle}>
            We are here to help. Reach out with questions about our platform,
            auction support, or seller inquiries.
          </Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.divider} />

        {/* Contact Info Card */}
        <View style={styles.mainCard}>
          <Text style={styles.smallHeading}>CONTACT INFORMATION</Text>

          <Text style={styles.paragraph}>
            Whether you need assistance with an auction, want to become a seller,
            or have general questions, we are ready to assist.
          </Text>

          {/* Address */}
          <View style={styles.infoCard}>
            <View style={styles.iconBox}>
              <Ionicons name="location-outline" size={16} color="#8BC34A" />
            </View>
            <View>
              <Text style={styles.infoTitle}>ADDRESS</Text>
              <Text style={styles.infoText}>123 Auction Street</Text>
              <Text style={styles.infoText}>Business District</Text>
              <Text style={styles.infoText}>City, State 12345</Text>
            </View>
          </View>

          {/* Phone */}
          <View style={styles.infoCard}>
            <View style={styles.iconBox}>
              <Ionicons name="call-outline" size={16} color="#8BC34A" />
            </View>
            <View>
              <Text style={styles.infoTitle}>PHONE</Text>
              <Text style={styles.infoText}>+1 (555) 123-4567</Text>
              <Text style={styles.infoText}>+1 (555) 123-4568</Text>
            </View>
          </View>

          {/* Email */}
          <View style={styles.infoCard}>
            <View style={styles.iconBox}>
              <Ionicons name="mail-outline" size={16} color="#8BC34A" />
            </View>
            <View>
              <Text style={styles.infoTitle}>EMAIL</Text>
              <Text style={styles.infoText}>
                info@hammersandtongues.com
              </Text>
              <Text style={styles.infoText}>
                support@hammersandtongues.com
              </Text>
            </View>
          </View>

          {/* Business Hours */}
          <View style={styles.infoCard}>
            <View style={styles.iconBox}>
              <Ionicons name="time-outline" size={16} color="#8BC34A" />
            </View>
            <View>
              <Text style={styles.infoTitle}>BUSINESS HOURS</Text>
              <Text style={styles.infoText}>
                Monday-Friday: 9:00 AM - 6:00 PM
              </Text>
              <Text style={styles.infoText}>
                Saturday: 10:00 AM - 4:00 PM
              </Text>
              <Text style={styles.infoText}>Sunday: Closed</Text>
            </View>
          </View>
        </View>

        {/* Form */}
        {/* <View style={styles.mainCard}>
         

        </View> */}
         {/* FORM CARD */}
        <View style={styles.card}>
          <Text style={styles.smallHeading}>SEND A MESSAGE</Text>

          {/* Row */}
          <View style={styles.row}>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Name</Text>
              <TextInput placeholder="Your name" style={styles.input} />
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.label}>Email</Text>
              <TextInput placeholder="you@example.com" style={styles.input} />
            </View>
          </View>

          {/* Buy/Sell */}
          <Text style={styles.label}>Are you looking to buy? Or Sell?</Text>
          <TextInput
            placeholder="Buy or Sell"
            style={styles.inputFull}
          />

          {/* Message */}
          <Text style={styles.label}>Message</Text>
          <TextInput
            placeholder="Type your message..."
            style={styles.textArea}
            multiline
          />

          {/* Button */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Send Message</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* FAQ */}
        <View style={styles.section}>
          <Text style={styles.smallHeading}>
            FREQUENTLY ASKED QUESTIONS
          </Text>
        </View>

        {/* FAQ Cards */}
        <View style={styles.faqCard}>
          <Text style={styles.faqTitle}>
            How do I register as a seller?
          </Text>
          <Text style={styles.faqText}>
            Create an account and complete the KYC verification process.
          </Text>
        </View>

        <View style={styles.faqCard}>
          <Text style={styles.faqTitle}>
            When will I receive my payment?
          </Text>
          <Text style={styles.faqText}>
            Payments are processed within 5-7 business days after auction completion.
          </Text>
        </View>

        <View style={styles.faqCard}>
          <Text style={styles.faqTitle}>
            Is bidding free?
          </Text>
          <Text style={styles.faqText}>
            Registration and browsing are free. A small buyer premium may apply on winning bids.
          </Text>
        </View>
        <View style={styles.faqfaq}></View>


      </ScrollView>
    </SafeAreaView>
  );
};

export default managerdetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },


    divider: {
    height: 1,
    backgroundColor: '#d1cfcf',
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


  logoBox: {
    marginRight: 8,
  },

   logoImage: {
    width: 26,   // apne hisab se size adjust karo
    height: 26,
    marginRight: 16,
    marginLeft:12,
  },

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



  title: {
    fontSize: 23,
    fontFamily: "RobotoSlab-Regular",
    textAlign: 'center',
    fontWeight:800,
  },

  subtitle: {
    fontFamily: "RobotoSlab-Regular",
    marginTop: 10,
    fontSize: 12,
    color: '#7c7979',
    textAlign: 'center',
    lineHeight: 22,
    paddingBottom:10,
  },

  mainCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 12,
    elevation: 2,
    marginTop:15,
  },

  smallHeading: {
    fontFamily: "RobotoSlab-Regular",
    fontSize: 12,
    color: '#a29f9f',
    marginBottom: 10,
    fontWeight: '700',
    letterSpacing: 1,
  },
  paragraph: {
    fontFamily: "RobotoSlab-Regular",
    fontSize: 12,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },

  infoCard: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },

iconBox: {
  width: 36,
  height: 36,
  borderRadius: 12,
  backgroundColor: '#e6f3da',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 10,
},
  infoTitle: {
    fontSize: 10,
    fontFamily: "RobotoSlab-Bold",
    color: '#999',
    marginBottom: 3,
    fontWeight: '600',
  },

  infoText: {
    fontSize: 12,
    color: '#7d7b7b',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBox: {
    width: '48%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 8,
    backgroundColor: '#fafafa',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    marginTop:20,
  },
 





  logoText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 15,
    borderRadius: 12,
    elevation: 2,
  },



  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

   label: {
    fontSize: 11,
    marginTop:8,
    marginBottom: 8,
    color: '#221e1e',
    fontFamily: "RobotoSlab-Regular",
  },



  inputFull: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 8,
    backgroundColor: '#fafafa',
    marginBottom: 10,
    fontFamily: "RobotoSlab-Regular",
  },

  textArea: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 11,
    backgroundColor: '#fafafa',
    height: 110,
    textAlignVertical: 'top',
    marginBottom: 15,
    fontFamily: "RobotoSlab-Regular",
  },

  button: {
  backgroundColor: '#94c65b',
  width: '36%',
  paddingVertical: 9,
  borderRadius: 10,
  alignItems: 'center',
  alignSelf: 'center', // center karne ke liye
  alignSelf: 'flex-start',
},

  buttonText: {
    fontFamily: "RobotoSlab-Bold",
    color: '#000',
    fontSize: 11,
  },

    section: {
    paddingHorizontal: 20,
    marginTop: 10,
  },

  faqCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 13,
    borderRadius: 12,
    elevation: 2,
    
  },

  faqTitle: {
    fontSize: 13,
    fontFamily: "RobotoSlab-Bold",
    marginBottom: 5,
    color: '#404040',
  },

  faqText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 20,
    fontFamily: "RobotoSlab-Regular",
  },
  faqfaq:{
    marginBottom:50,
  }
});



