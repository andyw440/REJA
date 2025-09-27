const http = require('http')
const app = require('./app')
const mongodb = require('mongodb')

const connectionString = "mongodb+srv://asror2006:Asror2006%40@cluster0.98iemob.mongodb.net/Plan"

// BACKEND SERVER + DATABASE SERVER connection
mongodb.connect(connectionString 
    ,{useNewUrlParser:true , useUnifiedTopology:true},
    (err,client) => {
        if(err){
            console.log("ERROR:" , err);     
        }else{
            console.log('MongoDB connected successfully');
            const server = http.createServer(app)
            const PORT = 3000
            server.listen(PORT , () => {
                console.log(`server is running on port : ${PORT} , http://localhost:${PORT}`);
                module.exports = client
                
            })
        }
    }
)

