/******
 * Retry design implemented from https://solutional.ee/blog/2020-11-19-Proper-Retry-in-JavaScript.html
 */

const delay = (fn, ms) =>
  new Promise(resolve => setTimeout(() => resolve(fn()), ms));

const retry = async (fn, maxAttempts = 3, timeDelay = 2) => {
  const execute = async attempt => {
    try {
      return await fn();
    } catch (err) {
      if (attempt <= maxAttempts) {
        console.error(`Retrying after ${timeDelay} seconds due to:`, err);
        return delay(() => execute(attempt + 1), timeDelay * 1000);
      } else {
        throw err;
      }
    }
  };
  return execute(1);
};

export default retry;
