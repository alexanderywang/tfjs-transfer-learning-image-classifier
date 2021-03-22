## TensorFlow JS Transfer Learning Image Classifier

The Tensorflow.js tutorial uses script tag as the entry point for loading files. I'll install via npm and use Create React App and modularize where possible. I'll add Material UI with an eye towards developing a progressive web application.
I'll refer and refactor the code from the two-dimensional linear regression tutorial on Tensorflow JS found here:

https://codelabs.developers.google.com/codelabs/tensorflowjs-teachablemachine-codelab/index.html#0

- Tensorflow.js allows you to run machine learning models in the browser for analysis and training.

- **the codelab merged with React can be found in branch tfjs-image-classifier-with-react**

- next steps: create a user experience and solve a user problem

1. loading page for the model on initial load
   1A. make loadModel a retry function and setIsLoadingModel in here, return error if failed x times with 3 as default
   1B. loadModel and prediction needs a retry function to avoid looping endlessly
2. try other models for accuracy
3. deploy with CI/CD - heroku/travis CI?
4. add 2 way cameras for mobile use // going to need a different webcam element to be used on both mobile and client side for deployment
5. use google translate api and give the user language options, text, and pronounciation to learn

### Goal:

The goal of this solution is to build a ["teachable machine"](https://teachablemachine.withgoogle.com/). In this case, a custom image classifier to be trained in the browser

1. load and run a pre-trained model called MobileNet for image classification in the browser. make a prediction with new data
2. use "transfer learning", which customizes the MobileNet model for the application
3. make a prediction through the webcam

### Some additional Features on top of the tutorial

- React, React Hooks, functional components, pure functions, async/await, modern ES6 syntax
-
-
-

#### Extra:

- Create a progressive web application for mobile use
- ask for access to camera AND camera roll
- hook up google translate API and allow the user to translate the object into another language. be able to read and hear the translation as options
- deploy with CI/CD

## Tech Stack:

- [Node.js](https://nodejs.org/en/): JavaScript runtime built on Chrome's V8 JavaScript engi
- [React](https://facebook.github.io/react/): A JavaScript library for building user interfaces
- [Tensorflow.js](https://www.tensorflow.org/js/): A JavaScript library for training and deploying Machine Learning models in the browser
- [Axios](https://www.npmjs.com/package/axios): Promise based HTTP client for browser and Node.js.
- [Material-UI](https://material-ui.com/): Material-UI is a simple and customizable component library to build faster, beautiful, and more accessible React applications.
- [React Webcam](https://www.npmjs.com/package/react-webcam) in order to get clientside webcam functionality, we need a plugin. Since we're only looking for static images and not a full communications app, I'm using React Webcam.

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

3. Run `npm run start` to start the app on http://localhost:3000/

### Some key learning points

- npm install @tensorflow-models/mobilenet needed :)

- some debugging issues with react and tensorflow.js:

  - crossorigin='anonymous' needs to be added to the image tag for predictions to work on a static image

- index.html needed these scripts to run

```
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl"></script>
```

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

- start script in package.json goes from
  "start": "react-scripts start", --> "start": "serve -s build",
