console.log('web serverni boshlash .');
const express = require('express')
const app = express()
const http = require("http")
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



// #1 Kirish code
app.use(express.static('public')) // Middleware design pattern
app.use(express.json())
app.use(express.urlencoded({extended:true}));


// #2 session code  


// #3 views code

app.set("views" , "views")
app.set("view engine" , "ejs")


// #4 Routing code



app.get("/author", (req,res) => {
    res.render("author", { user: user })
})

app.get('/' , (req,res) => {
    console.log('user entered /');
    
  require('./server').db().collection('plans')
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log('Error: ', err);
        res.end('Something went wrong');
      } else {
        console.log('data: ', data);
        res.render('reja', { items: data });
      }
    });
})

app.post("/create-item" , function(req,res){
    console.log('user entered /create-item')
    const new_reja = req.body.reja

   require('./server').db().collection("plans").insertOne({reja:new_reja} , (err,data) => {
        if(err){
            console.log(err);
            res.send('something went wrong!')
        }else{
            res.send('successfully added!')
        }
    })
})

module.exports = app