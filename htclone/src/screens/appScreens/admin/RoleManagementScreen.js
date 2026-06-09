import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const RoleManagementScreen = () => {
  const navigation = useNavigation();

  const [permissions, setPermissions] = useState({
    userCreate: false,
    userUpdate: false,
    userDelete: false,

    eventCreate: false,
    eventUpdate: false,
    eventDelete: false,

    categoryCreate: false,
    categoryUpdate: false,
    categoryDelete: false,
  });

  const toggleSwitch = (key) => {
    setPermissions({
      ...permissions,
      [key]: !permissions[key],
    });
  };

  // ✅ FIX: added isLast to remove divider after Delete
  const PermissionRow = ({ title, value, onValueChange, isLast = false }) => (
    <>
      <View style={styles.row}>
        <Text style={styles.rowText}>{title}</Text>

        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{
            false: "#a1a1aa",
            true: "#22c55e",
          }}
          thumbColor="#ffffff"
        />
      </View>

      {!isLast && <View style={styles.line} />}
    </>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Icon name="chevron-left" size={22} color="#0ac64f" />

          <Text
            style={styles.backText}
            onPress={() => navigation.goBack()}
          >
            Back
          </Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Role management</Text>

        <View style={{ width: 50 }} />
      </View>

      <View style={styles.divider} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <View style={styles.accountCard}>
          <Text style={styles.accountLabel}>ACCOUNT</Text>
          <Text style={styles.accountEmail}>IOSmanager@yopmail.com</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>User management</Text>

          <PermissionRow
            title="Create"
            value={permissions.userCreate}
            onValueChange={() => toggleSwitch("userCreate")}
          />

          <PermissionRow
            title="Update"
            value={permissions.userUpdate}
            onValueChange={() => toggleSwitch("userUpdate")}
          />

          <PermissionRow
            title="Delete"
            value={permissions.userDelete}
            onValueChange={() => toggleSwitch("userDelete")}
            isLast={true}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Event management + Auction control
          </Text>

          <PermissionRow
            title="Create"
            value={permissions.eventCreate}
            onValueChange={() => toggleSwitch("eventCreate")}
          />

          <PermissionRow
            title="Update"
            value={permissions.eventUpdate}
            onValueChange={() => toggleSwitch("eventUpdate")}
          />

          <PermissionRow
            title="Delete"
            value={permissions.eventDelete}
            onValueChange={() => toggleSwitch("eventDelete")}
            isLast={true}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Category management</Text>

          <PermissionRow
            title="Create"
            value={permissions.categoryCreate}
            onValueChange={() => toggleSwitch("categoryCreate")}
          />

          <PermissionRow
            title="Update"
            value={permissions.categoryUpdate}
            onValueChange={() => toggleSwitch("categoryUpdate")}
          />

          <PermissionRow
            title="Delete"
            value={permissions.categoryDelete}
            onValueChange={() => toggleSwitch("categoryDelete")}
            isLast={true}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>GRV management</Text>

          <PermissionRow
            title="Create"
            value={permissions.categoryCreate}
            onValueChange={() => toggleSwitch("categoryCreate")}
          />

          <PermissionRow
            title="Update"
            value={permissions.categoryUpdate}
            onValueChange={() => toggleSwitch("categoryUpdate")}
          />

          <PermissionRow
            title="Delete"
            value={permissions.categoryDelete}
            onValueChange={() => toggleSwitch("categoryDelete")}
            isLast={true}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Deposit exempt</Text>

          <PermissionRow
            title="Create"
            value={permissions.categoryCreate}
            onValueChange={() => toggleSwitch("categoryCreate")}
            isLast={true}
          />
        </View>

        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.roleText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default RoleManagementScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 45,
    paddingBottom: 18,
    backgroundColor: "#f3f4f6",
  },

  backBtn: {
    flexDirection: "row",
    alignItems: "center",
  },

  backText: {
    color: "#22c55e",
    fontSize: 17,
    fontWeight: "700",
    marginLeft: 3,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#06080c",
  },

  divider: {
    height: 1,
    backgroundColor: "#d4d4d8",
  },

  accountCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 18,
    borderRadius: 22,
    padding: 22,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  accountLabel: {
    color: "#9ca3af",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 8,
  },

  accountEmail: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "500",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 14,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
  },

  rowText: {
    fontSize: 16,
    color: "#111827",
    fontWeight: "500",
  },

  line: {
    height: 1,
    backgroundColor: "#e5e7eb",
    marginVertical: 10,
  },

  saveBtn: {
    backgroundColor: "#16A34A",
    marginHorizontal: 16,
    marginTop: 10,
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 40,
  },

  roleText: {
    color: "#0e0d0d",
    fontWeight: "700",
    fontSize: 16,
  },
});
