import { Sequelize } from "sequelize"

export const Db = new Sequelize({ 
    database: process.env.DB, 
    username: process.env.USER, 
    password: process.env.PASSWORD, 
    dialect: "mysql",
    host: process.env.HOST
});
