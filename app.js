const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const DB = process.env.DB_URL
const PORT = process.env.PORT || 5000

mongoose.connect(DB)

const con = mongoose.connection

con.on("open", ()=>{
    console.log("DB connected")
})

const app = express()   

app.use(
    cors({
        origin:'*',
    })
)

app.use(express.json());
app.use('/api', require("./src/routes/main"))

app.listen(PORT, ()=>{
    console.log(`Listening to port: ${PORT}`)
})


