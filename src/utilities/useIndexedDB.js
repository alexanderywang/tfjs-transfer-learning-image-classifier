import { openDB, deleteDB } from "idb";
import * as tf from "@tensorflow/tfjs";
import * as knnClassifier from "@tensorflow-models/knn-classifier";

const INDEXEDDB_STORE = "model_store";
const INDEXEDDB_DB = "tensorflowjs";

const useIndexedDB = () => {
  const openDatabase = async () => {
    openDB(INDEXEDDB_DB, 1, {
      upgrade(db) {
        db.createObjectStore(INDEXEDDB_STORE);
      }
    });
  };

  const checkIDBforSavedClassifier = async INDEXEDDB_MODEL_KEY => {
    // init
    await openDatabase();
    // open db
    const tfjsDB = await openDB(INDEXEDDB_DB, 1);
    // tfjsDB.getAllKeys(INDEXEDDB_STORE).then(console.log);
    const classifierString = await tfjsDB.get(
      INDEXEDDB_STORE,
      INDEXEDDB_MODEL_KEY
    );
    if (!classifierString) return null;

    // Load it back into a fresh classifier:
    const classifier = knnClassifier.create();
    classifier.setClassifierDataset(
      Object.fromEntries(
        JSON.parse(classifierString).map(([label, data, shape]) => [
          label,
          tf.tensor(data, shape)
        ])
      )
    );
    return classifier;
  };

  const saveModel = async (INDEXEDDB_MODEL_KEY, model) => {
    // Save it to a string:
    let classifierString = JSON.stringify(
      Object.entries(model.getClassifierDataset()).map(([label, data]) => [
        label,
        Array.from(data.dataSync()),
        data.shape
      ])
    );

    const tfjsDB = await openDB(INDEXEDDB_DB, 1);
    tfjsDB.add(
      `${INDEXEDDB_STORE}`,
      classifierString,
      `${INDEXEDDB_MODEL_KEY}`
    );
  };

  const updateModel = async (INDEXEDDB_MODEL_KEY, model) => {
    let classifierString = JSON.stringify(
      Object.entries(model.getClassifierDataset()).map(([label, data]) => [
        label,
        Array.from(data.dataSync()),
        data.shape
      ])
    );

    const tfjsDB = await openDB(INDEXEDDB_DB, 1);
    tfjsDB.put(
      `${INDEXEDDB_STORE}`,
      classifierString,
      `${INDEXEDDB_MODEL_KEY}`
    );
  };

  const deleteModel = async () => {
    await deleteDB(INDEXEDDB_DB);
    await openDatabase();
  };
  return {
    checkIDBforSavedClassifier,
    saveModel,
    updateModel,
    deleteModel
  };
};

export default useIndexedDB;
