//lottoset.js
//1~45 볼 -> 섞어서 -> 6개 뽑기 -> 정렬

//1~45
var arr = [];
var count = 0;
for(var i=1; i <= 45; i++) {
	arr.push(i);
}
 // console.log(arr);
while (count<30) {
//섞기
arr.sort(function() {return 0.5 - Math.random(); }); //Math.random 은 0.0~0.999를 말함
// console.log(arr);

//6개 뽑기
var myballs = arr.slice(0,6); //6은 포함 안함.
var sum = myballs[0] + myballs[1] + myballs[2] + myballs[3] + myballs[4] + myballs[5]

if (sum >=100 && sum <=170){



//정렬
myballs.sort(function(a,b) {return a-b; });
console.log(myballs);

count = count + 6;
}
}