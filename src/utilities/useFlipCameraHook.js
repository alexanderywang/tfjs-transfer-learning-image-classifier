import { useState } from "react";

const userVideo = {
  width: 240,
  height: 240,
  facingMode: "user"
};

const facingOutVideo = {
  width: 240,
  height: 240,
  facingMode: { exact: "environment" }
};

const useFlipCameraHook = () => {
  const [isFacingUser, setIsFacingUser] = useState(true);
  const [isMirrored, setIsMirrored] = useState(true);
  const [videoConstraints, setVideoConstraints] = useState(userVideo);

  const flipCamera = () => {
    // if (isFacingUser) {
    //   setVideoConstraints(facingOutVideo);
    // } else {
    //   setVideoConstraints(userVideo);
    // }
    // console.log("flipping camera");
    setVideoConstraints(isFacingUser ? facingOutVideo : userVideo);
    setIsMirrored(!isMirrored);
    setIsFacingUser(!isFacingUser);
    // console.log(
    //   "facing:",
    //   isFacingUser,
    //   "mirrored:",
    //   isMirrored,
    //   "video:",
    //   videoConstraints
    // );
  };

  return { flipCamera,isMirrored, videoConstraints };
};

export default useFlipCameraHook;
