import { BadRequestException, Injectable } from '@nestjs/common';
import { CustomerRepository } from 'src/customers/customer.repository';
import { AccountRepository } from './accounts.repository';
import { AccountEcxeption } from './AcountExceptions';

@Injectable()
export class AccountsService {

    constructor(private accountRepository: AccountRepository,
    private customerRepository: CustomerRepository){}
    
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
            throw new AccountEcxeption("this customer already has an account", 400); 
        }
        data.open_date = new Date();  
        data.status = "open";  
        return await this.accountRepository.create(data); 
    }   


    async depositMoney(data: {customer_id: string, amount: number}): Promise<any> { 
        const account = await this.accountRepository.findOne({customer_id: data.customer_id}); 
        if(account.status == "clesed") { 
            throw new AccountEcxeption("this account is closed cannot deposit money", 400); 
        } 
       return  await this.accountRepository.updateOne(account.id, {balance: account.balance + data.amount}); 
    }
    
    async withdrawalMoney(data: {customer_id: string, amount: number} ): Promise<any> {
        const account = await this.accountRepository.findOne({customer_id: data.customer_id}); 
        if(account.balance < data.amount) { 
            throw new AccountEcxeption("your account balance is less than the withdrawal amount", 400); 
        }  
        return await this.accountRepository.updateOne(account.id, {balance: account.balance - data.amount}); 
    }   
     

    async updateAccount(data): Promise<any>  { 
        return await this.accountRepository.updateOne(data.id, data); 
    } 

    async deleteAccount(id: string): Promise<any>  { 
        return await this.accountRepository.delete(id); 
    }
}
