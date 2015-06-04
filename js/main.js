console.log("== Run main.js ==");

myCnt = 0;
myTim = 0;
flgTim = 0; //0:停止, 1:アクティブ

function myGo(){
	if( flgTim ){
		// 1:アクティブ中
		// タイマー停止
		flgTim = 0;
		reset();

	}else{
		// 0:停止中
		flgTim = 1;
		myCnt = 60;
		myTim = setInterval ( "myTimer()", 1000 );
	}
}

function myTimer(){
	myCnt = myCnt - 1;
	document.getElementById( "time" ).innerHTML = "02:" + myCnt + "";
	if ( myCnt == 10 ){
		clearInterval( myTim );
		alert( "ラーメン食べ頃だよ！！" );
	}
	console.log('== run myTimer ==');
	console.log('myCnt'+myCnt);
}

function reset(){
	clearInterval( myTim );
	document.getElementById( "time" ).innerHTML = "03:00";
}