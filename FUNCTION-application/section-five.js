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
// 巻き上げられるか
// 関数宣言文はどこで定義しても巻き上げられる
// メリットどこでも使える & わかりやすい
// デメリット上書きしてしまう

// 関数式は下で書く必要がある
// 必ず上見たら式がある

// 統一する
