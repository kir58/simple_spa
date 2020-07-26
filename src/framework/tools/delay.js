export default (ms = 1000) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, ms);
});
