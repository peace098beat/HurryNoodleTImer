console.log("== Run main.js ==");

myCnt = 0;
myTim = 0;
flgTim = 0; //0:停止, 1:アクティブ

function myGo(){
	if(myTim){
		console.log(myTim);
	}
	if( flgTim ){
		// 1:アクティブ中 -> タイマー停止
		reset();
	}else{
		// 0:停止中 -> タイマー生成・開始
		start();
	}
}

function myTimer(){
	// 画面更新
	myCnt = myCnt - 1;
	view_min = ( "0" + Math.floor(myCnt / 60) ).slice(-2);
	view_sec = ( "0" + Math.floor(myCnt % 60) ).slice(-2);
	console.log(myCnt, view_min, view_sec);
	document.getElementById( "time" ).innerHTML = view_min + ":" + view_sec;

	// 終了判定
	if ( myCnt == 0 ){
		// clearInterval( myTim );
		reset();
		alert( "ラーメン食べ頃だよ！！" );
	}
	// デバッグ
	console.log('== run myTimer ==');
	console.log('myCnt'+myCnt);
}

function reset(){
	flgTim = 0;
	clearInterval( myTim );
	document.getElementById( "time" ).innerHTML = "03:00";
}
function start(){
	// 0:停止中 -> タイマー生成・開始
	flgTim = 1;
	myCnt = 180;
	myTim = setInterval ( "myTimer()", 1000 );
}