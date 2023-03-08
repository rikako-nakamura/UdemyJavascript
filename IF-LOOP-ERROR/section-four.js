let maybeOk = true;
if (true) {
  console.log('OK!');
} else if (maybeOk) {
  console.log('maybe ok');
} else {
  console.log('NO!');
}

//
ok = 1 === 1;
ok = 'hello' === 'hello';
ok = 1 !== 2;
ok = 1 == 1;

//trueになる(ゆるい)
ok = 1 == '1';
// falseになる(原則)
ok = 1 === '1';

const coffee1 = { name: 'Cafe Latte' };
const coffee2 = { name: 'Cafe Latte' };

// false
// 作り直してるから
ok = coffee1 === coffee2;

// true
ok = coffee1.name === coffee2.name;

// 比較演算子
ok = 1 > 0;

//文字列もある
// true
ok = 'a' < 'b';

ok = 'hello';
if (ok) {
  console.log('OK!');
} else if (maybeOk) {
  console.log('maybe ok');
} else {
  console.log('NO!');
}

// Truthyとfalesyがある
/* Falsey
false
0
-0	
0n	
"", '', ``
null
undefined	undefined 
NaN	NaN
document.all */

//論理演算子について
// 両方がtrueならtrueになる
ok = true && false;
//左側がtruthyであれば右側を返す
// falseになる
ok = true && false;

// OR演算子
// 左から右
ok = true || false;

const x = 15;
ok = x > 10 && x < 20;
//演算子の優先順位がある！
// > === &&&
// 同じ優先順位だったら、左から右とか書いてある
const userInput = '';
const userName = userInput || 'User';
ok = x === 10 || (x > 12 && userName);
console.log(ok);
if (ok) {
  console.log('OK!');
} else {
  console.log('NO!');
}

// Null合体演算子、＆＆や｜｜は一緒に使うにはグループ化する
// 空文字が変える
let username = '' ?? 'User';

// 真偽値を反転する
// falseになる
ok = !true;

// 文:抽象的だが実行するとか(const,function)
// 式:＋ -

// 式文
// 文の中のの全体で使われる

// 空文
// ; 何もしない文

// ブロック文
{
  // ブロックスコープ
  const hello = 'hello';
  {
    // こっちが優先される
    const hello = 'hello';
  }
}

// デッドゾーン
{
  // ブロックスコープ
  const hello = 'hello';
  {
    // デッドゾーン
    //console.log(hello);
    // こっちが優先される
    const hello = 'hello';
  }
}

// 三項演算子
// truthyなら'OK'
ok = ok ? 'OK' : 'NO';
if (ok) ok = 'OK';
else ok = 'NO';

// switch文について
// break と returnも同じ
// caseの中はスコープがない
// {}文で囲めばいい！
function vegetableColor(vegetable) {
  switch (vegetable) {
    case 'tomato':
      console.log('tomato is red');
      break;
    case 'pumpkin':
      console.log('pumpkin is orange');
      break;
    // defaultaはどこでもいい
    default:
      console.log('not found');
  }
}
// vegetableColor('pumpkin');

// while文
let count = 0;
while (count < 10) {
  console.log(count);
  count += 1;
}

// do while文
// 条件なしにまずdoが実行される
let tomatoCount = 0;
do {
  console.log('do-while:', tomatoCount);
  tomatoCount += 1;
} while (tomatoCount < 10);

// for文
for (let pumpkinCount = 0; pumpkinCount < 10; pumpkinCount++) {
  console.log(pumpkinCount);
}

// カンマ演算子 あんまりない
/* for (let a = 0, i = 0; pumpkinCount < 10; pumpkinCount++, i += 1) {
  console.log(pumpkinCount, i);
} */

const fruits = ['apple', 'banana', 'grape', 'orange', 'mango'];
for (let i = 0; i < fruits.length; i += 1) {
  console.log(fruits[i]);
}

// for-of文は配列
// 反復可能オブジェクトだったら使える
for (const fruit of fruits) {
  console.log(fruit);
}

// for-in文はオブジェクト
const coffee = {
  name: 'caffe Latte',
  size: 350,
  isHot: true,
};
for (const key in coffee) {
  console.log(coffee[key]);
}

// break文
// 直ちにその処理が終了
for (const key in coffee) {
  if (key === 'size') {
    console.log('break');
    break;
  }
}
