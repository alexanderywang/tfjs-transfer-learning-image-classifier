import { useState } from "react";

const useModal = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return { open, setOpen, handleClickOpen, handleClose };
};

export default useModal;
