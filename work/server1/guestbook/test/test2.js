// test2.js
var mysql = require('mysql');

var pool = mysql.createPool({
	connectionLimit: 10,//동시접속자수
	host: 'localhost',
	user: 'root',
	password: '1234',
	database: 'mobiledb'
});

pool.getConnection(function(err, conn){ //비동기 콜백방식, 실행결과를 오른쪽으로 던짐
   conn.query('SELECT 1 + 1 AS solution', function(err, results){  //비동기 콜백방식, 실행결과를 오른쪽으로 던짐
       if(err) throw err;
       console.log(results);
       console.log('solution=' + results[0].solution); //solution=2
       conn.release();
   } );

});