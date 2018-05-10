//Lotto2.js
//1~45사이 난수 -> 중복없이 6개 -> 정렬
var arr = [];
for(; arr.length < 6 ; ){
	var num = Math.floor(Math.random()*45) + 1;
	if(arr.indexOf(num) == -1){ //배열에 없는 값인지 검사. indexOf는 숫자의 index를 변환
		arr.push(num); //배열에 없으면 저장
	}
}//for
arr.sort(function(a,b) {return a-b;} );
console.log(arr);