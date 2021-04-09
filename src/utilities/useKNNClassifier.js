import * as tf from "@tensorflow/tfjs";

const useKNNClassifier = (classifier, model) => {

  const addExample = async (label, image) => {
    // const activation0 = model.infer(image, "conv_preds"); // looks like 2d? tf.browser looks better?
    // console.log("tensor0:", activation0);
    const activation = tf.browser.fromPixels(image);
    classifier.addExample(activation, label);
    console.log(classifier);
    console.log("getClassifierDataset:", classifier.getClassifierDataset());

    // await model.save("indexeddb://my-model");
    // saveClassifier();
  };

  return {
    addExample
  };
};

export default useKNNClassifier;