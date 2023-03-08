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
