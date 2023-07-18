// @Pushpendu Jana
const express = require('express');
const db = require('./config/dbConnection');
const bodyParser = require('body-parser');




const productsModel = require('./models/productSchema');


const app = express();

const port = 4400;


// set views engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('./assets'));

app.use(bodyParser.urlencoded({extended : true}));



app.get('/',(req,res)=>{
    res.render('home');
});

// get all products
app.get('/products',async (req,res)=>{
    // res.send('all product');
    try{
        const result = await productsModel.find();
        // console.log(result);
        return res.render('show',{
            allItems : result,
        });
    }catch(e){
        console.log(e);
    }
});

// add products
app.get('/products/create',(req,res)=>{
    res.render('add');
});
app.post('/add-products',async (req,res)=>{
    // console.log(req.body);
    try{
        var data = new productsModel({
            name : req.body.item,
            quantity : req.body.quantity

        });
        await data.save();
        return res.redirect('/products/create');
    }catch(err){
        console.log(err);
        return res.redirect('back');
    }
    
});


// update products

app.put('/products/update-quantity/:id/:quantity',async(req,res)=>{
    // console.log(req.params.id);
    var id = req.params.id;
    var quantity = req.params.quantity;
    // prompt("age ? : ");
    // console.log(id,"  ",quantity);
    try{
        var result = await productsModel.findById(id);
        if(result){
            await productsModel.findByIdAndUpdate(id,{
                quantity : quantity
            });
            // return res.redirect('/back');
        }
    }catch(e){
        console.log(e);
    }
    return res.redirect('back');
});



// delete products

app.get('/products/delete',(req,res)=>{
    res.render('delete');
});

app.delete('/products/delete/:id',async(req,res)=>{
    try{
        var id = req.params.id;
        await productsModel.findByIdAndDelete(id);
    }catch(e){
        console.log(e);
    }
    return res.redirect('/products/delete');
});



// create my server

app.listen(port,(err)=>{
    if(err){
        console.log("Create server error = ",err);
        return;
    }
    console.log(`Server is running on port : ${port}`);
});