import { Db } from "../../config/db.config";
import { Model, DataTypes } from "sequelize/";
import { Customer } from "src/customers/customer.entity";


export class Account extends Model<IAccount> implements IAccount{
  id: string;
  open_date: Date; 
  balance: number;  
  static associate(models: any) { 
    Account.belongsTo(models.Customer, {
        onDelete: "SET NULL", 
        foreignKey: "user_id", 
    }) 
  }
 }; 
 

Account.init({ 
    id: { 
    type: DataTypes.STRING(15), 
    primaryKey: true, 
    allowNull: false, 
    },
    open_date: DataTypes.DATE(),  
    balance: DataTypes.DECIMAL(10, 2)
}, 
{ 
    sequelize: Db, 
    modelName: "accounts",  
});  

export interface IAccount { 
    id: string;
    open_date: Date; 
    balance: number; 
}