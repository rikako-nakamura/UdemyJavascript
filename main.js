//変数
//countに0を代入する
//
let count;
//undefined
console.log(count);
count = 30;
console.log(count);

//定数(1箇所しか変えなくていい)
//できる限りconstを使う
//constは再代入できない！
//constは初期値を必ず定義する
const daysInWeek = 7;

//名前のルール
//$ _ は入れることができる
//数字は先頭に来てはいけない
//既に予約されたlet,constなど使えない
//CamelCase(一番いい方法)
//snake_case

//算術演算子
let additionResult = 2 + 5;
console.log(additionResult);

//省略記法を使う
let result = 5;
//同じ答え
result = result + 10;
result += 10;

//ややこしくなる
result++;
++result;

//型: type
//数値型
//Integer
let number = 10;
number = -4;

//string
const userName = 'Rikako';
let string = 'Hello';
string = 'Hello' + userName;
string = `Hello ${userName}`;
console.log(string);

//特殊な文字はバックスラッシュを使う
//バッククオートを使うと改行できる・変数が扱える
string = `Hello
Rikako`;
console.log(string);

//動的型付け
//状況によって変化する

//静的
//一定の値

//どうやって型変換ができているのか？
//明示的に型変換する方法
const userInput = '10.9';
//20.9
calcResult = Number(userInput) + 10;
console.log(calcResult);

//20
calcResult2 = parseInt(userInput) + 10;
console.log(calcResult2);

//20.9
calcResult3 = parseFloat(userInput) + 10;
console.log(calcResult3);

//20.9
calcResult4 = +userInput + 10;
console.log(calcResult4);

//文字列にするには自動に変換される

//真偽値
let boolean = true;
boolean = false;

//配列を使って値を順序つけてまとめる方法
let array = ['apple', 'banana', 'grape'];
array.push('peach');
console.log(array);

//object
//キーとバリュー
//property
//「,」は最後につけた方がいい
//追加する際にいい
const coffee = {
  name: 'chocolate Mocha',
  size: 350,
  isHot: true,
  toppings: ['Cinnamon', 'Caramel'],
};

console.log(coffee.size);
coffee.isHot = false;

//nulllとundefined
//予定通り何もない
let userInfo = null;

//undefinedは予期せぬ、エラー
