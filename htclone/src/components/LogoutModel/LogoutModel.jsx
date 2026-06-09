/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const LogoutModal = ({ visible, onClose, onLogout }) => {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modalBox}>

          <Text style={styles.title}>Logout</Text>
          <Text style={styles.msg}>Are you sure you want to logout?</Text>

          <View style={styles.row}>

            <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
              <Icon name="log-out" size={24} color="#ff4d4d" />
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>

          </View>

        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000066',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalBox: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    paddingVertical: 30
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  msg: {
    marginVertical: 10,
    // color: '#666',
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    
  },

  row: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10
  },

  logoutBtn: {
    width: 140,
    flexDirection: 'row',
    backgroundColor: '#f4fefeff',
    borderWidth: .5,
    borderColor: '#ffcccc',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },

  logoutText: {
    color: '#ff4d4d',
    fontWeight: 'bold',
    fontSize: 17
  },

  cancelBtn: {
    width: 140,
    backgroundColor: '#f4fefeff',
    padding: 10,
    paddingVertical: 13,
    borderWidth: .5,
    borderColor: '#ffcccc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cancelText: {
    color: '#000',
    fontSize: 17,
    fontWeight:'bold'
  }
});


