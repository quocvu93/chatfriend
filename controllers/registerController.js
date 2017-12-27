var userModel = require('../model/user');
var inputval = require('../helper/inputvalidation');
var enscryptdata = require('../helper/enscryptdata');

exports.get_register = function(req,res){
    res.render('register',{title:'Đăng Ký'});
};

exports.post_register = function(req,res){
    
    var userobj = {
        username : req.body.name,
        password : req.body.password,
        displayname : req.body.displayname
    };
 
   var filterresult = inputval.inputfilter(userobj);
    if(inputval.checkobjempty(filterresult) == false){
       var nameerr = filterresult['username'];
       var passworderr = filterresult['password'];
       var displaynameerr = filterresult['displayname'];
       
       res.render('register',{name_err:nameerr, password_err:passworderr, displayname_err:displaynameerr});
       
   }else{
       var inputpattern = inputval.inputpattern(userobj);
       if(inputval.checkobjempty(inputpattern) == false) {
       var nameerr = inputpattern['username'];
       var passworderr = inputpattern['password'];
       var displaynameerr = inputpattern['displayname'];
       
       res.render('register',{name_err:nameerr, password_err:passworderr, displayname_err:displaynameerr});
       }else{
           userobj.password = enscryptdata.enscryptpass(userobj.password);
           var user = userModel.insertUser;
           user(userobj).then((success)=>{
               console.log(success);
              res.redirect('/'); 
           })
           .catch((error)=>{
               console.log(error);
           })
       };
   };

};
















