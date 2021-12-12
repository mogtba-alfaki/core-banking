import { Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';
import { CustomerRepository } from './customer.repository';
import { AddCustomerDto } from './dto/AddCustomerDto';


@Injectable()
export class CustomersService { 
    constructor(private customerRepository: CustomerRepository) {}

    async getAll(): Promise<Customer[]> {
        return await this.customerRepository.findAll(); 
    } 

    async getOne(id): Promise<Customer> { 
       return await this.customerRepository.findOne({"id": id}); 
    }  

    async addCustomer(data: AddCustomerDto): Promise<Customer> { 
        return await this.customerRepository.create(data); 
    } 

    async updateCustomer(data): Promise<Customer>  { 
        return await this.customerRepository.updateOne(data.id, data); 
    } 

    async deleteCustomer(id: string): Promise<Customer>  { 
        return await this.customerRepository.delete(id); 
    }

}
