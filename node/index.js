 import express from 'express'
import mongoose from 'mongoose'
const app = express()
// const {MongoClient} = require("mangodb")


mongoose.connect('mongodb://localhost:27017').then(
    ()=>console.log('con')
)

// mongoose.connect('mongodb://localhost:27017')
const UserSchema = mongoose.Schema({
    name: String,
    age: Number
})
const UserModel = mongoose.model('users',UserSchema)

app.get('/getusers',(req,res)=>{

   

UserModel.find({}).then(function(users){
res.json(users)
}).catch(function(err){
    console.log(err)
})
})


app.listen(3000,()=>{
    
    console.log('server running')
})






















// import dotenv from 'dotenv'
// import mongoose from 'mongoose'


// dotenv.config()
// //declared a const which willhave  env variable DB_URI -atlas path


// //const uri=process.env.DB_URI
// //const uri='mongodb+srv://mkg:mkg@cluster0.cxy5yhu.mongodb.net/onlinedb?retryWrites=true&w=majority'
// /*mongoose is a library for managing the schema of business data 
// eg: OnlineShopping  -- customer products vendors sales purchases
// customer  id name address 
// products*/
// const uri='mongodb://localhost:27017'
// mongoose.connect(uri,{useNewUrlParser:true})

// const connection = mongoose.connection

// connection.once('open',()=>{

//     console.log('MongoDB is succesfuly connected to')

// })