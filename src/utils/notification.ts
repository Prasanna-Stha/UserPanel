import toast from "react-hot-toast";

const toastSuccess = (message: string) => {
  toast.success(message, {
    id: message,
    style: {
      border: "1px solid green",
      padding: "12px",
    },
  });
};

const toastError = (message: string) => {
  toast.error(message, {
    id: message,
    style: {
      border: "1px solid red",
      padding: "12px",
    },
  });
};

export const successNotification = (message?: string) => {
  return toastSuccess(message ?? "Successful");
};

export const errorNotification = (message?: string) => {
  return toastError(message ?? "Something went wrong.");
};
