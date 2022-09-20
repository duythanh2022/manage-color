const express = require("express")
const dotenv = require("dotenv")
const app = express()
const mongoose = require('mongoose')
const productRouter = require("./src/routes/productRoute")
const userRouter = require("./src/routes/userRoute")
app.use(express.json())
dotenv.config()
const PORT = 5000;

//connecting mongoose
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Successfully connected to database");
}).catch((error)=>{
    console.log("database connection failed. exiting now...");
    console.error(error)
})
app.use('/api',productRouter)
app.use('/api/auth',userRouter)

app.listen(PORT,()=>console.log(`Server start ${PORT}`))