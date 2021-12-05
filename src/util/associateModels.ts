import { Account } from "src/accounts/account.entity"
import { Customer } from "src/customers/customer.entity"
import { Transaction } from "src/transactions/transaction.entity";
import { Branch } from "../branches/branch.entity";

export const associate =  async () => { 
    Customer.hasOne(Account, {
        foreignKey: "customer_id", 
    }); 

    Account.hasOne(Transaction, {
        foreignKey: "from", 
    }); 

    Account.hasOne(Transaction, { 
        foreignKey: "to", 
    }); 

    Account.belongsTo(Branch, { 
        foreignKey: "branch_id",
    })
}