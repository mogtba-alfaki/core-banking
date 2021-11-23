import { Account } from "src/accounts/account.entity"
import { Customer } from "src/customers/customer.entity"

export const associate =  async () => { 
    Customer.hasOne(Account, {
        foreignKey: "customer_id", 
    });
}