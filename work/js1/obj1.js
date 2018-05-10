// obj1.js
//생성자 함수 기반
//첫 글자 대문자
function Student(n, a, p) {
	this.name = n;
	this. age = a;
	this.phone = p;
	this.toString = function(){
		return '{ name: ' + this.name + ", age:" + this.age + ", phone:" + this.phone + "}";
	}
}//Student

var student1 = new Student("홍길동", 20, '010-1234-5678');
var student2 = new Student("이순신", 40, '010-1111-2222');

console.log(student1.toString());
console.log(student2.toString());
