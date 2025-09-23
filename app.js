console.log('web serverni boshlash .');
const express = require('express')
const res = require('express/lib/response')
const app = express()
const http = require("http")
const fs = require("fs");
// let user;
// fs.readFile("database/user.json" , "utf8" , (err,data) =>{
//     if(err){
//         console.log('ERROR',err);
//     }else{
//         user = JSON.parse(data)
//     }
// })


// MongoDB connect
const db = require('./server')

// #1 Kirish code
app.use(express.static('public')) // Middleware design pattern
app.use(express.json())
app.use(express.urlencoded({extended:true}));


// #2 session code


// #3 views code

app.set("views" , "views")
app.set("view engine" , "ejs")


// #4 Routing code

app.post("/create-item" , function(req,res){
    console.log(req.body)
    res.json({test:"success"})
})

app.get("/author", (req,res) => {
    res.render("author", { user: user })
})

module.exports = app