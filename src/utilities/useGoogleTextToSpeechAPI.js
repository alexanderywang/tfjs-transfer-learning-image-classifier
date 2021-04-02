import React from "react";
import axios from "axios";

const BASE_URL = "https://texttospeech.googleapis.com/v1beta1/text:synthesize";
const GoogleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;

// const createRequestBody = text => ({
//    headers : {
//    'Content-Type': 'application/json'
//  },
//  body: {
//    input: {
//      text
//    },
//    voice: {
//      languageCode: 'en-US',
//      name: 'en-US-Standard-B',
//      ssmlGender: 'FEMALE'
//    },
//    audioConfig: {
//      audioEncoding: 'MP3',
//    }
//  },
//  method: 'POST'
// })
const useGoogleTextToSpeechAPI = () => {
  const textToSpeech = async (text, languageCode = "en-US") => {
    try {
      const GoogleTextToSpeechAPIEndpoint = `${BASE_URL}?key=${GoogleAPIKey}`;

      const requestBody = {
        audioConfig: {
          audioEncoding: "MP3",
          pitch: 0,
          speakingRate: 1
        },
        input: {
          text
        },
        voice: {
          languageCode,
          name: "en-US-Wavenet-F",
          ssmlGender: "FEMALE"
        }
      };

      const { data } = await axios.post(
        GoogleTextToSpeechAPIEndpoint,
        requestBody
      );
      console.log("audio?", data);
      let audio = new Audio("data:audio/wav;base64," + data.audioContent);
      audio.play();
    } catch (err) {
      console.error(`Error getting translation from Google API: ${err}`);
    }
  };
  return { textToSpeech };
};

export default useGoogleTextToSpeechAPI;
