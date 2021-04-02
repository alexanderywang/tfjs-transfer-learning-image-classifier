6. look for text-to-voice functionality

- google wavenet text-to-speech looks good
- create button for mock test sample
- get api and hook up
- create buttons for translation modal

7. abstract, refactor

- button abstraction possible?

8. some photo tips might be helpful

9. fix up the readme



Audio data is binary data. You can read the binary data directly from a gRPC response; however, JSON is used when responding to a REST request. Because JSON is a text format that does not directly support binary data, Text-to-Speech returns a response string encoded in Base64. You must convert the base64-encoded text data from the response to binary before you can play it on a device.

JSON responses from the Text-to-Speech include base64-encoded audio content in the audioContent field. For example:


{
  "audioContent": "//NExAARqoIIAAhEuWAAAGNmBGMY4EBcxvABAXBPmPIAF//yAuh9Tn5CEap3/o..."
}

in

/*
response body:
{
  "audioContent": string,
  "timepoints": [
    {
      object (Timepoint)
    }
  ],
  "audioConfig": {
    object (AudioConfig)
  }
}
*/

** so it returns base64 and we need to convert to wav file to use the
https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio

after some stackoverflow and googling, i found:

var snd = new Audio("data:audio/wav;base64," + base64string);
snd.play();

text:
            "Google Cloud Text-to-Speech enables developers to synthesize natural-sounding speech with 100+ voices, available in multiple languages and variants. It applies DeepMind’s groundbreaking research in WaveNet and Google’s powerful neural networks to deliver the highest fidelity possible. As an easy-to-use API, you can create lifelike interactions with your users, across many applications and devices."
