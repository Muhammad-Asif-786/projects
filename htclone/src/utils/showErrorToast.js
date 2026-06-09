import Toast from "react-native-toast-message";

const showErrorToast = (message) => {
  Toast.show({
    type: 'error',
    text1: 'Error',
    text2: message.message || 'Something went wrong ShowErrorToast **********************',
    position: 'top',
    visibilityTime: 3000,
  });
};

export default showErrorToast;
