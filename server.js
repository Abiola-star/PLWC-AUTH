const dotenv = require("dotenv")
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const PORT = 5000
const userRoutes = require("./routes/userRoutes")

dotenv.config()
//middlewares
app.use(express.json())
app.use(cors())


app.get("/", (req,res)=>{
    res.send("server is running")
})
app.use("/api/user", userRoutes)



const startServer = async ()=>{
    try {
        await mongoose.connect(process.env.mongo_url)
        console.log("MongoDB connected");
        console.log("About to start server")

        const PORT = process.env.PORT
        app.listen(PORT,()=>{
            console.log(`App running on port : ${PORT}`);
        })
    } catch (error) {

    }
}
startServer()