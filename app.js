console.log('web serverni boshlash .');
const express = require('express')
const app = express()
const mongodb = require('mongodb')
const fs = require("fs");




let user;
fs.readFile("database/user.json" , "utf8" , (err,data) =>{
    if(err){
        console.log('ERROR',err);
    }else{
        user = JSON.parse(data)
    }
})


// MongoDB connect
// const db = require('./server').db()



// #1 Kirish code
app.use(express.static('public')) // Middleware design pattern - publicni ochiqlaydi
app.use(express.json()) // Middleware design pattern - Rest API
app.use(express.urlencoded({extended:true})); // Traditional API


// #2 session code  


// #3 views code

app.set("views" , "views")
app.set("view engine" , "ejs")


// #4 Routing code

app.get("/author", (req,res) => {
    res.render("author", { user: user })
})



app.post("/create-item" , function(req,res){
    console.log('user entered /create-item')
    console.log('STEP2: FRONTEND > BACKENDGA entrance');
    const new_reja = req.body

    console.log('STEP3: BACKEND > DATABASE request');
    const db = require('./server').db()
   db.collection('plans').insertOne(new_reja , (err,data) => {
        console.log('STEP4: DATABASE > BACKEND response  ');
       
        console.log('STEP5:BACKEND > FRONTEND response');
        console.log(data.ops);
        
           res.json(data.ops[0])
        
    })
})

app.post('/delete-item' , (req,res) => {
    const id = req.body.id
    const db = require('./server').db()
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, (err,data) => {
        res.json({state:"success"})
    })
        
})

app.get('/' , (req,res) => {
    console.log('user entered /');
    console.log('STEP2: FRONTEND > BACKENDGA entrance');
    
    console.log('STEP3: BACKEND > DATABASE request');
    
    const db = require('./server').db()
  db.collection('plans')
    .find()
    .toArray((err,data) => {
        console.log('STEP4: DATABASE > BACKEND response  ');
        console.log('db:' , data);
       
        console.log('STEP5:BACKEND > FRONTEND response');
        res.render('reja', { items: data });
      
    });
})  

module.exports = app