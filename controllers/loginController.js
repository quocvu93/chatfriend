var enscrypt = require('../helper/enscryptdata');
var userModel = require('../model/user');

exports.get_login = function(req,res){
    
        res.render('login',{title:'Login'});
}

exports.post_login = function(req,res){
   
   var username = req.body.name;
   var user = userModel.getUser;
    user(username)
        .then((success)=>{
        console.log(success);
        var pass = success[0].password;
        var passinput = req.body.password;
        
        if(enscrypt.comparepass(passinput,pass)){
            console.log ("password ok");
            res.redirect('/');
          
        }else{
            console.log('password failed');
            res.render('login',{message:'Mật Khẩu không đúng'});
          
        }
       
    })
    .catch((err)=>{
        console.log(err);
        res.render('login',{message:'Tài Khoản không tồn tại'});
    
    })
    
};







