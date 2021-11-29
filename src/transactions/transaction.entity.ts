import { Db } from "../../config/db.config";
import { Model, DataTypes, TEXT } from "sequelize/";


export class Transaction extends Model<ITransaction> implements ITransaction{
  id: string; 
  amount: number; 
  details: string; 
 }; 
 

Transaction.init({ 
    id: { 
    type: DataTypes.STRING(50), 
    primaryKey: true, 
    allowNull: false, 
    },
    
    amount: DataTypes.DECIMAL(10, 2), 
    details: TEXT("medium"), 
}, 
{ 
    sequelize: Db, 
    modelName: "transactions",  
});  

export interface ITransaction { 
    id: string;
    amount: number; 
    details: string; 
}