import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import DateTimePicker, { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { launchImageLibrary } from "react-native-image-picker";
import { useNavigation } from "@react-navigation/native";

const CreateEvent = () => {
  const navigation = useNavigation();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [image, setImage] = useState(null);

  const formatDate = (date) => date.toLocaleString();

  // ✅ Android + iOS safe Start Picker
  const showStartPicker = () => {
    if (Platform.OS === "android") {
      DateTimePickerAndroid.open({
        value: startDate,
        mode: "datetime",
        onChange: (event, selectedDate) => {
          if (event.type === "set" && selectedDate) {
            setStartDate(selectedDate);
          }
        },
      });
    }
  };

  // ✅ Android + iOS safe End Picker
  const showEndPicker = () => {
    if (Platform.OS === "android") {
      DateTimePickerAndroid.open({
        value: endDate,
        mode: "datetime",
        onChange: (event, selectedDate) => {
          if (event.type === "set" && selectedDate) {
            setEndDate(selectedDate);
          }
        },
      });
    }
  };

  const pickImage = () => {
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (!response.didCancel && response.assets) {
        setImage(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" size={22} color="#16A34A" />
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Create event</Text>
      </View>

      <View style={styles.divider} />

      <ScrollView>
        {/* EVENT DETAILS */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Event details</Text>

          <Text style={styles.label}>Event ID</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>KEB-0744077940</Text>
          </View>

          <Text style={styles.label}>Event name *</Text>
          <TextInput
            placeholder="e.g. Mega Auto Auction"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
          />
        </View>

        {/* SCHEDULE */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Schedule</Text>

          {/* START */}
          <Text style={styles.label}>Starts *</Text>
          <TouchableOpacity style={styles.inputWithIcon} onPress={showStartPicker}>
            <Text style={styles.inputText}>{formatDate(startDate)}</Text>
            <Icon name="calendar" size={18} color="#555" />
          </TouchableOpacity>

          {/* END */}
          <Text style={styles.label}>Ends *</Text>
          <TouchableOpacity style={styles.inputWithIcon} onPress={showEndPicker}>
            <Text style={styles.inputText}>{formatDate(endDate)}</Text>
            <Icon name="calendar" size={18} color="#555" />
          </TouchableOpacity>

          <Text style={styles.helperText}>
            End time must be after the start time.
          </Text>
        </View>

        {/* IMAGE */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Cover image</Text>

          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <Text style={styles.buttonText}>Choose image</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.uploadBox} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: image }} style={styles.preview} />
            ) : (
              <Text style={styles.uploadText}>Tap to add a cover image</Text>
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonend}>
          <Text style={styles.buttonTextend}>Create Event</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CreateEvent;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB", padding: 16 },

  header: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },

  divider: { height: 0.5, backgroundColor: "#d1cfcf" },

  back: { color: "#16A34A", fontSize: 16, fontWeight: "bold", marginLeft: 3 },

  title: { fontSize: 20, fontWeight: "bold", color: "#111827",marginLeft:60,  },

  card: {
    marginTop: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#d9dbe0ff",
  },

  sectionTitle: { fontSize: 16, fontWeight: "600", marginBottom: 12 },

  label: { fontSize: 14, color: "#6B7280", marginTop: 10, marginBottom: 6 },

  badge: {
    backgroundColor: "#f3f4f7ff",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: "flex-start",
    borderWidth: .5,
    borderColor: "#b2b3b5ff",
  },

  badgeText: { fontSize: 13, fontWeight: "bold" },

  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    padding: 12,
  },

  inputWithIcon: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  inputText: { fontSize: 14 },

  helperText: { fontSize: 12, color: "#9CA3AF", marginTop: 6 },

  button: {
    backgroundColor: "#F3F4F6",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 14,
    borderWidth: .5,
    borderColor: "#cccfd3ff",
  },

  buttonText: { fontWeight: "500" },

  uploadBox: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#c3c5c8ff",
    borderRadius: 12,
    padding: 40,
    alignItems: "center",
  },

  uploadText: { color: "#9CA3AF", paddingVertical: 20 },

  preview: { width: "100%", height: 150, borderRadius: 10 },

  buttonend: {
    backgroundColor: "#109c0dff",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 100,
  },

  buttonTextend: {  color: "#000", fontSize: 16, fontFamily: "RobotoSlab-Bold" },
});

