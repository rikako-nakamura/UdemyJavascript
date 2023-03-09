// 関数宣言文
function add(a, b) {
  return a + b;
}

console.log(add);
console.dir(add);
const newAdd = add;
console.log(newAdd(3, 4));

// 関数式
// オブジェクトのみを作ってる
let sayHi = function () {};
console.log(sayHi);

// どっちがいいのか？