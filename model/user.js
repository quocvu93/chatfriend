
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://vu:1234@ds135926.mlab.com:35926/app1234';
var assert = require('assert');
// Database Name
var dbName = 'app1234';

exports.insertUser = function(obj){
  return new Promise((resolve,reject)=>{  
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  var db = client.db(dbName);

  db.collection('users').insertOne(obj,function(err,r){
     if(r.insertedCount == 1){
         console.log('<<<<<<<<<<<<<<<<<INSERT OK>>>>>>>>>>>');
         resolve('insert user successful!');
     }else{
         reject(new Error('can not insert user'));
     }
      client.close();
  });
});
      
  });
    
};

exports.getUser = function(param){
    
    return new Promise((resolve,reject)=>{
    MongoClient.connect(url, function(err,client){
        
        MongoClient.connect(url, function(err,client){
        assert.equal(null,err);
        console.log('CONNECT SUCCESSFUL!');
        var db = client.db(dbName);
            
        var collection = db.collection('users');
            collection.find({'username':param}).toArray(function(err,doc){
                assert.equal(err,null);
                if(doc.length > 0){
                    console.log( 'id of document' + doc[0]._id);
                    console.log(doc);
                    resolve(doc);
                }else{
                    console.log('<<<<<<<<Can not find the doc>>>>>>>>>>>');
                    reject(new Error('cant not fin doc'));
                }
                
            });
        });
    });
});

    }
                   