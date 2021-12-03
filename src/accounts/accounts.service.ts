import { BadRequestException, Injectable } from '@nestjs/common';
import { CustomerRepository } from 'src/customers/customer.repository';
import { TransactionRepository } from 'src/transactions/transactions.repository';
import { AccountRepository } from './accounts.repository';
import { AccountException } from './AcountExceptions';

@Injectable()
export class AccountsService {

    constructor(private accountRepository: AccountRepository,
                private customerRepository: CustomerRepository, 
                private transactionRepository: TransactionRepository){}
    
    async getAll(): Promise<any> { 
        return  await this.accountRepository.findAll();  
    } 

    async getOne(id: string): Promise<any> { 
       return await this.accountRepository.findOne({id: id}); 
    }  

    async addAccount(data): Promise<any> {  
        if(!data.customer_id) {
            throw new BadRequestException("customer id is missing on te request")
        } 
        const doseCustomerExists = await this.customerRepository.findOne({"id": data.customer_id}); 
        const customerAlreadyHasAccount = await this.accountRepository.findWitoutFailing({customer_id: data.customer_id}); 
        if(customerAlreadyHasAccount) { 
            throw new AccountException("this customer already has an account", 400); 
        }
        data.open_date = new Date();  
        data.status = "open";  
        return await this.accountRepository.create(data); 
    }   
    
    async makeTransaction(data): Promise<any> { 
        // find the from account and check if it's balance is valid  
        const fromAccount = await this.accountRepository.findOne({"id": data.from})
        this.checkAccountStatus(fromAccount.status); 
        if(fromAccount.balance < data.amount){ 
                throw new AccountException("your account blanace is less than the transfer amount", 400); 
        } 
        // find the to account and check if it is not closed 
        const toAccount = await this.accountRepository.findOne({"id": data.to}); 
        this.checkAccountStatus(toAccount.status); 
        // deposite the money into the to account  
        await this.accountRepository.updateOne(toAccount.id, {"balance": toAccount.balance + data.amount}); 
        // substract the money from te from account   
        await this.accountRepository.updateOne(fromAccount.id, {"balance": fromAccount.balance - data.amount});
        // insert the trasaction to the transactions table  
        const transaciton = await this.transactionRepository.create(data); 
        // return transaciton details 
        return transaciton; 
    }

    async depositMoney(data: {customer_id: string, amount: number}): Promise<any> { 
        const account = await this.accountRepository.findOne({customer_id: data.customer_id}); 
        if(account.status == "closed") { 
            throw new AccountException("this account is closed cannot deposit money", 400); 
        } 
       return  await this.accountRepository.updateOne(account.id, {balance: account.balance + data.amount}); 
    }
    
    async withdrawalMoney(data: {customer_id: string, amount: number} ): Promise<any> {
        const account = await this.accountRepository.findOne({customer_id: data.customer_id}); 
        if(account.status == "closed") { 
            throw new AccountException("this account is closed cannot deposit money", 400); 
        } 
        if(account.balance < data.amount) { 
            throw new AccountException("your account balance is less than the withdrawal amount", 400); 
        }  
        return await this.accountRepository.updateOne(account.id, {balance: account.balance - data.amount}); 
    }   
     
    async closeAccount(id: string): Promise<any> { 
        const account = await this.accountRepository.findOne({"id": id}); 
        if(account.status == "closed") {
            throw new AccountException("this account already closed", 400); 
        }   
        return await this.accountRepository.updateOne(id, {"status": "closed"}); 
    } 

    async openAccount(id: string): Promise<any> { 
        const account = await this.accountRepository.findOne({"id": id}); 
        if(account.status == "open") {
            throw new AccountException("this account already opened", 400); 
        }   
        return await this.accountRepository.updateOne(id, {"status": "open"}); 
    }

    async getAccountByCustomerId(customer_id: string): Promise<any> { 
         await this.customerRepository.findOne({"id": customer_id}); 
         const account  = await this.accountRepository.findOne({"customer_id": customer_id}); 
        if(account.status == "closed") {
            throw new AccountException("this account is closed", 400)
        } 
        return account; 
    } 

    async updateAccount(data): Promise<any>  { 
        return await this.accountRepository.updateOne(data.id, data); 
    } 

    async deleteAccount(id: string): Promise<any>  { 
        return await this.accountRepository.delete(id); 
    } 

    private checkAccountStatus(status: string): void { 
        if(status == "closed") { 
            throw new AccountException("this account is closed", 400); 
        }
    }
}

