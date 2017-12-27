var bcrypt = require('bcrypt');
exports.enscryptpass = function(parameter){
    
     var result = bcrypt.hashSync(parameter, 10);
     return result;
};

exports.comparepass = function(password,hash){
    if(bcrypt.compareSync(password, hash)) {
        return true;
    } else {
        return false;
    }
}