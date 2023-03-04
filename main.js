// 変数
// countに0を代入する

let count;
// undefined
console.log(count);
count = 30;
console.log(count);

// 定数(1箇所しか変えなくていい)
// できる限りconstを使う
// constは再代入できない！
// constは初期値を必ず定義する
const daysInWeek = 7;

// 名前のルール
// $ _ は入れることができる
// 数字は先頭に来てはいけない
// 既に予約されたlet,constなど使えない
// CamelCase(一番いい方法)
// snake_case

// 算術演算子
let additionResult = 2 + 5;
console.log(additionResult);

// 省略記法を使う
let result = 5;
// 同じ答え
result = result + 10;
result += 10;

// ややこしくなる
result++;
++result;

// 型: type
// 数値型
// Integer
let number = 10;
number = -4;

// string
const userName = 'Rikako';
let string = 'Hello';
string = 'Hello' + userName;
string = `Hello ${userName}`;
console.log(string);

// 特殊な文字はバックスラッシュを使う
// バッククオートを使うと改行できる・変数が扱える
string = `Hello
Rikako`;
console.log(string);

// 動的型付け
// 状況によって変化する

// 静的
// 一定の値

// どうやって型変換ができているのか？
// 明示的に型変換する方法
const userInput = '10.9';
// 20.9
calcResult = Number(userInput) + 10;
console.log(calcResult);

// 20
calcResult2 = parseInt(userInput) + 10;
console.log(calcResult2);

// 20.9
calcResult3 = parseFloat(userInput) + 10;
console.log(calcResult3);

// 20.9
calcResult4 = +userInput + 10;
console.log(calcResult4);

// 文字列にするには自動に変換される

// 真偽値
let boolean = true;
boolean = false;

// 配列を使って値を順序つけてまとめる方法
let array = ['apple', 'banana', 'grape'];
array.push('peach');
console.log(array);

// object
// キーとバリュー
// property
// 「,」は最後につけた方がいい
// 追加する際にいい
const coffee = {
  name: 'chocolate Mocha',
  size: 350,
  isHot: true,
  toppings: ['Cinnamon', 'Caramel'],
};

console.log(coffee.size);
coffee.isHot = false;

// nulllとundefined
// 予定通り何もない
let userInfo = null;

// undefinedは予期せぬ、エラー

//typeof演算子
typeof 3;
// "number"と返す

typeof true;
// booleanと返す
// 配列の型はobject
// undefined型がある
// nullはobject型

// 関数について
// 何度も呼び出すことができるコードのかたまり
// 関数を定義する
function add() {
  console.log(1 + 1);
}
add();

// パラメータと引数
// 受け取りたい
// パラメータ(num1, num2)
function add(num1, num2) {
  return num1 + num2;
  // retun文の下は無視される
}
// わたす値は引数
// 戻ってきた値は戻り値、返り値という
const returnedValue = add(2, 3);
console.log(returnedValue);

// 関数の位置は先頭に持っていかれる
// 変数を参照できる範囲であるスコープ
// ローカルスコープ:関数の中で定義されたものは外では使えない
// グローバルスコープ:外で定義されたものは関数内で使える
// ローカル変数が優先される、シャドーウィング(グローバル変数とローカル変数が同じ場合)
