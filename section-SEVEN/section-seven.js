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
