const {query} =require("../config/database")


class User{
   
    
//metodo para obtener todos los usuarios la informacion de los usuarios con sus telefonos y emails
    async getAll(){
        const getallsql="SELECT e.id,e.nombre,e.apellidos,e.tipoIdentificacion,e.identificacion,e.fechaingreso,t.numero,em.emails "+
        "FROM empleados e INNER JOIN telefonos t ON (e.id = t.Empleados_id)INNER JOIN emails em on (e.id=em.Empleados_id)"

        try {
            const user = await query(getallsql)
            return user
        }
        catch (error) {
            return error.message
        }

    }

    //metodo para obtener un usuario por su id con todos los datos tambien los telefonos registrados y emails
    async getAllid(id){
        const getallsql="SELECT e.id,e.nombre,e.apellidos,e.tipoIdentificacion,e.identificacion,e.fechaingreso,t.numero,em.emails "+
        "FROM empleados e INNER JOIN telefonos t ON (e.id = t.Empleados_id)INNER JOIN emails em on (e.id=em.Empleados_id) where e.id=?"

        try {
            const user = await query(getallsql,[id])
            return user
        }
        catch (error) {
            return error.message
        }

    }

//metodo para obtener la fecha y hora actual y imprime con formato YYYY-MM-DD 00:00:00
    obtenerfecha() {
        let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let horas=date.getHours()
    let minutos=date.getMinutes()
    let seconds=date.getSeconds()

    if(month < 10&& horas>12){
        horas-=5
  return`${year}-0${month}-${day} ${horas}:${minutos}:${seconds}`
    }else{
        return(`${year}-${month}-${day} ${horas}:${minutos}:${seconds}`)
    }
    }

    //metodo para obtener todos los usuarios sin el telefono y emails
    async getUser(){
        const getallall="select *from empleados"

        try {
            const user = await query(getallall)
            return user
        } catch (error) {
            return error.message
        }

    }

    //metodo para obtener los datos de el usuario por su id

    async getByid(id){
        try {

            const user = await query(`SELECT id,nombre,apellidos,tipoIdentificacion,identificacion FROM empleados WHERE id="${id}"`)

            return user
        } catch (error) {
            return error.message
        }
    }

    //metodo para obtener los datos de el usuario por su nombre
    async getByname(nombre){
        try {

            const user = await query(`SELECT id,nombre,apellidos,tipoIdentificacion,identificacion,fechaingreso FROM empleados WHERE nombre="${nombre}"`)

            return user
        } catch (error) {
            return error.message
        }
    }

    //metodo para actualizar o modificar los datos de los usuarios
    async updateuser(id,data){

        
        try{

            const user = await query(`update empleados set nombre="${data.nombre}",apellidos="${data.apellidos}",tipoidentificacion="${data.tipoIdentificacion}",identificacion="${data.identificacion}" where id= ${id}`)
            
            console.log(user)
           
            
            
            return {user:data,
                    success:true,
                    message:"Usuario actualizado correctamente"}

        }catch(error){

            return error.message
        }
    }


//metodo para crear un telefono a el usuario
async createtlefono(id,data){
    try {

        const  resultel = await query( `INSERT INTO telefonos (tipo,numero,indicativo,Empleados_id) VALUES("${data.tipo}","${data.numero}","${data.indicativo}","${id}")`)
        console.log(resultel.errno)
        
        return "Telefono registrado correctamente"
    
        
        
    } catch (error) {
        return error.message
         
        
    }
}

//metodo para crear un email a el usuario
    async createemails(id,data){
        try {
    
            const result = await query(
                ` INSERT INTO emails(emails,Empleados_id) VALUES("${data.emails}","${id}")` )
            
        
           return"Email registrado correctamente"
            
            
        } catch (error) {
            return error.message
             
        }
   

}

//metodo para crear un usuario
    async create(data){

        try {
            
            const result = await query(
                "INSERT INTO empleados(??) VALUES(?)",
                [Object.keys(data),Object.values(data)]
            )
           
           

            console.log(result)
           
            return "Usuario registrado correctamente"
        

        
        }catch(error){
            
             return error.message
        }
    }

   
//metodo para eliminar un usuario
    async delete(id){
        try {
            await query("delete from emails where Empleados_id=?",[id]) 
            await query("delete from telefonos where Empleados_id=?",[id]) 
            const user = await query("delete from empleados where id=?",[id]) 
            
            return user

        } catch (error) {
            return error.message
        }
    }

    //metodo para eliminar el celular de un usuario
    async deletetel(id){
        try {
            await query("delete from emails where Empleados_id=?",[id]) 
            const user =await query("delete from telefonos where Empleados_id=?",[id]) 
             
            return user

        } catch (error) {
            return error.message
        }
    }
    



}
module.exports = User