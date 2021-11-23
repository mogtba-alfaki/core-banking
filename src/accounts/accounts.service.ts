import { Injectable } from '@nestjs/common';
import { AccountRepository } from './accounts.repository';

@Injectable()
export class AccountsService {
    constructor(private accountRepository: AccountRepository) { 

    }
    async getAll(): Promise<any> {
        return await this.accountRepository.findAll(); 
    } 

    async getOne(id): Promise<any> { 
       return await this.accountRepository.findOne({id: id}); 
    }  

    async addAccount(data): Promise<any> { 
        return await this.accountRepository.create(data); 
    } 

    async updateAccount(data): Promise<any>  { 
        return await this.accountRepository.updateOne(data.id, data); 
    } 

    async deleteAccount(id: string): Promise<any>  { 
        return await this.accountRepository.delete(id); 
    }
}
