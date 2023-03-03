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
