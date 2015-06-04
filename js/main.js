console.log("== Run main.js ==");

myCnt = 0;
myTim = 0;

function myGo(){
myCnt = 59;
myTim = setInterval ( "myTimer()", 1000 );
}

function myTimer(){
myCnt = myCnt - 1;
document.getElementById( "countdown" ).innerHTML = "02:" + myCnt + "";
document.getElementsByClassName("countdown").innerHTML = "02:" + myCnt + "";
if ( myCnt == 0 ){
clearInterval( myTim );
alert( "ラーメン食べ頃だよ！！" );
}
}