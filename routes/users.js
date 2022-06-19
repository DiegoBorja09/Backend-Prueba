const express = require("express")
const UserService = require("../services/users")


function users(app) {
    const router = express.Router()
    const userServ = new UserService()

    app.use("/api/users",router)

    router.get("/all", async (req,res)=>{
        const users = await userServ.getAll() // Array de usuarios
        console.log("usandogetall")
        console.log(users)
        return res.json(users)
    })
    router.get("/", async (req,res)=>{
        const users = await userServ.getUser() // Array de usuarios
        console.log("usandogetuser")
        console.log(users)
        return res.json(users)
    })
    router.get("/:id", async (req,res)=>{
        const users = await userServ.getAllid(req.params.id) // Array de usuarios
        console.log("usandogetallid")
        console.log(users)
        return res.json(users)
    })
    router.get("/actualizar/:id", async (req,res)=>{
        const users = await userServ.getByid(req.params.id) // Array de usuarios
        console.log("usandogetbyid")
        console.log(users)
        return res.json(users)
    })
    router.get("/nombre/:nombre", async (req,res)=>{
        const users = await userServ.getByname(req.params.nombre) // Array de usuarios
        console.log(req.params.nombre)
        console.log(users)
        return res.json(users)
    })
    

    router.post("/", async (req,res)=>{
        const date = userServ.obtenerfecha()
        req.body.fechaingreso=date
        const result=await userServ.create(req.body)
        return res.json(result)
    })
    router.post("/emails/:id", async (req,res)=>{
        const result=await userServ.createemails(req.params.id,req.body)
        return res.json(result)
    })
    router.post("/telefonos/:id", async (req,res)=>{
        const result=await userServ.createtlefono(req.params.id,req.body)
        return res.json(result)
    })

    router.put("/:id",async (req,res)=>{
        const user = await userServ.updateuser(req.params.id,req.body)
        return res.json(user)
    })
    router.delete("/:id",async (req,res)=>{
        const user = await userServ.delete(req.params.id)
        return res.json(user)
    })
    router.delete("/telefonos/:id",async (req,res)=>{
        const user = await userServ.deletetel(req.params.id)
        return res.json(user)
    })
    router.delete("/email/:id",async (req,res)=>{
        const user = await userServ.deleteemail(req.params.id)
        return res.json(user)
    })
  
}module.exports = users