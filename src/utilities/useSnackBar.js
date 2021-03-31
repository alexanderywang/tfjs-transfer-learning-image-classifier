import { useState } from "react";

const useSnackBar = () => {
  const [open, setOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return {
    handleClose,
    open,
    setOpen,
    snackBarMessage,
    setSnackBarMessage
  };
};

export default useSnackBar;
