import React, { useState } from "react";

const useModalHook = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return { open, setOpen, handleClick, handleClose };
};

export default useModalHook;
