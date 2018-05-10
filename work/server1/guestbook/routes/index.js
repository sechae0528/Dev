var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var pool = mysql.createPool({
	connectionLimit: 10,//동시접속자수
	host: 'localhost',
	user: 'root',
	password: '1234',
	database: 'mobiledb'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/writeform', function(req, res, next) {
  res.render('writeform', { title: '방명록 글쓰기' });
});

router.post('/write', function(req, res, next){
	console.log('req.body=', req.body);
	// 1. 넘어온 값을 받는다.
	var name = req.body.name;
	var title = req.body.title;
	var content = req.body.content;
	var arr= [name, title, content];

	// 2. 방명록 저장(insert)
	pool.getConnection(function(err, conn){
		var sql = "insert into guestbook(name,title,content) values(?,?,?)";
		conn.query(sql, arr, function(err, row){
			console.log('row=',row);
	       	// res.send('OK'); // /list 코딩 전에 임시로 저장 성공 메세지(OK) 출력
	       	res.redirect('/list'); //list로 가라!!!
		});
	});
});

router.get('/list',function(req, res, next){
	//DB에서 select해서 화면에 보여준다.
	pool.getConnection(function(err, conn){
		if(err) next(err);
		var sql = "select * from guestbook order by no desc";
		conn.query(sql, function(err, rows){
			console.log('rows=',rows);
			// res.send("list");
			var data = {
				title: "방명록 리스트",
				rows: rows
			};
			res.render('list',data);

		});
	});
});

module.exports = router;
