import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { AddTransactionDto } from './dto/AddTransactionDto';
import { TransactionsService } from './transactions.service';

@Controller('/transactions')
export class TransactionsController {
    constructor(private transactionService: TransactionsService){}

    @Get("/allTransactions")
   async getAll(): Promise<any> { 
        return await this.transactionService.getAll(); 
    }

    @Get("/transaction") 
    async getOne(@Query('id') id: string): Promise<any> {  
            console.log(id); 
            return await this.transactionService.getOne(id); 
    }
    
    @Post("/addTransaction") 
    async addTransaction(@Body() transactionData: AddTransactionDto): Promise<any> {
        return await this.transactionService.addTransaction(transactionData);
    } 

    @Patch("/updateTransaction") 
    async updateTransaction(@Body() transactionData): Promise<any> { 
        return await this.transactionService.updateTransaction(transactionData); 
    }

    @Delete("/deleteTransaction") 
    async deleteTransaction(@Body("id") id: string): Promise<any> { 
        return await this.transactionService.deleteTransaction(id); 
    }
}
