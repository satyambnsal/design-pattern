// const basket = (function () {
//   const basket = [];

//   return {
//     addItem: function (item) {
//       basket.push(item);
//     },
//     getCount: function () {
//       return basket.length;
//     },
//     getTotalPrice: function () {
//       const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);
//       return totalPrice;
//     },
//   };
// })();

const basketSingleton = (function () {
  function init() {
    const basket = [];
    return {
      addItem: function (item) {
        basket.push(item);
      },
      getCount: function () {
        return basket.length;
      },
      getTotalPrice: function () {
        const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);
        return totalPrice;
      },
    };
  }
  let instance;
  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

const b1 = basketSingleton.getInstance();
const b2 = basketSingleton.getInstance();

b1.addItem({ name: '🥚', price: 20 });
b1.addItem({ name: '🥛', price: 40 });
b1.addItem({ name: '🧥', price: 370 });

console.log(`Total price: B1: ${b1.getTotalPrice()}`);
console.log(`Total price: B2: ${b2.getTotalPrice()}`);
