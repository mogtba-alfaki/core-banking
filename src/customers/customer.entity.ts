import { Db } from "../../config/db.config";
import { Model, DataTypes } from "sequelize/";

export class Customer extends Model<ICustomer> implements ICustomer{
  id: string;
  first_name: string; 
  last_name: string; 
  phone_number: string; 
  address: string; 
  email: string;
  password: string;
 }; 
 
   Customer.init({ 
     id: { 
     type: DataTypes.STRING(50), 
     primaryKey: true, 
     allowNull: false, 
     },
     first_name: DataTypes.STRING(10), 
     last_name: DataTypes.STRING(10), 
     email: DataTypes.STRING(10),  
     phone_number: DataTypes.STRING(15), 
     address: DataTypes.STRING(100), 
     password: DataTypes.STRING(15),
   },  
    { 
     sequelize: Db, 
     modelName: "customers",  
   });  
 
   export interface ICustomer { 
     id: string;
     first_name: string; 
     last_name: string; 
     phone_number: string; 
     address: string; 
     email: string;
     password: string;
   }