import { Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';

@Injectable()
export class CustomersService { 

    async getAll(): Promise<any> {
        return await Customer.findAll(); 
    }
}
