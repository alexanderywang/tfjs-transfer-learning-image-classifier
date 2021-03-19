import React, { useEffect, useState, useRef } from "react";
import ClassifyButton from "./ClassifyButton";

const Webcam = ({ setPredictions, setIsLoading, isLoading }) => {
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [image, setImage] = useState(null);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef, isPhotoTaken]);

  // displays video from webcam
  const getVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 300 }
      });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (err) {
      console.error(`error:, ${err}`);
    }
  };

  const takePhoto = () => {
    // get dimensions of video
    const width = videoRef.current.videoWidth;
    const height = videoRef.current.videoHeight;
    // get context object of hidden canvas & set dimensions
    const ctx = canvasRef.current.getContext("2d");
    canvasRef.current.width = width;
    canvasRef.current.height = height;
    // draw current frame to canvas
    ctx.drawImage(videoRef.current, 0, 0, width, height);
    //get image dataURL
    const imageDataURL = canvasRef.current.toDataURL("image/png");
    // set dataURL as source, stop webcam
    stopCam();
    setImageURL(imageDataURL);
    createImage(imageURL);
  };

  const stopCam = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    // stop each frame
    tracks.forEach(track => track.stop());
  };

  const createImage = url => {
    const newImage = new Image();
    newImage.src = url;
    newImage.crossOrigin = "anonymous";
    setImage(newImage);
  };

  return (
    <div>
      <video ref={videoRef} hidden={isPhotoTaken} />
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {isPhotoTaken && <img src={imageURL} ref={imageRef} alt="selfie" />}
      <ClassifyButton
        setPredictions={setPredictions}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setIsPhotoTaken={setIsPhotoTaken}
        isPhotoTaken={isPhotoTaken}
        takePhoto={takePhoto}
        setImageURL={setImageURL}
        imageURL={imageURL}
        image={image}
      />
    </div>
  );
};

export default Webcam;
