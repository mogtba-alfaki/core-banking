import { BaseRepository } from "src/util/BaseRepository";
import {Account} from "../accounts/account.entity"; 

export class AccountRepository extends BaseRepository { 
    constructor() { 
         super(Account, "Account"); 
    }
}