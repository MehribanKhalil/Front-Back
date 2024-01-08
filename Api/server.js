import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './src/routes/productsRoute.js'

const app=express()

app.use(express.json())
app.use(cors())

dotenv.config()

app.use('/',router)

const PORT=process.env.PORT
const url=process.env.CONNTECTION_URL.replace("<password>",process.env.PASSWORD)

mongoose.connect(url).then(console.log("mongoose connect"))


app.listen(PORT,()=>{
    console.log('server is running');
})