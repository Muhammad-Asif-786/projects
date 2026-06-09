import AsyncStorage from "@react-native-async-storage/async-storage";
import { logoutUser } from "../reduxToolkit/actions/Authactions.js";
import { logout } from "../reduxToolkit/slice/Authslice.js";

const logoutHandler = async ({
  dispatch,
  navigation,
  showSuccessToast,
  showErrorToast,
}) => {
  try {
    const result = await dispatch(logoutUser());

    if (logoutUser.fulfilled.match(result)) {
      dispatch(logout());

      await AsyncStorage.multiRemove([
        "accessToken",
        "refreshToken",
      ]);

      showSuccessToast(
        result.payload?.message || "Logout successful"
      );

      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });

      return true;
    }

    showErrorToast(result.payload || "Logout failed");
    return false;

  } catch (error) {
    showErrorToast(error.message);
    return false;
  }
};

export default logoutHandler;