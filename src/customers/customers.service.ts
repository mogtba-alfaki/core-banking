import { Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';
import { CustomerRepository } from './customer.repository';
import { AddCustomerDto } from './dto/AddCustomerDto';
import {compare, hash} from "bcryptjs"
import { CustomerLoginDto } from './dto/CustomerLoginDto';
import { CustomerException } from './CustomerException'; 
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class CustomersService { 
    constructor(private customerRepository: CustomerRepository, private jwtService: JwtService) {}

    async getAll(): Promise<Customer[]> {
        return await this.customerRepository.findAll(); 
    } 

    async getOne(id): Promise<Customer> { 
       return await this.customerRepository.findOne({"id": id}); 
    }  

    async addCustomer(data: AddCustomerDto): Promise<Customer> {  
        const customerFound = await this.customerRepository.findOneWithoutFailing({"phone_number": data.phone_number}); 
        if(customerFound) { 
            throw new CustomerException("this phone number already exists", 400); 
        }
        // hash the password 
        data.password = await hash(data.password, 12); 
        return await this.customerRepository.create(data); 
    }  

    async login(data: CustomerLoginDto): Promise<any> { 
        // find the customer with this phone number  
        const customerFound = await this.customerRepository.findOne({"phone_number": data.phone_number}); 
        // compare password  
        const passwordMatch = await compare(data.password, customerFound.password); 
        if(!passwordMatch) { 
            throw new CustomerException("Invalid credentials", 401)
        }  
        const payload = {id: customerFound.id} 
        const token = await this.jwtService.sign(payload); 
        return {token: token}; 
    }

    async updateCustomer(data): Promise<Customer>  { 
        return await this.customerRepository.updateOne(data.id, data); 
    } 

    async deleteCustomer(id: string): Promise<Customer>  { 
        return await this.customerRepository.delete(id); 
    }

}
