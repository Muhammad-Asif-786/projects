/* eslint-disable react/prop-types */
import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const DeleteUserModal = ({ visible, onClose, onDelete }) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>

          <Text style={styles.title}>Delete user</Text>

          <Text style={styles.subtitle}>
            Soft-delete this account?
          </Text>

          <View style={styles.btnRow}>

            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancel}>CANCEL</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onDelete}>
              <Text style={styles.delete}>DELETE</Text>
            </TouchableOpacity>

          </View>

        </View>
      </View>
    </Modal>
  );
};

export default DeleteUserModal;

const styles = StyleSheet.create({

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    fontSize: 14,
    color: "#111827",
    marginTop: 10,
    marginBottom: 25,
  },

  btnRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 25,
    marginTop: 24,
  },

  cancel: {
    color: "#25897a",
    fontWeight: "700",
    fontSize: 14,
  },

  delete: {
    color: "#25897a",
    fontWeight: "700",
    fontSize: 14,
  },
});