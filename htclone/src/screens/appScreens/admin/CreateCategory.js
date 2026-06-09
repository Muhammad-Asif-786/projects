import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const CreateCategory = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={22} color="#1DB954" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Create category</Text>

        <View style={{ width: 22 }} />
      </View> */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
        <TouchableOpacity
            style={styles.backRow}
            onPress={() => navigation.goBack()}
        >
            <Icon name="chevron-left" size={22} color="#16A34A" />
            <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Create Category</Text>

        <View style={{ width: 60 }} />
        </View>

        <View style={styles.divider} />
    </View>

      {/* Step Badge */}
      <View style={styles.stepBox}>
        <Text style={styles.stepText}>Step 1 of 2 · Name</Text>
      </View>

      {/* Info Text */}
      <Text style={styles.infoText}>
        Pick a clear name (e.g. Vehicles, Electronics).{"\n"}
        On the next step you will add fields like Make, Year, and bid increments.
      </Text>

      {/* Input Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Icon name="tag" size={18} color="#1DB954" />
          <Text style={styles.cardTitle}>Category name</Text>
        </View>

        <Text style={styles.label}>Name *</Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="e.g. Electronics"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <Text style={styles.helperText}>
          This name appears in category lists and when creating lots.
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue to category fields</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default CreateCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F9',
    // paddingHorizontal: 16,
  },

//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },

  stepBox: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f3f2',
    borderColor: '#1DB954',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 20,
    marginTop: 15,
    marginHorizontal: 16,
    
  },

  stepText: {
    color: '#1DB954',
    fontSize: 12,
    fontWeight: '600',
  },

  infoText: {
    marginTop: 15,
    fontSize: 15,
    color: '#666',
    lineHeight: 18,
    marginHorizontal: 16,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 16,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
  },

  label: {
    fontSize: 13,
    color: '#444',
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 45,
    fontSize: 14,
    backgroundColor: '#FAFAFA',
  },

  helperText: {
    marginTop: 8,
    fontSize: 12,
    color: '#888',
  },

  button: {
    backgroundColor: '#0e8a0a',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
    marginHorizontal: 16,
    alignItems: 'center',
  },

  buttonText: {
    color: '#0c0c0c',
    fontWeight: '600',
    fontSize: 17,
  },

   headerContainer: {
    backgroundColor: "#fff",
    paddingTop: 36,
    paddingHorizontal: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  backText: {
    color: "#16A34A",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 4,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  divider: {
    height: 0.5,
    backgroundColor: "#D1D5DB",
    marginTop: 12,
  },
});