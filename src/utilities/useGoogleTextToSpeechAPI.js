import { useState } from "react";
import axios from "axios";
import supportedVoices from "./supportedLanguageVoices";
const BASE_URL = "https://texttospeech.googleapis.com/v1beta1/text:synthesize";
const GoogleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;

// can toggle gender with Wavenet-D
const useGoogleTextToSpeechAPI = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const textToSpeech = async (text, languageCode = "en-US") => {
    setIsDisabled(true);
    console.log(text, languageCode);
    if (text === "Please select a language") languageCode = "en-US";
    const key = `${languageCode}+${text}`;
    if (sessionStorage.getItem(key)) {
      // console.log("audio played before");
      let audio = new Audio(sessionStorage.getItem(key));
      audio.play();
    } else {
      const GoogleTextToSpeechAPIEndpoint = `${BASE_URL}?key=${GoogleAPIKey}`;
      const name = supportedVoices(languageCode);

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
          name
        }
      };

      try {
        const { data } = await axios.post(
          GoogleTextToSpeechAPIEndpoint,
          requestBody
        );
        sessionStorage.setItem(
          key,
          "data:audio/wav;base64," + data.audioContent
        );
        // console.log("set sessionStorage:", sessionStorage.getItem(key));
        let audio = new Audio("data:audio/wav;base64," + data.audioContent);
        audio.play();
      } catch (err) {
        console.error(`Error getting translation from Google API: ${err}`);
      }
    }
    setTimeout(() => setIsDisabled(false), 5000);
  };
  return { textToSpeech, isDisabled };
};

export default useGoogleTextToSpeechAPI;
