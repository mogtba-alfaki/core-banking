import { BadRequestException, Injectable } from '@nestjs/common';
import { CustomerRepository } from 'src/customers/customer.repository';
import { AccountRepository } from './accounts.repository';
import { AccountEcxeption } from './AcountExceptions';

@Injectable()
export class AccountsService {
    constructor(
        private accountRepository: AccountRepository,
        private customerRepository: CustomerRepository){}
    async getAll(): Promise<any> {
        return await this.accountRepository.findAll(); 
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
        return await this.accountRepository.create(data); 
    } 

    async updateAccount(data): Promise<any>  { 
        return await this.accountRepository.updateOne(data.id, data); 
    } 

    async deleteAccount(id: string): Promise<any>  { 
        return await this.accountRepository.delete(id); 
    }
}
