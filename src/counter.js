// const counter = (function () {
//   let counter = 0;
//   return {
//     incrementCounter: function () {
//       return ++counter;
//     },
//     resetCounter: function () {
//       console.log(`Counter prior to reset: ${counter}`);
//       counter = 0;
//     },
//     getCounter: function () {
//       return counter;
//     },
//   };
// })();

const counter = (function () {
  let counter = 0;
  function incrementCounter() {
    return ++counter;
  }
  function resetCounter() {
    console.log(`Counter prior to reset: ${counter}`);
    counter = 0;
  }
  function getCounter() {
    return counter;
  }
  return {
    increment: incrementCounter,
    reset: resetCounter,
    get: getCounter,
  };
})();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(`Counter: ${counter.get()}`);
counter.reset();
console.log(`Counter: ${counter.get()}`);
