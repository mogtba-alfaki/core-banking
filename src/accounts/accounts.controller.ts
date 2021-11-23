import { Controller } from '@nestjs/common';
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

    @Delete() 
    async deleteAccount(@Body() id: string): Promise<any> { 
        return await this.accountService.deleteAccount(id); 
    }
}
