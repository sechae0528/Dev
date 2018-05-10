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
  res.render('writeform', { title: '게시판 글쓰기' });
});

router.post('/write', function(req, res, next){
	console.log('req.body=', req.body);
	//넘어온 값들을 받아서 insert
	var name = req.body.name;
	var passwd = req.body.passwd;
	var title = req.body.title;
	var content = req.body.content;
	var arr=[name,passwd,title,content];
	pool.getConnection(function(err, conn){
		if(err) return next(err);
		var sql = "insert into board(name,passwd,title,content) values(?,?,?,?)";
		conn.query(sql, arr, function(err, row){
			if(err) return next(err);
			console.log('row=', row);
			//res.send("OK");
			res.redirect('/list');
		});

	});
});

router.get('/list', function(req, res, next){
	//select 해서 글들을 보여준다.
	pool.getConnection(function(err, conn){
		if(err) return next(err);
		var sql = "select num, name, passwd, title, content, DATE_FORMAT(regdate, '%Y-%m-%d %H:%i:%s') as regdate, hit from board order by num desc";
		conn.query(sql, function(err, rows){
			console.log('rows=', rows);
			var data = {
				title:"리스트",
				rows: rows
			};
			res.render('list', data);
		});
	})
});

router.get('/read/:num', function(req, res, next){
  	// 글번호를 받아서 select 후 보여준다.
  	var num = req.params.num;
  	console.log('read num=', num);
  	pool.getConnection(function(err, conn){
  		if(err) return next(err);
  		var sql = "select * from board where num=?";
  		conn.query(sql, [num], function(err, rows){
  			if(err) return next(err);
  			console.log('read rows=', rows);
  			var data = {
  				title:"글 읽기",
  				row: rows[0]
  			};
  			res.render('read',data);
  		});
  	});
});
module.exports = router;
