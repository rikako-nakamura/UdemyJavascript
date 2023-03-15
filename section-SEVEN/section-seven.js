let generatePerson = (name) => {
  let age = 0;
  return {
    getName: () => name,
    getAge: () => age,
    incrementAge: () => {
      age += 1;
      return age;
    },
  };
};

const rikako = generatePerson('rikakoko');
console.log(rikako.getName());

// IIFE(即時実行関数式)
const counter = (() => {
  let count = 0;
  return () => {
    count += 1;
    //debugger;
    return count;
  };
})();
counter();

// 再帰関数式
// 3! = 3 * 2 * 1
let factorial = function fact(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);

  // return n === 0 ? 1 : n * factorial(n - 1);
};
console.log(factorial(3));
