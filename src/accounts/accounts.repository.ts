import { BaseRepository } from "src/util/BaseRepository";
import {Account} from "../accounts/account.entity"; 

export class AccountRepository extends BaseRepository<Account> { 
    constructor() { 
         super(Account, "Account"); 
    } 

    async findWitoutFailing(whereQlause?, attributes?): Promise<any> { 
        return await Account.findOne({where: whereQlause, attributes}); 
    }   
}