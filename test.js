describe('ヘッダー部分', () => {	
	it('フォルダ・ファイル一覧ボタンを押下', () => {	  
	document.addEventListener('DOMContentLoaded', () => {	
	  const fileButton = document.querySelector('.folder-index');  
	  const clickEvent = new MouseEvent('click', {
		  // イベントが親要素に伝搬する
		  bubbles: true,
		  // イベントがキャンセル可能
		  cancelable: true,
		  // イベントが発生したビュー(現在のブラウザ)を指定
		  view: window
	  });
	  // dispatchEventメソッドは対象となるターゲットに引数に指定したイベントを発生させる
	  fileButton.dispatchEvent(clickEvent);
	  // clickEventの動作が抑制されていないことを期待する
	  expect(context.window.location.href).toBe("http://localhost:8080/");
	});
  });
})

const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('ヘッダー部分', () => {
  it('フォルダ・ファイル一覧ボタンを押下', () => {
    const html = fs.readFileSync('./index.html', 'utf8');
    const dom = new JSDOM(html);
    const fileButton = dom.window.document.querySelector('.folder-index');

    const clickEvent = new dom.window.MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: dom.window
    });

    fileButton.dispatchEvent(clickEvent);

    expect(dom.window.location.href).toBe('http://localhost:8080/');
  });
});

//ログアウトクリック時に実行
var logout = function () {
  $.post("/logout", function () {
    $("#testuser").html('');
    $("#div1").show();
    $("#div2").hide();
  })
}
