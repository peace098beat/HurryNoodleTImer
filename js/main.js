


console.log("== Run main.js ==");

// Global Variable
// ===============
MAX_CNT = 180;
ONE_SEC = 1000;

// タイマーの残り時間(秒) 3分->180
gTimCnt = 0;
// タイマーオブジェクト
gTimObj = 0;
// タイマーフラグ
gTimFlg = 0; //0:停止, 1:アクティブ


// ボタンが押されたら呼び出される中間関数
function myGo(){
	if( gTimFlg ){
		// 1:アクティブ中 -> タイマー停止
		reset();
	}else{
		// 0:停止中 -> タイマー生成・開始
		start();
	}
}

function myTimer(){
	// 残り時間をデクリメント
	gTimCnt = gTimCnt - 1;
	// 残り時間(分, 秒)を計算して、ゼロ埋め
	var view_min = ( "0" + Math.floor(gTimCnt / 60) ).slice(-2);
	var view_sec = ( "0" + Math.floor(gTimCnt % 60) ).slice(-2);
	// 画面更新
	document.getElementById( "time" ).innerHTML = view_min + ":" + view_sec;
	// 終了判定
	if ( gTimCnt == 0 ){
		reset();
		alert( "ラーメン食べ頃だよ！！" );
	}
}

function reset(){
	// 停止フラグに変更
	gTimFlg = 0;
	// タイマーオブジェクトの停止
	clearInterval( gTimObj );
	// 残り時間(分, 秒)を計算して、ゼロ埋め
	var view_min = ( "0" + Math.floor(MAX_CNT / 60) ).slice(-2);
	var view_sec = ( "0" + Math.floor(MAX_CNT % 60) ).slice(-2);
	document.getElementById( "time" ).innerHTML = view_min + ":" + view_sec;

}
function start(){
	// 0:停止中 -> タイマー生成・開始
	gTimFlg = 1;
	// 残り時間をリセット
	gTimCnt = MAX_CNT;
	gTimObj = setInterval ( "myTimer()", ONE_SEC );
}