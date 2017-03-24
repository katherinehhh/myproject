var express = require('express');
var router = express.Router();
var mysql=require('mysql');

//数据库连接

 var connection=mysql.createPool({
 	host:'localhost',
 	port:'3306',
 	user:'root',
 	password:'root',
 	database:'phpnews'
  });
 /* 获取所有新闻列表 */

 router.get('/getnews',function(req,res){
 	connection.query('SELECT * FROM `news`',function(err,rows){
 		res.json(rows);
 	});
 });
// 确认更新新闻
router.post('/update',function(req.res){
	var newstitle=req.body.newstitle;
	var newstype=req.body.newstype;
	var newsimg=req.body.newsimg;
	var newsdate=req.body.newsdate;
	var newssouc=req.body.newssouc;
	var newsid=req.body.id;
	connection.query('UPDATE `news` SET `newsdate`= ?,`newstitle`=?,`newssouc`=?,`newstype`=?,`newsimg`=? WHERE `id`=?',[newsdate,newstitle,newssouc,newstype,newsimg,newsid],function(err,rows){
     console.log(row.changedRows);

	});
});
// 模态框取值
router.get('/current',function(req,res){
	var newsId=req.query.newsid;
	connection.query('SELECT * FROM　`news` WHERE id=?',[newsId],function(err,rows){
		res.json(rows);
	});
});
//删除
router.post('/delete',function(req,res){
	var newsid=req.body.newsid;
	connection.query('DELETE FROM news WHERE `news`.`id`=?',[newsid],function(err,result){
    console.log('success');
	});
});
//插入值
router.post('/insert',function(req,res){
	var newstitle=req.body.newstitle;
	var newstype=req.body.newstype;
	var newsimg=req.body.newsimg;
	var newsdate=req.body.newsdate;
	var newssouc=req.body.newssouc;
	connection.query('INSERT INTO `news`(`newsdate`,`newstitle`,`newssouc`,`newstype`,`newsimg`)VALUES(?,?,?,?,?)',[newsdate,newstitle,newssouc,newstype,newsimg],function(err,result){
       if(!err){
       	console.log(result.insertIdbody);
       }
	});
});

module.exports = router;
