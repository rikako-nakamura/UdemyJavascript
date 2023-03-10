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

// personオブジェクト
const person = {
  // プロパティ: メソッド
  name: 'rikarika',
  sayHi: function () {
    // sayHiメソッド
    return 'hi';
  },
};
console.log(person.sayHi());

sayHi = function (name) {
  return `Hi ${name}!`;
};
// アロー関数
sayHi = (name) => `Hi ${name}!`;

// 何も渡さなかった時Userにする
// デフォルトパラメータ
sayHi = (name = 'User', message = `${name}`) => `Hi ${name}! ${message}`;
console.log(sayHi());

// レストパラメータで無限の引数
let sum = (...nums) => {
  console.log(nums);
  let total = 0;
  for (num of nums) {
    total += num;
  }
  return total;
};

console.log(sum(1, 3, 5));

// 関数の引数には関数を入れることができる
// その関数のことをコールバック関数という
let subtract = (a, b, callback) => {
  let result = a - b;
  callback(result);
};
subtract(10, 3, (result) => {
  console.log(result);
});

// デバッグの時に名前つき関数式の方が非常に良い表示の方法をしてくれる
subtract(10, 3, function showResult(result) {
  // console.log(chocolate);
  console.log(result);
});

// typeofを使って関数かオブジェクトを調べられる
