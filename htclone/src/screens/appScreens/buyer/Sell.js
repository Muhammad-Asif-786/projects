import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { height } = Dimensions.get('window');

const Sell = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header – fixed */}

      <View style={styles.header}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Text style={styles.menu}>☰</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerCenter}>
          <View style={styles.logoBox}>
            <Image
              source={require('../../../assets/logo.png')} 
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

          <View>
            <Text style={styles.headerTitle}>Sell</Text>
            <Text style={styles.headerSub}>How to sell with us</Text>
          </View>
        </View>
      </View>

      {/* Divider – fixed */}
      <View style={styles.divider} />

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, padding: 15 }}
      >
        <Text style={styles.heading}>
          Your first step to a simple and rewarding disposal process starts here
        </Text>

        <Text style={styles.paragraph}>
          At Hammer & Tongues we assure you, the seller, unparalleled customer
          service. We have a wealth of experienced staff, an unprecedented
          database of buyers and an excellent marketing and auctioneering team.
        </Text>

        <Text style={styles.paragraph}>
          All of the above make Hammer & Tongues the place to send your property
          should you wish to dispose of it. We have multiple disposal options
          for you to choose from which include; commission sales, outright
          purchases and advanced payments pending commission sales.
        </Text>

        <Text style={styles.paragraph}>
          Any one of our members of staff will gladly walk you through the
          process or alternatively you can simply follow the step-by-step guide
          detailed below.
        </Text>

        {/* Steps Card */}
        <View style={styles.card}>
          <View style={styles.stepTabs}>
            <TouchableOpacity style={styles.activeStep}>
              <Ionicons name="call-outline" size={20} color="#8BC34A" />
              <Text style={styles.activeStepText}>Contact Us</Text>
            </TouchableOpacity>

            {/* Green line below active step */}
            <View style={styles.activeLine} />

            <TouchableOpacity style={styles.step}>
              <MaterialCommunityIcons
                name="truck-outline"
                size={18}
                color="#949594"
              />
              <Text style={styles.stepText}>Consignment of goods</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.step}>
              <MaterialCommunityIcons
                name="wallet-outline"
                size={18}
                color="#949594"
              />
              <Text style={styles.stepText}>Receive Payment</Text>
            </TouchableOpacity>
          </View>
        </View>

         <View style={styles.stepsContainer}>
                  {/* Steps */}
        <View style={styles.row}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>A</Text>
          </View>
          <Text style={styles.text}>
            What do you want to sell? Please give us as much information as you
            can. The more informed we are, the better we can advise you of the
            most effective and efficient way to sell your goods.
          </Text>
        </View>

        <View style={styles.dividerLight} />

        <View style={styles.row}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>B</Text>
          </View>
          <Text style={styles.text}>
            When describing your goods, try to be objective about their
            condition. Lying or withholding information from us about
            something's condition will not increase its value.
          </Text>
        </View>

        <View style={styles.dividerLight} />

        <View style={styles.row}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>C</Text>
          </View>
          <Text style={styles.text}>
            We have sold everything from high-value assets to everyday items.
            Although we have a wealth of knowledge, no-one generally knows more
            about your goods than yourself.
          </Text>
        </View>
         </View>

        {/* Footer */}
        <View style={{ height: height / 12 }} />

        <View style={styles.dividerLight} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Ready to start selling? Get in touch with us today.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sell;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    marginTop: 20,
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menu: {
    fontSize: 22,
    marginRight: 12,
    marginLeft: 22,
     fontWeight: '400',
    marginBottom: 12,
  },

  logoRow: { flexDirection: 'row', alignItems: 'center' },

  logoBox: {
    marginRight: 8,
  },

  logoImage: {
    width: 26, // apne hisab se size adjust karo
    height: 26,
    marginRight: 16,
    marginLeft: 12,
  },

  logoText: { color: '#fff', fontWeight: 'bold' },

  title: { fontSize: 22, fontWeight: 'bold', color: '#111827' },

  subtitle: {
    color: '#6B7280',
    marginTop: 2,
    fontFamily: 'RobotoSlab-Regular',
  },

  divider: { height: 1, backgroundColor: '#c0c7d3' },

  content: { padding: 15 },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 15,
    marginTop: 17,
    marginHorizontal:10
  },

  paragraph: { color: '#6B7280', lineHeight: 22, marginBottom: 15,marginHorizontal:10  },

  row: { flexDirection: 'row',marginHorizontal:10,padding:10, },

  card: {
    backgroundColor: '#fff',
    marginVertical: 15,
    borderTopLeftRadius: 15,
    borderTopEndRadius: 15,
    overflow: 'hidden',
    elevation: 2,
    marginBottom: 24,
    marginHorizontal:10
  },

  stepTabs: { padding: 15 },

  activeStep: { flexDirection: 'row', alignItems: 'center', marginBottom: 2 },

  step: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },

  stepIcon: { fontSize: 18, marginRight: 10 },

  activeStepText: {
    color: '#8BC34A',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 6,
  },

  stepText: { color: '#9CA3AF', fontSize: 16, marginLeft: 8 },

  activeLine: {
    height: 3,
    width: 150,
    backgroundColor: '#8BC34A',
    marginBottom: 15,
    marginLeft: -20, // 👈 parent padding cancel
    marginTop: 10,
  },

  circle: {
    width: 28,
    height: 28,
    borderRadius: 18,
    backgroundColor: '#8BC34A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  circleText: { color: '#000', fontWeight: 'bold' },

  text: { flex: 1, fontSize: 12, color: '#555', lineHeight: 20 },

  dividerLight: { height: 1, backgroundColor: '#cdd3df', marginVertical: 10 },

  footer: { alignItems: 'center', padding: 20, marginBottom: 100 },

  footerText: { textAlign: 'center', color: '#777', marginBottom: 15 },

  button: {
    backgroundColor: '#8BC34A',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 30,
  },

  buttonText: { fontWeight: 'bold', color: '#000' },

  headerTitle: {
    fontSize: 20,
    fontFamily: 'RobotoSlab-Bold',
  },

  headerSub: {
    fontSize: 13,
    color: '#777',
    fontFamily: 'RobotoSlab-Regular',
  },
});



