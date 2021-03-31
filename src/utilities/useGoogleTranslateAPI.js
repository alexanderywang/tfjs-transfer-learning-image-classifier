import { useState, useEffect } from "react";
import axios from "axios";
const BASE_URL = "https://translation.googleapis.com/language/translate/v2";
const GoogleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;

const useGoogleTranslateAPI = words => {
  const [language, setLanguage] = useState("");
  const [languageCode, setLanguageCode] = useState("");
  const [translatedWords, setTranslatedWords] = useState("");

  const handleChange = (event, action) => {
    setLanguageCode(action.props.name);
    setLanguage(event.target.value);
    setTranslatedWords("");
  };

  useEffect(() => {s
    const translate = async () => {
      if (!languageCode) {
        setTranslatedWords("Please select a language");
        return;
      }
      await translateText();
    };
    translate();
  }, [languageCode]);

  const translateText = async () => {
    try {
      const GoogleTranslateAPIEndpoint = `${BASE_URL}?key=${GoogleAPIKey}&q=${[
        words
      ]}&target=${languageCode}`;
      const { data } = await axios.post(GoogleTranslateAPIEndpoint);
      const translation = data.data.translations[0].translatedText;
      setTranslatedWords(translation);
    } catch (err) {
      console.error(`Error getting translation from Google API: ${err}`);
      setTranslatedWords("Error translating. Please try again later.");
    }
  };

  return {
    handleChange,
    language,
    translatedWords
  };
};

export default useGoogleTranslateAPI;

// check local storage for memoized language, word
// else make throttled api call, set local storage
