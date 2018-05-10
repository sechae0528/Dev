//Lotto3.js
function lottoGen() {
	var arr = [];
	for(; arr.length <6;) {
		var num = Math.floor(Math.random()*45) + 1;
		if(arr.indexOf(num) == -1) {
			arr.push(num);
		}
	}//for
	arr.sort(function(a,b) {return a - b});
	return arr;
}//LottoGen

// 합계 100~170 인 것만 5게임
var count = 0;
while(count<5) {
	var arr = lottoGen();
	var sum = arr.reduce(function(a,b) { return a+b});
	if(sum>=100 && sum <= 170) {
		console.log(arr);
		count++;
	}
	else {
	 	console.log('실패:',arr);
	 }
}