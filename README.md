## TensorFlow JS Machine Learning Image Classifier

The Tensorflow.js tutorial uses script tag as the entry point for loading files. I'll install via npm and use Create React App and modularize where possible. I'll add Material UI with an eye towards developing a progressive web application.
I'll refer and refactor the code from the machine learning image classifier tutorial on Tensorflow JS found here:

https://codelabs.developers.google.com/codelabs/tensorflowjs-teachablemachine-codelab/index.html#0

- Tensorflow.js allows you to run machine learning models in the browser for analysis and training.

You can find a working version of this app at https://tfjs-what-is-this.herokuapp.com

- **the codelab merged with React can be found in branch tfjs-image-classifier-with-react**

### Goal:

The goal of this solution is to build a ["teachable machine"](https://teachablemachine.withgoogle.com/). In this case, a custom image classifier to be trained in the browser

1. load and run a pre-trained model called MobileNet for image classification in the browser. make a prediction with new data
2. use "transfer learning", which customizes the MobileNet model for the application. We started with a pretrained model in MobileNet.
3. make a prediction through the webcam

some next improvements possible:

1. try other models for accuracy / give choices for fast/slow loading models as well as for object detection rather than strict image classification. Google Cloud Vision API looks quite accurate https://cloud.google.com/vision/#industry-leading-accuracy-for-image-understanding
2. Try to involve transfer learning instead of simply loading a pretrained model, allowing the user to train their own model based on their input
3. offline capability as a [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps), read about [Service Workers](https://create-react-app.dev/docs/making-a-progressive-web-app/)

### Some bonus Features on top of the tutorial

- React, React Hooks, functional components, pure functions, async/await, modern ES6 syntax
- retry design pattern, debounce function, memoized API call
- deployed with CI/CD at https://tfjs-what-is-this.herokuapp.com with travis-ci. works for mobile and mobile webcams
- Google Translate API hooked up with over 100 languages to translate the prediction to.
- Google Text-to-speech offers language supported pronounciation. Wavenet sounds more human than ever before
- cached translate API calls in sessionStorage

## Tech Stack:

- [Node.js](https://nodejs.org/en/): JavaScript runtime built on Chrome's V8 JavaScript engi
- [React](https://facebook.github.io/react/): A JavaScript library for building user interfaces
- [Tensorflow.js](https://www.tensorflow.org/js/): A JavaScript library for training and deploying Machine Learning models in the browser
- [Axios](https://www.npmjs.com/package/axios): Promise based HTTP client for browser and Node.js.
- [Material-UI](https://material-ui.com/): Material-UI is a simple and customizable component library to build faster, beautiful, and more accessible React applications.
- [React Webcam](https://www.npmjs.com/package/react-webcam) in order to get clientside webcam functionality, we need a plugin. Since we're only looking for static images and not a full communications app, I'm using React Webcam.
- [uuid](https://www.npmjs.com/package/uuid) random unique id generator for component mapping

- [Google Cloud Translate, Google Text-To-Speech](https://console.cloud.google.com/apis/library)

## Local Setup

1. Clone the repo locally. In a terminal, run

```
git clone https://github.com/alexanderywang/tfjs-transfer-learning-image-classifier
```

and navigate to the project folder

```
cd tfjs-transfer-learning-image-classifier
```

2. Install app dependencies. Run

```
npm install
```

3. In order to use Google Translate and Google Text-To-Speech APIs, you'll have to register with Google and retrieve a key. It's fairly straightforward to setup an account https://developers.google.com/maps/documentation/javascript/cloud-setup. You have to sign up for billing but shouldn't be charged anything without your permission. Once you have an API key, set up a .env file at the root of your directory (It's at the same level as package.json). You MUST prepend REACT*APP* to the key. Example:

message me with any questions and I'll try to respond in a timely matter

```
REACT_APP_GOOGLE_API_KEY=123456
```

more in key learning points below...

4. Run `npm run start-dev` to start the app on http://localhost:3000/
   for production/heroku deployment: "start": "serve -s build",

### Some key learning points

- npm install @tensorflow-models/mobilenet needed :)
  otherwise we need these in index.html

```
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl"></script>
```

- some debugging issues with react and tensorflow.js:

  - crossorigin='anonymous' needs to be added to the image tag for predictions to work on a static image

- index.html needed these scripts to run // fixed this by using tf.ready() prior to loading model. tf.ready() returns a promise that resolves when the currently selected backend (or the highest priority one) has initialized. Await this promise when you are using a backend that has async initialization.

- Unsure what is best practices here, but I had a prediction table displayed with 5 rows. Each row has a button that opens a TranslationModal. The modal has a select dropdown of 100 languages. If a language is selected, a useEffect is triggered to make an api call to Google Translate.
  When the table is initially rendered, the useEffect in the modal is triggered 5 times. Is there a way to prevent this?

first solution: I was rendering the modal in the table rows with the button in the modal to open/close. The useEffect ran as soon as the table opened up. that makes sense. So I moved the button to the table rows and only opened the modal when the button clicked. so the useEffect still runs once before a language is selected from the dropdown and once when the language is selected. Not perfect, but better!

Better solution: useCallback to memoize the function. see in useGoogleTranslateAPI.js.

- branch named "fun" contains a form for translating phrases to supported languages and the ability to hear it spoken.

- In ReactJS environment variables are fetched from .env files. If you set the variable in .env file and your variables returned undefined check the below items.

Assumption: You have used Create React App (CRA) to bootstrap your application

1. The .env file should be in the root for you application folder. That is one level above your src folder, the same place where you have your package.json
2. The variable should be prefixed with REACT*APP*
3. You need to restart the server to reflect the changes in your code.
4. You should access the variable in your code like this
   process.env.REACT_APP_SOME_VARIABLE
5. No need to wrap your variable value in single or double quotes.
6. Do not put semicolon ; or comma , at the end of each line.

helpful link:
[https://betterprogramming.pub/how-to-hide-your-api-keys-c2b952bc07e6](https://betterprogramming.pub/how-to-hide-your-api-keys-c2b952bc07e6)

- implementing retry design for loading the model.
- utilizing a debounce for an api call
- creating several custom hooks to really helped separate logic components from view components
- very helpful article re: useEffect linting errors/warnings https://www.benmvp.com/blog/helper-functions-react-useeffect-hook/

- Since we're emphasizing user privacy with keeping everything client/browser-side, I thought I'd try session storage in place of localStorage. Every time the user closes the browser, the cache will empty again, but refreshing the browser will not. This will save API calls when taking similar pictures but not keep anything in cache once the app is closed. [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) is another possibilty, as is localStorage for some use cases.

#### Takeaways

- Data remains on device and classification is performed locally. Nothing is uploaded to the server. Inferences are done locally. User data remains private.

**Javascript in Machine Learning is relatively new and it's important that users can use your models and ideas interactively in the browser without having to install anything**

**CLIENT SIDE BENEFITS THAT ARE HARDER TO ACHIEVE SERVER SIDE:**

- Privacy is ensured
- Lower latency
- Lower cost
- Interactivity
- Reach and Scale

* how to decide the number of layer and nodes of memory intensive layers like LSTM? trial and error, run experiments, keras tuning can search through layers for optimizing

#### Bonus lessons

###### taking a photo from a webcam:

- used the navigator.mediaDevices interface object
- transfered data from getUserMedia method to an HTML5 video element
- take a picture by capturing the current video frame and drawing it to a canvas element
- save picture using anchor element's download attribute

it worked! MobileNet's model seems semi-accurate abou 50-75% of the time, depending on the picture quality, lighting, and item.

<img src="/public/coffeemug.png" alt="coffee" width="200"/>

##### Heroku apps run server-side. they're web apps. users interact with them through browsers.

- from stack overflow

if you wanted to access a user's webcam, that would have to happen through the browser. that requires WebRTC or similar APIs. that means serving a web page that contains client-side javascript (or other) code which accesses the user's webcam through the browser, and then sends a video feed (or single pictures) of that back to the server.

you can only directly access server resources inside the web app, not client-side resources.

if you wanted to do eye tracking browser-side, there's OpenCV.js which runs completely in the browser. I don't know if the required procedures for eye tracking have been ported to OpenCV.js but it's worth a look. you could do the analysis client-side and just send back heatmaps or lists of coordinates.

- also heroku needs png files in lowercase

##### Google text-to-voice functionality

<img src="/public/translations.png" alt="translations" width="200"/>

Audio data is binary data. You can read the binary data directly from a gRPC response; however, JSON is used when responding to a REST request. Because JSON is a text format that does not directly support binary data, Text-to-Speech returns a response string encoded in Base64. You must convert the base64-encoded text data from the response to binary before you can play it on a device.

JSON responses from the Text-to-Speech include base64-encoded audio content in the audioContent field. For example:

```
{
  "audioContent": "//NExAARqoIIAAhEuWAAAGNmBGMY4EBcxvABAXBPmPIAF//yAuh9Tn5CEap3/o..."
}
```

in the response body:

```
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
```

**so it returns base64** and we need to convert to wav file to use the
https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio

after some stackoverflow and googling, I found:

```
var snd = new Audio("data:audio/wav;base64," + base64string);
snd.play();
```

the request body also offers a lot of customizable options and Google supports over 100 voices...

I wanted to stall spamming the voice button and used a timeout as a work around, but that created memory leaks in the useEffect for translation. So I used sessionStorage to memoize base74 encoding for repeat button clicks. IndexedDB can store audio, but I think this solution is adequate for now with short audio clips. Session Storage can store about 4 million characters and gets cleared on browser/tab exit. As of now, we are using session storage as a cache for both translations and for base64 encoded strings.
