'use strict';
// グローバルオブジェクト
// プロパティが一覧で見れる
console.log(globalThis);

// var:変数の定義
// 再宣言できる (最後が優先される)
var hello = 'hello';
var hello = 'hi';

// 関数の中でしかアクセスできない
function sayTomato() {
  var tomato = 'tomato';
  console.log(tomato);
}

// varで宣言したものはglobalThisに追加できる
// 初期値は巻き上げない

// 関数宣言も再宣言してもエラーでない

// use strictを必ず一番上に書く
// 厳しめにする
// ディレクテブ
// 関数の中でも定義できる
// 同じパラメータを使えない

// primitive
// object以外(let x = 3とか)

// object(データの塊)
// オブジェクト、配列、関数

// 例
const coffee = {
  name: 'Caffe Latte'
}

const coffee2 = coffee;
coffee2.name = 'Espresso';
// 'Espresso'になる
console.log(coffee);

// constというのは絶対再代入できない認識ではない