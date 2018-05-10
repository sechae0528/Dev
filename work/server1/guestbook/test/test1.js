// test1.js
var mysql = require('mysql');//heidisql 실행(로드)


var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '1234',
	database: 'mobiledb'
});//준비단계

connection.connect();//연결

connection.query('SELECT 1 + 1 AS solution', function(error, results){
	if(error) throw error;
	console.log(results); //[ RowDataPacket { solution: 2 } ]
	console.log("solution=" + results[0].solution); //solution=2
});

connection.end();//연결해제