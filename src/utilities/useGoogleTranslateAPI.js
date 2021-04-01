import { useState, useEffect } from "react";
import axios from "axios";
import useDebounce from "./useDebounce";
const BASE_URL = "https://translation.googleapis.com/language/translate/v2";
const GoogleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;

const useGoogleTranslateAPI = words => {
  const [language, setLanguage] = useState("");
  const [languageCode, setLanguageCode] = useState("");
  const [translatedWords, setTranslatedWords] = useState("");
  const debouncedLanguageCode = useDebounce(languageCode, 250);

  const handleChange = (event, action) => {
    setLanguageCode(action.props.name);
    setLanguage(event.target.value);
    setTranslatedWords("");
  };

  useEffect(() => {
    const translate = async () => {
      if (!debouncedLanguageCode) {
        setTranslatedWords("Please select a language");
        return;
      }
      await translateText();
    };
    translate();
  }, [debouncedLanguageCode]);

  const translateText = async () => {
    try {
      const GoogleTranslateAPIEndpoint = `${BASE_URL}?key=${GoogleAPIKey}&q=${[
        words
      ]}&target=${debouncedLanguageCode}`;
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

/*
I substituted translatedWords for error handling since this is a user expected response, but realistically a developer would expect some errors thrown
*/

// check local storage for memoized language, word
// else make throttled api call, set local storage
