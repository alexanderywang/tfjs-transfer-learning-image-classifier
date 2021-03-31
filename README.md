## TensorFlow JS Machine Learning Image Classifier

The Tensorflow.js tutorial uses script tag as the entry point for loading files. I'll install via npm and use Create React App and modularize where possible. I'll add Material UI with an eye towards developing a progressive web application.
I'll refer and refactor the code from the two-dimensional linear regression tutorial on Tensorflow JS found here:

https://codelabs.developers.google.com/codelabs/tensorflowjs-teachablemachine-codelab/index.html#0

- Tensorflow.js allows you to run machine learning models in the browser for analysis and training.

You can find a working version of this app at https://tfjs-what-is-this.herokuapp.com

- **the codelab merged with React can be found in branch tfjs-image-classifier-with-react**

- next steps: create a user experience and solve a user problem

1. try other models for accuracy / give choices for fast/slow loading models as well as for object detection rather than strict image classification. Google Cloud Vision API looks quite accurate https://cloud.google.com/vision/#industry-leading-accuracy-for-image-understanding
2. use google translate api and give the user language options, text, and pronounciation to learn
3. Try to use transfer learning instead of simply loading a pretrained model, allowing the user to train their own model based on their input

### Goal:

The goal of this solution is to build a ["teachable machine"](https://teachablemachine.withgoogle.com/). In this case, a custom image classifier to be trained in the browser

1. load and run a pre-trained model called MobileNet for image classification in the browser. make a prediction with new data
2. use "transfer learning", which customizes the MobileNet model for the application. We started with a pretrained model in MobileNet.
3. make a prediction through the webcam

### Some additional Features on top of the tutorial

- React, React Hooks, functional components, pure functions, async/await, modern ES6 syntax
- retry design pattern
- deployed at https://tfjs-what-is-this.herokuapp.com with travis-ci. works for mobile
-

#### Extra:

- Create a progressive web application for mobile use
- ask for access to camera AND camera roll. camera roll access maybe https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications, https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
- hook up google translate API and allow the user to translate the object into another language. be able to read and hear the translation as options
- deploy with CI/CD
- offline capability as a [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps), read about [Service Workers](https://create-react-app.dev/docs/making-a-progressive-web-app/)

## Tech Stack:

- [Node.js](https://nodejs.org/en/): JavaScript runtime built on Chrome's V8 JavaScript engi
- [React](https://facebook.github.io/react/): A JavaScript library for building user interfaces
- [Tensorflow.js](https://www.tensorflow.org/js/): A JavaScript library for training and deploying Machine Learning models in the browser
- [Axios](https://www.npmjs.com/package/axios): Promise based HTTP client for browser and Node.js.
- [Material-UI](https://material-ui.com/): Material-UI is a simple and customizable component library to build faster, beautiful, and more accessible React applications.
- [React Webcam](https://www.npmjs.com/package/react-webcam) in order to get clientside webcam functionality, we need a plugin. Since we're only looking for static images and not a full communications app, I'm using React Webcam.
- [uuid](https://www.npmjs.com/package/uuid) random unique id generator for component mapping

## Local Setup

1. Clone the repo locally. In a terminal, run

```
git clone https://github.com/alexanderywang/tfjs-linear-regression-predictions
```

and navigate to the project folder

```
cd tfjs-linear-regression-predictions
```

2. Install app dependencies. Run

```
npm install
```

```
in package.json change the script
for local testing: "start": "react-scripts start",
for heroku deployment: "start": "serve -s build",
```

3. In order to use Google Translate API, you'll have to register with Google and retrieve a key....

4. Run `npm run start` to start the app on http://localhost:3000/

### Some key learning points

- npm install @tensorflow-models/mobilenet needed :)

- some debugging issues with react and tensorflow.js:

  - crossorigin='anonymous' needs to be added to the image tag for predictions to work on a static image

- index.html needed these scripts to run // fixed this by using tf.ready() prior to loading model. tf.ready() returns a promise that resolves when the currently selected backend (or the highest priority one) has initialized. Await this promise when you are using a backend that has async initialization.

```
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl"></script>
```
- In ReactJS environment variables are fetched from .env files. If you set the variable in .env file and your variables returned undefined check the below items.

Assumption: You have used Create React App (CRA) to bootstrap your application

1. The .env file should be in the root for you application folder. That is one level above your src folder, the same place where you have your package.json
2. The variable should be prefixed with REACT_APP_
3. You need to restart the server to reflect the changes in your code.
4. You should access the variable in your code like this
process.env.REACT_APP_SOME_VARIABLE
5. No need to wrap your variable value in single or double quotes.
6. Do not put semicolon ; or comma , at the end of each line.

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
![coffee mug](/public/coffee_mug.png)

##### Heroku apps run server-side. they're web apps. users interact with them through browsers.

- from stack overflow

if you wanted to access a user's webcam, that would have to happen through the browser. that requires WebRTC or similar APIs. that means serving a web page that contains client-side javascript (or other) code which accesses the user's webcam through the browser, and then sends a video feed (or single pictures) of that back to the server.

you can only directly access server resources inside the web app, not client-side resources.

if you wanted to do eye tracking browser-side, there's OpenCV.js which runs completely in the browser. I don't know if the required procedures for eye tracking have been ported to OpenCV.js but it's worth a look. you could do the analysis client-side and just send back heatmaps or lists of coordinates.

- also heroku needs png files in lowercase
