import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { Customer } from './customer.entity';
import { CustomersService } from './customers.service';
import { AddCustomerDto } from './dto/AddCustomerDto';
import { CustomerLoginDto } from './dto/CustomerLoginDto';

@Controller('/customers')
export class CustomersController {
    constructor(private customerService: CustomersService){}

    @Get("/allCustomers")
   async getAll(): Promise<Customer[]> { 
        return await this.customerService.getAll(); 
    }

    @Get("/customer") 
    async getOne(@Query('id') id: string): Promise<Customer> {  
            console.log(id); 
            return await this.customerService.getOne(id); 
    }

    @Post("/customer") 
    async addCustomer(@Body() customerData: AddCustomerDto): Promise<Customer> {
        return await this.customerService.addCustomer(customerData);
    }  

    @Post("/login") 
    async login(@Body() customerData: CustomerLoginDto): Promise<string> { 
        return await this.customerService.login(customerData); 
    }

    @Patch("/customer") 
    async updateCustomer(@Body() customerData): Promise<Customer> { 
        return await this.customerService.updateCustomer(customerData); 
    }

    @Delete("/customer") 
    async deleteCustomer(@Body("id") id: string): Promise<Customer> { 
        return await this.customerService.deleteCustomer(id); 
    }
}
