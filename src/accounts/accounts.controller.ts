import { Controller, Patch } from '@nestjs/common';
import {Get, Post, Delete, Query, Body} from "@nestjs/common"; 
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController { 
    constructor(private accountService: AccountsService){}
    @Get("/allAccounts")
   async getAll(): Promise<any> { 
        return await this.accountService.getAll(); 
    }

    @Get("/account") 
    async getOne(@Query('id') id: string): Promise<any> { 
            return await this.accountService.getOne(id); 
    }

    @Post("/addAccount") 
    async addAccount(@Body() accountData): Promise<any> {
        return await this.accountService.addAccount(accountData);
    } 

    @Patch("/deposit") 
    async deposit(@Body() body): Promise<any> {   
        return await this.accountService.depositMoney(body); 
    } 

    @Patch("/withdrawal") 
    async withDrawal(@Body() body): Promise<any> {   
        return await this.accountService.withdrawalMoney(body); 
    } 

    @Patch("/updateAccount") 
    async updateAccount(@Body() accountData): Promise<any> { 
        return this.accountService.updateAccount(accountData); 
    }

    @Delete("/deleteAccount") 
    async deleteAccount(@Body("id") id : string): Promise<any> {  
        console.log(id); 
        return await this.accountService.deleteAccount(id); 
    }
}
