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
      const [isCached, cachedTranslation] = checkCached(
        debouncedLanguageCode,
        words
      );
      if (isCached) {
        setTranslatedWords(cachedTranslation);
      } else {
        await translateText();
      }
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
      setSessionStorageCache(debouncedLanguageCode, words, translation);
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

const checkCached = (languageCode, string) => {
  const cached = sessionStorage.getItem(languageCode);
  if (cached) {
    const dictionary = JSON.parse(cached);
    // console.log("dictionary in sessionStorage:", dictionary);
    if (dictionary.hasOwnProperty(string)) {
      const translation = dictionary[string];
      // console.log("translation exists:", translation);
      return [true, translation];
    }
  }
  return [false, ""];
};

const setSessionStorageCache = (languageCode, words, translation) => {
  const cache = sessionStorage.getItem(languageCode) || {};
  cache[words] = translation;
  // console.log("words cached?", cache, words, translation);
  sessionStorage.setItem(languageCode, JSON.stringify(cache));
  // console.log("checking sessionStorage", sessionStorage.getItem(languageCode));
};
// can test sessionStorage.length, .key(1), api calls...
