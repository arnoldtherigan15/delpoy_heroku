if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT
const app = express()
const {Photo} = require('./models')
app.use(express.urlencoded({ extended:false }))
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    res.json({message:'welcome to app'})
})
app.get('/photo',(req,res)=>{
    Photo.findAll()
    .then(data=>{
        console.log(data);
        res.json(data)
    })
    .catch(err=>{
        console.log(err);
        
    })
})

app.listen(PORT,_=>{console.log(`listening on port ${PORT}`)})

