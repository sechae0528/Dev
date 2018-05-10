// apply_call.js
function sayNameForAll(label) {
	console.log(label + ":" + this.name);
}

var person1 = {
	name : "홍길동"
}

var person2 = {
	name: "장길산"
}
var name = "임꺽정";
// sayNameForAll.call(this, "global");
sayNameForAll.call(person1, "person1");
sayNameForAll.call(person2, "person2");

sayNameForAll.apply(person1, ["person1"]);
sayNameForAll.apply(person2, ["person2"]);
