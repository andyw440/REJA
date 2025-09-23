const http = require('http')
const app = require('./app')
const mongodb = require("mongodb")
let db;
const connectionString = "mongodb+srv://asror2006:Asror2006%40@cluster0.98iemob.mongodb.net/Reja"

mongodb.connect(connectionString ,{useNewUrlParser:true , useUnifiedTopology:true},
    (err,client) => {
        if(err){
            console.log("ERROR:" , err);     
        }else{
            console.log('MongoDB connected successfully');
            module.exports = client.db("mydb")
            
            const app = require('./app')
            const server = http.createServer(app)
            const PORT = 3000
            server.listen(PORT , () => {
            console.log(`server is running on port : ${PORT} , http://localhost:${PORT}`);
    
})
        }
    }
 )

