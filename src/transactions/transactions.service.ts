import { Injectable } from '@nestjs/common';
import { AccountRepository } from 'src/accounts/accounts.repository';
import { AddTransactionDto } from './dto/AddTransactionDto';
import { TransactionException } from './transaction.exceptions';
import { TransactionRepository } from './transactions.repository';



@Injectable()
export class TransactionsService {
    constructor(private transactionRepository: TransactionRepository, 
                private accountRepository: AccountRepository, 
        ) {}

    async getAll(): Promise<any> {
        return await this.transactionRepository.findAll(); 
    } 

    async getOne(id: string): Promise<any> { 
       return await this.transactionRepository.findOne({"id": id}); 
    }  

    async addTransaction(transaction: AddTransactionDto): Promise<any> { 
        if(!transaction.from || !transaction.amount || !transaction.to) { 
            throw new TransactionException("Missing important data to perform exception", 400);  
        } 
        const fromAccount = await this.accountRepository.findOne({"id": transaction.from}); 
        const toAccount = await this.accountRepository.findOne({"id":  transaction.to}); 
        if(fromAccount.status == "closed" || toAccount.status == "closed") { 
            throw new TransactionException("one of the accounts is closed", 400); 
        }    
        return await this.transactionRepository.create(transaction); 
    } 

    async updateTransaction(data): Promise<any>  { 
        return await this.transactionRepository.updateOne(data.id, data); 
    } 

    async deleteTransaction(id: string): Promise<any>  { 
        return await this.transactionRepository.delete(id); 
    }
}
