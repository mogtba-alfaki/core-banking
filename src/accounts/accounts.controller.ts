import { Controller, Patch } from '@nestjs/common';
import {Get, Post, Delete, Query, Body} from "@nestjs/common"; 
import { Account } from './account.entity';
import { AccountsService } from './accounts.service';
import { AddAccountDto } from './dto/addAccountDto';

@Controller('accounts')
export class AccountsController { 
    constructor(private accountService: AccountsService){}
    @Get("/allAccounts")
   async getAll(): Promise<Account[]> { 
        return await this.accountService.getAll(); 
    }

    @Get("/account") 
    async getOne(@Query('id') id: string): Promise<Account> { 
            return await this.accountService.getOne(id); 
    }

    @Post("/addAccount") 
    async addAccount(@Body() accountData: AddAccountDto): Promise<Account> {
        return await this.accountService.addAccount(accountData);
    } 

    @Patch("/deposit") 
    async deposit(@Body() body): Promise<Account> {   
        return await this.accountService.depositMoney(body); 
    } 

    @Patch("/withdrawal") 
    async withDrawal(@Body() body): Promise<Account> {   
        return await this.accountService.withdrawalMoney(body); 
    }  
    
    @Post("/transferMoney") 
    async transferMoney(@Body() body): Promise<Account> { 
        return await this.accountService.makeTransaction(body); 
    } 

    @Patch("/openAccount") 
    async openAccount(@Body("id") id:string): Promise<Account> { 
        return await this.accountService.openAccount(id); 
    } 
    
    @Patch("/closeAccount") 
    async closeAccount(@Body("id") id:string): Promise<Account> { 
        return await this.accountService.closeAccount(id); 
    }

    @Patch("/updateAccount") 
    async updateAccount(@Body() accountData): Promise<Account> { 
        return this.accountService.updateAccount(accountData); 
    }

    @Delete("/deleteAccount") 
    async deleteAccount(@Body("id") id : string): Promise<Account> {  
        console.log(id); 
        return await this.accountService.deleteAccount(id); 
    }
}
