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