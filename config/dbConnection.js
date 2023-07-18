const mongoose = require('mongoose');

var db;
connectDbFun();
async function connectDbFun(){
    try{
        const url = "mongodb://127.0.0.1:27017/ecommerceAdminDb";
        db =  await mongoose.connect(url,{useNewurlParser:true,useUnifiedTopology:true});
        if(db){
            console.log('Database are connected......');
        }
    }catch(e){
        console.log(e);
    }
}


module.exports = db;