/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  View,
  Text,
 StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Dimensions,
} from "react-native";

const { height } = Dimensions.get("window");

const FilterBottomSheet = ({ visible, onClose }) => {
  // ✅ selected state
  const [selected, setSelected] = useState({});

  // ✅ checkbox select/unselect
  const toggleItem = (section, item) => {
    setSelected((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [item]: !prev?.[section]?.[item],
      },
    }));
  };

  // ✅ clear all checkboxes
  const clearAll = () => {
    setSelected({});
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      {/* OVERLAY */}
      <TouchableOpacity
        activeOpacity={1}
        style={styles.overlay}
        onPress={onClose}
      >
        {/* BOTTOM SHEET */}
        <TouchableOpacity activeOpacity={1} style={styles.sheet}>
          {/* TOP BAR */}
          <View style={styles.topBar} />

          {/* HEADER */}
          <View style={styles.header}>
            <Text style={styles.title}>Filters</Text>

            <TouchableOpacity onPress={onClose}>
              <Text style={styles.close}>Close</Text>
            </TouchableOpacity>
          </View>

          {/* FILTER SECTIONS */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
          >
            <FilterSection
              title="Make"
              items={["Honda (1)"]}
              selected={selected}
              toggleItem={toggleItem}
            />

            <FilterSection
              title="Category"
              items={["Vehicles (1)"]}
              selected={selected}
              toggleItem={toggleItem}
            />

            <FilterSection
              title="Year Of Registration"
              items={["2015 (1)"]}
              selected={selected}
              toggleItem={toggleItem}
            />
          </ScrollView>

          {/* FOOTER */}
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.clearBtn}
              onPress={clearAll}
            >
              <Text style={styles.clearText}>Clear all</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.applyBtn}>
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

// ✅ FILTER SECTION COMPONENT
const FilterSection = ({
  title,
  items,
  selected,
  toggleItem,
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>

      {items.map((item, index) => {
        const isChecked = selected?.[title]?.[item];

        return (
          <TouchableOpacity
            key={index}
            style={styles.optionRow}
            onPress={() => toggleItem(title, item)}
          >
            {/* CHECKBOX */}
            <View
              style={[
                styles.checkbox,
                isChecked && styles.checkedBox,
              ]}
            >
              {isChecked && (
                <Text style={styles.tick}>✓</Text>
              )}
            </View>

            <Text style={styles.optionText}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default FilterBottomSheet;

// ✅ STYLES
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },

  // ✅ BOTTOM SHEET
  sheet: {
    height: height * 0.45,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
  },

  // ✅ DRAG BAR
  topBar: {
    width: 60,
    height: 5,
    backgroundColor: "#D1D5DB",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 18,
  },

  // ✅ HEADER
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  close: {
    fontSize: 14,
    fontWeight: "700",
    color: "#34A853",
  },

  // ✅ SECTION
  section: {
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 12,
  },

  // ✅ OPTION ROW
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  // ✅ CHECKBOX
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#9CA3AF",
    marginRight: 12,
  },

  // ✅ ACTIVE CHECKBOX
  checkedBox: {
    backgroundColor: "#34A853",
    borderColor: "#34A853",
    justifyContent: "center",
    alignItems: "center",
  },

  // ✅ TICK
  tick: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },

  // ✅ OPTION TEXT
  optionText: {
    fontSize: 14,
    color: "#6B7280",
  },

  // ✅ FOOTER
  footer: {
    flexDirection: "row",
    gap: 14,
    marginTop: 10,
  },

  // ✅ CLEAR BUTTON
  clearBtn: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  clearText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#6B7280",
  },

  // ✅ APPLY BUTTON
  applyBtn: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#34A853",
  },

  applyText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});

