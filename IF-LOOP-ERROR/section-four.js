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
