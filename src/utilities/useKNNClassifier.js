import * as tf from "@tensorflow/tfjs";

const useKNNClassifier = (classifier, model) => {
  const saveClassifier = async () => {
    let dataSets = await classifier.getClassifierDataset();
    // let dataSetObject = {};
    // Object.keys(dataSets).forEach(async key => {
    //   let data = await dataSets[key].dataSync();
    //   dataSetObject[key] = Array.from(data);
    // });
    let jsonModel = JSON.stringify(dataSets);
    localStorage.setItem("what-is-this", jsonModel);
    console.log("saved", localStorage.getItem("what-is-this"));
  };

  const addExample = async (label, image) => {
    // const activation0 = model.infer(image, "conv_preds"); // looks like 2d? tf.browser looks better?
    // console.log("tensor0:", activation0);
    const activation = tf.browser.fromPixels(image);
    classifier.addExample(activation, label);
    console.log(classifier);
    console.log("getClassifierDataset:", classifier.getClassifierDataset());
    // await tf.model.save("localStorage://what-is-this");
    // await model.save("indexeddb://my-model");
    // saveClassifier();
  };

  return {
    addExample
  };
};

export default useKNNClassifier;
