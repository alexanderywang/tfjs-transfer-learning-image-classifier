## TensorFlow JS Transfer Learning Image Classifier

The Tensorflow.js tutorial uses script tag as the entry point for loading files. I'll install via npm and use Create React App and attempt to modularize where possible.
I'll refer and refactor the code from the two-dimensional linear regression tutorial on Tensorflow JS found here:

https://codelabs.developers.google.com/codelabs/tensorflowjs-teachablemachine-codelab/index.html#0

- Tensorflow.js allows you to run machine learning models in the browser for analysis and training.
- On the mobile device, you can have access to sensor data from cameras, microphone, accelerometer, etc. while maintaining user privacy. All the data used stays on the client side. Added user privacy is a big plus for TFJS.

- TFJS uses WebGL to process and train the models and GPU acceleration for computation. The syntax for the APIs is tf.methodName() , a syntax familiar to JS users. Some utilize callback functions, some are asynchronous, some are synchronous. WebGL has no garbage collection. I've seen tf.tidy() used a lot for clean up and will try to utilize it or tf.dispose()

### Goal:

The goal of this solution is to build a ["teachable machine"](https://teachablemachine.withgoogle.com/). In this case, a custom image classifier to be trained in the browser

1. load and run a pre-trained model called MobileNet for image classification in the browser. make a prediction with new data
2. use "transfer learning", which customizes the MobileNet model for the application
3. make a prediciton through the webcam

### Some additional Features on top of the tutorial

- React, React Hooks, functional components, pure functions, async/await, modern ES6 syntax
-
-
-

#### Extra:

- Create a progressive web application for mobile use

## Tech Stack:

- [Node.js](https://nodejs.org/en/)
- [React](https://facebook.github.io/react/): A JavaScript library for building user interfaces
- [Tensorflow.js](https://www.tensorflow.org/js/): A JavaScript library for training and deploying Machine Learning models in the browser
- [@tensorflow/tfjs-vis](https://www.npmjs.com/package/@tensorflow/tfjs-vis)
- [Axios](https://www.npmjs.com/package/axios)

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

#### Takeaways

- Data remains on device and classification is performed locally. Nothing is uploaded to the server. Inferences are done locally. User data remains private.

**Javascript in Machine Learning is relatively new and it's important that users can use your models and ideas interactively in the browser without having to install anything**

**CLIENT SIDE BENEFITS THAT ARE HARDER TO ACHIEVE SERVER SIDE:**

- Privacy is ensured
- Lower latency
- Lower cost
- Interactivity
- Reach and Scale

- a good introduction to deep learning is through linear regression

* how to decide the number of layer and nodes of memory intensive layers like LSTM? trial and error, run experiments, keras tuning can search through layers for optimizing
