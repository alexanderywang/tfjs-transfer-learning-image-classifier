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

const useCameraHook = () => {
  // camera orientation
  const [isFacingUser, setIsFacingUser] = useState(true);
  const [isMirrored, setIsMirrored] = useState(true);
  const [videoConstraints, setVideoConstraints] = useState(userVideo);
  // taking photo and setting image
  const [imageURL, setImageURL] = useState("");
  const [image, setImage] = useState(null);
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);

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

  const takePhoto = webcamRef => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageURL(imageSrc);
    createImage(imageSrc);
  };

  const createImage = url => {
    const newImage = new Image();
    newImage.src = url;
    newImage.crossOrigin = "anonymous";
    setImage(newImage);
  };

  return {
    flipCamera,
    isMirrored,
    videoConstraints,
    imageURL,
    setImageURL,
    image,
    takePhoto,
    isPhotoTaken,
    setIsPhotoTaken
  };
};

export default useCameraHook;
