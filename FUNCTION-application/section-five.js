function add(a, b) {
  return a + b;
}

console.log(add);
console.dir(add);
const newAdd = add;
console.log(newAdd(3, 4));
