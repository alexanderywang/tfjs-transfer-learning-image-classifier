// import * as tf from "@tensorflow/tfjs";
import useIndexedDB from "./useIndexedDB";

const useKNNClassifier = (classifier, model) => {
  const { updateModel } = useIndexedDB();

  const addExample = async (label, image) => {
    const activation = model.infer(image, "conv_preds"); // looks like 2d? tf.browser looks better?
    // console.log("tensor0:", activation0);
    // const activation = tf.browser.fromPixels(image);
    classifier.addExample(activation, label);
    // console.log(classifier);
    // console.log("getClassifierDataset:", classifier.getClassifierDataset());

    updateModel("classifier_model", classifier);
  };

  return {
    addExample
  };
};

export default useKNNClassifier;
