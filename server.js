console.log('web serverni boshlash .');
const express = require('express')
const app = express()
const http = require("http")

// #1 Kirish code

app.use(express.static('public'))
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

app.get("/" , function(req,res){
    res.render("harid")
})

const server = http.createServer(app)
const PORT = 3000
server.listen(PORT , () => {
    console.log(`server is running : ${PORT}`);
    
})