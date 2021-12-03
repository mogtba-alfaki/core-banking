import { Db } from "../../config/db.config";
import { Model, DataTypes } from "sequelize/";


export class Branch extends Model<IBranch> implements IBranch{
  id: string; 
  total_money: number; 
  address: string; 
  name: string; 
 }; 
 

Branch.init({ 
    id: { 
    type: DataTypes.STRING(50), 
    primaryKey: true, 
    allowNull: false, 
    },
    total_money: DataTypes.DECIMAL(20,2), 
    address: DataTypes.STRING(50), 
    name: DataTypes.STRING(50),
}, 
{ 
    sequelize: Db, 
    modelName: "branches",  
});  

export interface IBranch { 
    id: string; 
    total_money: number;  
    address: string; 
    name: string; 
}