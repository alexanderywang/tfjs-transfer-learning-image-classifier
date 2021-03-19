import React, { useEffect, useState, useRef } from "react";
import ClassifyButton from "./ClassifyButton";

const Webcam = ({ setPredictions, setIsLoading, isLoading }) => {
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef, isPhotoTaken]);

  // displays video from webcam
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        const video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error(`error: ${err}`);
      });
  };

  // redraws every .2 seconds to canvas
  const paintToCanvas = () => {
    const video = videoRef.current;
    const photo = photoRef.current;
    const context = photo.getContext("2d");
    //224 x 224 ?
    const width = 320,
      height = 240;
    photo.width = width;
    photo.height = height;

    return setInterval(() => {
      context.drawImage(video, 0, 0, width, height);
    }, 200);
  };

  const takePhoto = () => {};
  return (
    <div>
      {!isPhotoTaken && <video onPlay={() => paintToCanvas()} ref={videoRef} />}
      <canvas ref={photoRef} hidden={!isPhotoTaken} />
      <ClassifyButton
        setPredictions={setPredictions}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setIsPhotoTaken={setIsPhotoTaken}
        isPhotoTaken={isPhotoTaken}
      />
    </div>
  );
};

export default Webcam;
