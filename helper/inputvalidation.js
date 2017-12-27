exports.inputfilter = function(obj){
    var result = {};
    for (var p in obj) {
    if( obj.hasOwnProperty(p) ) {
      if(obj[p] == ''){
          result[p] = p + " không được để trống";
      };
    }; 
  };  
    return result;
};


exports.checkobjempty = function(obj){
   
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    };
    return true;

};

exports.inputpattern = function(obj){
    var result = {};
    var namepattern = /[^\w .@]/i;
    var passwordpattern = /[^\w]/i;
    if(namepattern.test(obj.username) == true || obj.username.length > 30){
        result.username = 'tên người dùng phải ít hơn hoặc bằng 30 ký tự,tên người dùng chỉ gồm các ký tư chữ,số,khoảng trắng và . @';
    };
    if(passwordpattern.test(obj.password) == true || obj.password.length > 10 || obj.password.length < 4 ){
        result.password = 'mật khẩu chỉ chứa cá ký tự chữ,số,không chứa ký tự đặc biệt và không quá 10 ký tự ';
    };
    if(namepattern.test(obj.displayname) == true || obj.displayname.length > 30){
        result.displayname = 'tên hiển thị ít hơn hoặc bằng 30 ký tự,tên hiển thị chỉ gồm các ký tự chữ,số,khoảng trắng và . @';
    };
    return result;
};