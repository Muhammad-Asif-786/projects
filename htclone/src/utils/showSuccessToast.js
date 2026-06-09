import Toast from "react-native-toast-message";

const showSuccessToast = (message) => {
  Toast.show({
    type: 'success',
    text1: 'Success',
    text2: message || 'Operation completed successfully',
    position: 'top',
    visibilityTime: 3000,
  });
};

export default showSuccessToast;
