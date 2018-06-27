var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var md5 = require('md5');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'demo'//database của các bạn
});
connection.connect();
router.post("/form-register",function(req,res){
  var dataform = req.body;
  var first_name = dataform.first_name;//lấy thông tin name 
  var last_name = dataform.last_name;
  var email = dataform.email;
  var password = md5(dataform.password);
  var sql = "INSERT INTO users SET ?"; //câu lệnh insert
  var post ={First_name:first_name,Last_name:last_name,Email:email,Password:password};
  var query = connection.query(sql,post,function (error, results, fields) {
     if (error){
       res.json({success:0});//nếu email bị trùng thì trả về 0
     }
     else{
      console.log("Number of records inserted: " + results.affectedRows);
       res.json({success:1});//nếu thêm thành công trả về 1;
     }
     
  });
  console.log(query.sql);
   
});

router.post("/form-login",function(req,res){
    var dataform = req.body;
    var email = dataform.email;
    var password = md5(dataform.password);
    var sql = "SELECT count(*) as sl FROM users where Email='"+email+"' and Password='"+password+"'"; //câu lệnh insert
    var query = connection.query(sql,function (error, results, fields) {
       if (error){
         res.json({success:0});//nếu email bị trùng thì trả về 0
       }
       else{
           console.log(results);
         res.json({success:results[0].sl});//nếu thêm thành công trả về 1;
       }
       
    });
    console.log(query.sql);
     
  });
module.exports = router
