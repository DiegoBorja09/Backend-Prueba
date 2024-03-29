require("dotenv").config()

const config = {
    port:process.env.PORT,
    dbUsername:process.env.DB_USERNAME,
    dbPassword:process.env.DB_PASSWORD,
    dbHost:process.env.DB_HOST,
    dbName:process.env.DB_NAME,
    dbPort:process.env.DB_PORT
}

module.exports = config 