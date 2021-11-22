import { Sequelize } from "sequelize"
import * as dotenv from "dotenv"; 
dotenv.config(); 

console.log(process.env.DATABASE_NAME);
export const Db = new Sequelize({ 
    database: process.env.DATABASE_NAME, 
    username: process.env.DATABASE_USER, 
    password: process.env.DATABASE_PASSWORD, 
    dialect: "mysql",
    host: process.env.HOST
});
