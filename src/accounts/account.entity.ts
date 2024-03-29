import { Db } from "../../config/db.config";
import { Model, DataTypes } from "sequelize/";
import { Customer } from "src/customers/customer.entity";


export class Account extends Model<IAccount> implements IAccount{
  id: string;
  open_date: Date; 
  balance: number;  
  status: string;
 }; 
 

Account.init({ 
    id: { 
    type: DataTypes.STRING(50), 
    primaryKey: true, 
    allowNull: false, 
    },
    open_date: DataTypes.DATE(),  
    balance: DataTypes.DECIMAL(10, 2),
    status: DataTypes.STRING(10)
}, 
{ 
    sequelize: Db, 
    modelName: "accounts",  
});  

export interface IAccount { 
    id: string;
    open_date: Date; 
    balance: number; 
    status: string;
}