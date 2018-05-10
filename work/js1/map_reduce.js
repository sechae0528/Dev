// map_reduce.js
var arr = [1,2,3];

//for 사용
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
	arr2.push(arr[i] * arr[i]);

}//for
console.log(arr2); //[1,4,9]

// map 사용
var arr3 = arr.map(function(a) { return a*a});
console.log(arr3); //[1,4,9]

//ES 6 코드 : =>
// var a = arr.map( a => { return a*a;});
var a = arr.map( a=> a*a);
console.log(a); //




var arr4 = [1,2,3,4,5,6,7,8,9];

//for 사용해서 더하기
var sum = 0;
for(var i = 0; i < arr4.length; i++){
	sum += arr4[i];
}
console.log(sum); //45

//reduce 사용
var hap = arr4.reduce(function(a,b) { return a + b;});
console.log(hap); //45
