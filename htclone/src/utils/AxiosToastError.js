import showErrorToast from "./showErrorToast";

const AxiosToastError = (error) => {
  const message =
    error?.response?.data?.message ||
    error?.message ||
    "Something went wrong";

  showErrorToast(message);
};

export default AxiosToastError;


