//Lotto1.js
//1~45 볼 -> 섞어서 -> 6개 뽑기 -> 정렬

//1~45
var arr = [];
for(var i=1; i <= 45; i++) {
	arr.push(i);
}
 // console.log(arr);

//섞기
arr.sort(function() {return 0.5 - Math.random(); }); //Math.random 은 0.0~0.999를 말함
// console.log(arr);

//6개 뽑기
var myballs = arr.slice(0,6); //6은 포함 안함.

//정렬
myballs.sort(function(a,b) {return a-b; });
console.log(myballs);