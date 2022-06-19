const express = require("express")
const cors = require("cors")
const { conexion } = require("./config/database")
const { port } = require("./config")

const users = require("./routes/users")

const app = express()

conexion()

// Usando rutas:

app.use(cors({
    origin:["http://localhost:4200"],
}))

app.use(express.json())

users(app)

app.get("/",(req,res)=>{
    return res.json({
        name:"Prueba tecnica"
    })
})

app.listen(port,()=>{
    console.log("Listening: http://localhost:"+port)
})