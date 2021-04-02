/*******
 * Returns a random female voice (for now) if language is supported by Google
 */

// https://cloud.google.com/text-to-speech/docs/reference/rest/v1/voices/list
const VOICES = [
  {
    languageCodes: ["ar-XA"],
    name: "ar-XA-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ar-XA"],
    name: "ar-XA-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ar-XA"],
    name: "ar-XA-Wavenet-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ar-XA"],
    name: "ar-XA-Wavenet-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["bn-IN"],
    name: "bn-IN-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["bn-IN"],
    name: "bn-IN-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-GB"],
    name: "en-GB-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-GB"],
    name: "en-GB-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-GB"],
    name: "en-GB-Wavenet-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-GB"],
    name: "en-GB-Wavenet-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-GB"],
    name: "en-GB-Wavenet-F",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fr-CA"],
    name: "fr-CA-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fr-CA"],
    name: "fr-CA-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fr-CA"],
    name: "fr-CA-Wavenet-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fr-CA"],
    name: "fr-CA-Wavenet-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Wavenet-G",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Wavenet-H",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Wavenet-I",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Wavenet-J",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Wavenet-A",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Wavenet-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Wavenet-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Wavenet-E",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Wavenet-F",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["es-ES"],
    name: "es-ES-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fi-FI"],
    name: "fi-FI-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["gu-IN"],
    name: "gu-IN-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["gu-IN"],
    name: "gu-IN-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ja-JP"],
    name: "ja-JP-Wavenet-B",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ja-JP"],
    name: "ja-JP-Wavenet-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ja-JP"],
    name: "ja-JP-Wavenet-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ja-JP"],
    name: "ja-JP-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["kn-IN"],
    name: "kn-IN-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["kn-IN"],
    name: "kn-IN-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ml-IN"],
    name: "ml-IN-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ml-IN"],
    name: "ml-IN-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["sv-SE"],
    name: "sv-SE-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ta-IN"],
    name: "ta-IN-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ta-IN"],
    name: "ta-IN-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["tr-TR"],
    name: "tr-TR-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["tr-TR"],
    name: "tr-TR-Wavenet-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["tr-TR"],
    name: "tr-TR-Wavenet-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["tr-TR"],
    name: "tr-TR-Wavenet-E",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["tr-TR"],
    name: "tr-TR-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["cs-CZ"],
    name: "cs-CZ-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["de-DE"],
    name: "de-DE-Wavenet-F",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["de-DE"],
    name: "de-DE-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["de-DE"],
    name: "de-DE-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["de-DE"],
    name: "de-DE-Wavenet-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["de-DE"],
    name: "de-DE-Wavenet-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["de-DE"],
    name: "de-DE-Wavenet-E",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-AU"],
    name: "en-AU-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-AU"],
    name: "en-AU-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-AU"],
    name: "en-AU-Wavenet-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-AU"],
    name: "en-AU-Wavenet-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-IN"],
    name: "en-IN-Wavenet-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-IN"],
    name: "en-IN-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-IN"],
    name: "en-IN-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-IN"],
    name: "en-IN-Wavenet-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fr-FR"],
    name: "fr-FR-Wavenet-E",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fr-FR"],
    name: "fr-FR-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fr-FR"],
    name: "fr-FR-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fr-FR"],
    name: "fr-FR-Wavenet-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fr-FR"],
    name: "fr-FR-Wavenet-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["hi-IN"],
    name: "hi-IN-Wavenet-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["hi-IN"],
    name: "hi-IN-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["hi-IN"],
    name: "hi-IN-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["hi-IN"],
    name: "hi-IN-Wavenet-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["id-ID"],
    name: "id-ID-Wavenet-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["id-ID"],
    name: "id-ID-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["id-ID"],
    name: "id-ID-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["id-ID"],
    name: "id-ID-Wavenet-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["it-IT"],
    name: "it-IT-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["it-IT"],
    name: "it-IT-Wavenet-B",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["it-IT"],
    name: "it-IT-Wavenet-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["it-IT"],
    name: "it-IT-Wavenet-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ko-KR"],
    name: "ko-KR-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ko-KR"],
    name: "ko-KR-Wavenet-B",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ko-KR"],
    name: "ko-KR-Wavenet-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ko-KR"],
    name: "ko-KR-Wavenet-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ru-RU"],
    name: "ru-RU-Wavenet-E",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ru-RU"],
    name: "ru-RU-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ru-RU"],
    name: "ru-RU-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ru-RU"],
    name: "ru-RU-Wavenet-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ru-RU"],
    name: "ru-RU-Wavenet-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["uk-UA"],
    name: "uk-UA-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["cmn-CN"],
    name: "cmn-CN-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["cmn-CN"],
    name: "cmn-CN-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["cmn-CN"],
    name: "cmn-CN-Wavenet-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["cmn-CN"],
    name: "cmn-CN-Wavenet-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["cmn-TW"],
    name: "cmn-TW-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["cmn-TW"],
    name: "cmn-TW-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["cmn-TW"],
    name: "cmn-TW-Wavenet-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["da-DK"],
    name: "da-DK-Wavenet-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["da-DK"],
    name: "da-DK-Wavenet-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["da-DK"],
    name: "da-DK-Wavenet-E",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["da-DK"],
    name: "da-DK-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["el-GR"],
    name: "el-GR-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fil-PH"],
    name: "fil-PH-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fil-PH"],
    name: "fil-PH-Wavenet-B",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fil-PH"],
    name: "fil-PH-Wavenet-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fil-PH"],
    name: "fil-PH-Wavenet-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["hu-HU"],
    name: "hu-HU-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nb-NO"],
    name: "nb-NO-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nb-NO"],
    name: "nb-NO-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nb-NO"],
    name: "nb-NO-Wavenet-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nb-NO"],
    name: "nb-NO-Wavenet-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nb-NO"],
    name: "nb-no-Wavenet-E",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nl-NL"],
    name: "nl-NL-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nl-NL"],
    name: "nl-NL-Wavenet-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nl-NL"],
    name: "nl-NL-Wavenet-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nl-NL"],
    name: "nl-NL-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nl-NL"],
    name: "nl-NL-Wavenet-E",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pt-PT"],
    name: "pt-PT-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pt-PT"],
    name: "pt-PT-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pt-PT"],
    name: "pt-PT-Wavenet-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pt-PT"],
    name: "pt-PT-Wavenet-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["sk-SK"],
    name: "sk-SK-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["vi-VN"],
    name: "vi-VN-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["vi-VN"],
    name: "vi-VN-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["vi-VN"],
    name: "vi-VN-Wavenet-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["vi-VN"],
    name: "vi-VN-Wavenet-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pl-PL"],
    name: "pl-PL-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pl-PL"],
    name: "pl-PL-Wavenet-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pl-PL"],
    name: "pl-PL-Wavenet-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pl-PL"],
    name: "pl-PL-Wavenet-E",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pl-PL"],
    name: "pl-PL-Wavenet-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pt-BR"],
    name: "pt-BR-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ca-ES"],
    name: "ca-es-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["es-ES"],
    name: "es-ES-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["es-ES"],
    name: "es-ES-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Standard-A",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Standard-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Standard-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Standard-E",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Standard-F",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Standard-G",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Standard-H",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Standard-I",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-US"],
    name: "en-US-Standard-J",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ar-XA"],
    name: "ar-XA-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ar-XA"],
    name: "ar-XA-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ar-XA"],
    name: "ar-XA-Standard-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ar-XA"],
    name: "ar-XA-Standard-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fr-FR"],
    name: "fr-FR-Standard-E",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["it-IT"],
    name: "it-IT-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ru-RU"],
    name: "ru-RU-Standard-E",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ru-RU"],
    name: "ru-RU-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ru-RU"],
    name: "ru-RU-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ru-RU"],
    name: "ru-RU-Standard-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ru-RU"],
    name: "ru-RU-Standard-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["cmn-CN"],
    name: "cmn-CN-Standard-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["cmn-CN"],
    name: "cmn-CN-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["cmn-CN"],
    name: "cmn-CN-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["cmn-CN"],
    name: "cmn-CN-Standard-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ja-JP"],
    name: "ja-JP-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ja-JP"],
    name: "ja-JP-Standard-B",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ja-JP"],
    name: "ja-JP-Standard-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ja-JP"],
    name: "ja-JP-Standard-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["cmn-TW"],
    name: "cmn-TW-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["cmn-TW"],
    name: "cmn-TW-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["cmn-TW"],
    name: "cmn-TW-Standard-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ko-KR"],
    name: "ko-KR-Standard-B",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ko-KR"],
    name: "ko-KR-Standard-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ko-KR"],
    name: "ko-KR-Standard-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ko-KR"],
    name: "ko-KR-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["vi-VN"],
    name: "vi-VN-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["vi-VN"],
    name: "vi-VN-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["vi-VN"],
    name: "vi-VN-Standard-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["vi-VN"],
    name: "vi-VN-Standard-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["id-ID"],
    name: "id-ID-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["id-ID"],
    name: "id-ID-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["id-ID"],
    name: "id-ID-Standard-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["id-ID"],
    name: "id-ID-Standard-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nl-NL"],
    name: "nl-NL-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nl-NL"],
    name: "nl-NL-Standard-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nl-NL"],
    name: "nl-NL-Standard-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nl-NL"],
    name: "nl-NL-Standard-E",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nl-NL"],
    name: "nl-NL-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fil-PH"],
    name: "fil-PH-Standard-B",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fil-PH"],
    name: "fil-PH-Standard-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fil-PH"],
    name: "fil-PH-Standard-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fil-PH"],
    name: "fil-PH-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["yue-HK"],
    name: "yue-HK-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["yue-HK"],
    name: "yue-HK-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["yue-HK"],
    name: "yue-HK-Standard-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["yue-HK"],
    name: "yue-HK-Standard-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["cs-CZ"],
    name: "cs-CZ-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["el-GR"],
    name: "el-GR-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pt-BR"],
    name: "pt-BR-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 22050
  },
  {
    languageCodes: ["af-ZA"],
    name: "af-ZA-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["bg-BG"],
    name: "bg-bg-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["hu-HU"],
    name: "hu-HU-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["lv-LV"],
    name: "lv-lv-Standard-A",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pl-PL"],
    name: "pl-PL-Standard-E",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 22050
  },
  {
    languageCodes: ["ro-RO"],
    name: "ro-RO-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["sk-SK"],
    name: "sk-SK-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["sr-RS"],
    name: "sr-rs-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["uk-UA"],
    name: "uk-UA-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pl-PL"],
    name: "pl-PL-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pl-PL"],
    name: "pl-PL-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pl-PL"],
    name: "pl-PL-Standard-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pl-PL"],
    name: "pl-PL-Standard-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["tr-TR"],
    name: "tr-TR-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["tr-TR"],
    name: "tr-TR-Standard-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["tr-TR"],
    name: "tr-TR-Standard-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["tr-TR"],
    name: "tr-TR-Standard-E",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["tr-TR"],
    name: "tr-TR-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["th-TH"],
    name: "th-TH-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 22050
  },
  {
    languageCodes: ["bn-IN"],
    name: "bn-IN-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["bn-IN"],
    name: "bn-IN-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-IN"],
    name: "en-IN-Standard-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-IN"],
    name: "en-IN-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-IN"],
    name: "en-IN-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-IN"],
    name: "en-IN-Standard-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["gu-IN"],
    name: "gu-IN-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["gu-IN"],
    name: "gu-IN-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["hi-IN"],
    name: "hi-IN-Standard-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["hi-IN"],
    name: "hi-IN-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["hi-IN"],
    name: "hi-IN-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["hi-IN"],
    name: "hi-IN-Standard-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["kn-IN"],
    name: "kn-IN-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["kn-IN"],
    name: "kn-IN-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ml-IN"],
    name: "ml-IN-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ml-IN"],
    name: "ml-IN-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ta-IN"],
    name: "ta-IN-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ta-IN"],
    name: "ta-IN-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["te-IN"],
    name: "te-IN-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["te-IN"],
    name: "te-IN-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["da-DK"],
    name: "da-DK-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 22050
  },
  {
    languageCodes: ["da-DK"],
    name: "da-DK-Standard-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["da-DK"],
    name: "da-DK-Standard-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["da-DK"],
    name: "da-DK-Standard-E",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fi-FI"],
    name: "fi-FI-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["is-IS"],
    name: "is-is-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["sv-SE"],
    name: "sv-SE-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 22050
  },
  {
    languageCodes: ["nb-NO"],
    name: "nb-NO-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nb-NO"],
    name: "nb-NO-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nb-NO"],
    name: "nb-NO-Standard-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nb-NO"],
    name: "nb-NO-Standard-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nb-NO"],
    name: "nb-no-Standard-E",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["nb-NO"],
    name: "nb-no-Standard-E",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pt-PT"],
    name: "pt-PT-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pt-PT"],
    name: "pt-PT-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pt-PT"],
    name: "pt-PT-Standard-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["pt-PT"],
    name: "pt-PT-Standard-D",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fr-FR"],
    name: "fr-FR-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fr-FR"],
    name: "fr-FR-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fr-FR"],
    name: "fr-FR-Standard-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fr-FR"],
    name: "fr-FR-Standard-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["de-DE"],
    name: "de-DE-Standard-E",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["de-DE"],
    name: "de-DE-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["de-DE"],
    name: "de-DE-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["de-DE"],
    name: "de-DE-Standard-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["de-DE"],
    name: "de-DE-Standard-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["de-DE"],
    name: "de-DE-Standard-F",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fr-CA"],
    name: "fr-CA-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fr-CA"],
    name: "fr-CA-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fr-CA"],
    name: "fr-CA-Standard-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["fr-CA"],
    name: "fr-CA-Standard-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["it-IT"],
    name: "it-IT-Standard-B",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["it-IT"],
    name: "it-IT-Standard-C",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["it-IT"],
    name: "it-IT-Standard-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-AU"],
    name: "en-AU-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-AU"],
    name: "en-AU-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-AU"],
    name: "en-AU-Standard-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-AU"],
    name: "en-AU-Standard-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-GB"],
    name: "en-GB-Standard-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-GB"],
    name: "en-GB-Standard-B",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-GB"],
    name: "en-GB-Standard-C",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-GB"],
    name: "en-GB-Standard-D",
    ssmlGender: "MALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["en-GB"],
    name: "en-GB-Standard-F",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  },
  {
    languageCodes: ["ro-RO"],
    name: "ro-RO-Wavenet-A",
    ssmlGender: "FEMALE",
    naturalSampleRateHertz: 24000
  }
];

const supportedVoices = languageCode => {
  if (languageCode === "en-US") return "en-US-Wavenet-F";
  const femaleVoiceChoices = VOICES.filter(
    voiceObject =>
      languageCode === voiceObject.languageCodes[0].split("-")[0] &&
      voiceObject.ssmlGender === "FEMALE"
  );
  if (!femaleVoiceChoices.length) return "en-US-Wavenet-F";
  let random = Math.round(Math.random() * femaleVoiceChoices.length);
  return femaleVoiceChoices[random]["name"];
};

export default supportedVoices;
