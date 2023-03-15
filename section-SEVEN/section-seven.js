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
