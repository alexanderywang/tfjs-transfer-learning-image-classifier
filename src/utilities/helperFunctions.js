const format = string => {
  return string
    .replace(/[1234567890!@#$%^&*().,''<>?|;:{}\-=_+`~]/g, "")
    .toLowerCase()
    .split(" ")
    .filter(word => word.length)
    .join(" ");
};

export default format;
