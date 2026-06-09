import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import {
  useNavigation,
  useRoute,
} from "@react-navigation/native";

const ManagerDetailsScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();

  const { user } = route.params;

  return (
    <View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.header}>

          <TouchableOpacity
            style={styles.backRow}
            onPress={() => navigation.goBack()}
          >
            <Icon
              name="chevron-left"
              size={22}
              color="#16A34A"
            />

            <Text style={styles.backText}>
              Back
            </Text>

          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Manager details
          </Text>

          <View style={{ width: 60 }} />

        </View>

        <View style={styles.divider} />

        <View style={styles.subHeader}>

          <Text style={styles.subText}>
            View and manage manager information and account settings.
          </Text>

          <View style={styles.activeBadge}>
            <Text style={styles.activeText}>
              {user.status}
            </Text>
          </View>

        </View>

        <View style={styles.card}>

          <View style={styles.cardHeader}>

            <Text style={styles.cardTitle}>
              Manager information
            </Text>

            <View style={styles.editRow}>

              <Icon
                name="edit-2"
                size={16}
                color="#16A34A"
              />

              <Text style={styles.editText}>
                Edit details
              </Text>

            </View>

          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.label}>
              Full name
            </Text>

            <Text style={styles.value}>
              {user.name}
            </Text>
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.label}>
              Email address
            </Text>

            <Text style={styles.value}>
              {user.email}
            </Text>
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.label}>
              Account status
            </Text>

            <Text style={[styles.value, { color: "#16A34A" }]}>
              {user.status}
            </Text>
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.label}>
              Role
            </Text>

            <Text style={styles.value}>
              {user.role}
            </Text>
          </View>

        </View>

        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Account actions
          </Text>

          <TouchableOpacity style={styles.redBtn}>

            <Icon
              name="slash"
              size={18}
              color="#fff"
            />

            <Text style={styles.redBtnText}>
              Suspend manager
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.grayBtn}
            onPress={() => navigation.goBack()}
          >

            <Text style={styles.grayBtnText}>
              Go back
            </Text>

          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.roleBtn}>

          <Text style={styles.roleText}>
            Role management
          </Text>

        </TouchableOpacity>

        <View style={{ height: 30 }} />

      </ScrollView>

    </View>
  );
};

export default ManagerDetailsScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingHorizontal: 16,
    alignItems: "center",
  },

  backRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  backText: {
    color: "#16A34A",
    fontSize: 16,
    marginLeft: 4,
    fontWeight: "600",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginTop: 10,
  },

  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },

  subText: {
    color: "#9CA3AF",
    flex: 1,
    paddingRight: 10,
  },

  activeBadge: {
    borderWidth: 1,
    borderColor: "#16A34A",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },

  activeText: {
    color: "#16A34A",
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 16,
    padding: 16,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  editRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  editText: {
    color: "#16A34A",
    marginLeft: 5,
    fontWeight: "600",
  },

  infoBlock: {
    marginBottom: 14,
  },

  label: {
    color: "#9CA3AF",
    fontSize: 13,
  },

  value: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    marginTop: 2,
  },

  redBtn: {
    backgroundColor: "#DC2626",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
  },

  redBtnText: {
    color: "#fff",
    fontWeight: "700",
    marginLeft: 8,
  },

  grayBtn: {
    backgroundColor: "#F3F4F6",
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
  },

  grayBtnText: {
    color: "#111827",
    fontWeight: "600",
  },

  roleBtn: {
    backgroundColor: "#16A34A",
    marginHorizontal: 16,
    marginTop: 20,
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  roleText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

});