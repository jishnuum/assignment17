const express = require("express")
const { dbConnect } = require("./config/dbConnection")
const { userRouter } = require("./routes/userRoutes")
const app = express()
require('dotenv').config()
const cors = require('cors')
const cookie = require('cookie-parser')


app.use(express.json())
app.use(cookie())
app.use(cors({
    origin:"http://localhost:5173"
}))

dbConnect()


app.use("/user",userRouter)








app.listen(process.env.PORT,()=>{
    console.log(`server start on port ${process.env.PORT}`);
    
})