import axios from "axios";
const BASE_URL = "https://translation.googleapis.com/language/translate/v2";
const GoogleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;

const translateText = async (words, languageCode, language) => {
  let translation;
  try {
    if (languageCode) {
      const GoogleTranslateAPIEndpoint = `${BASE_URL}?key=${GoogleAPIKey}&q=${[
        words
      ]}&target=${languageCode}`;

      const { data } = await axios.post(GoogleTranslateAPIEndpoint);
      translation = data.data.translations[0].translatedText;
    } else {
      translation = "Please select a language";
    }
  } catch (err) {
    console.error(`Error getting translation from Google API: ${err}`);
    translation = "Error translating. Please try again later.";
  }
  return translation;
};

export default translateText;

// check local storage for memoized language, word
// else make throttled api call, set local storage
