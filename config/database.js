const mysql=require("mysql2")
const { dbUsername, dbPassword, dbHost, dbName,dbPort } = require(".")


const connection=  mysql.createConnection({
    host:dbHost,
    port:dbPort ,
    user:dbUsername,
    password:dbPassword,
    database:dbName
})

function conexion(){
connection.connect((err)=>{

    if(err){
        console.log("erro de conexion")
    }else{
        console.log("conexion exitosa")
    }
})
}


function query(sql,data){
    const miPromesa = new Promise(function (resolve,reject){
        connection.query(sql,data,function(error,result,fields){
            if(error!=null){
                console.log(error)
    
                return reject({
                    error:true,
                    message:error.sqlMessage
                })
            }else{
                return resolve(result)
            }
        })
    })

    return miPromesa
    
}



module.exports = {
    conexion,
    query
}