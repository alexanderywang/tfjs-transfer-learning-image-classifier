/***
 * my interpretation of https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf
 *
 * useful for preventing button spamming
 */

const throttle = (func, limit) => {
  let lastFunc, lastRan;

  return function invokeFunc(...args) {
    lastFunc = clearTimeout(lastFunc);

    if (!lastRan || Date.now() - lastRan >= limit) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      lastFunc = setTimeout(
        invokeFunc.bind(null, args),
        limit - (Date.now() - lastRan)
      );
    }
  };
};

export default throttle;
