const mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    quantity : {
        type : Number,
        required : true,
        default : 1
    }
},{
    timestamp : true
});




const productsModel = mongoose.model("productDetail",productSchema);


module.exports = productsModel;