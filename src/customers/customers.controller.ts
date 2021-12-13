import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { AddCustomerDto } from './dto/AddCustomerDto';
import { CustomerLoginDto } from './dto/CustomerLoginDto';

@Controller('/customers')
export class CustomersController {
    constructor(private customerService: CustomersService){}

    @Get("/allCustomers")
   async getAll(): Promise<any> { 
        return await this.customerService.getAll(); 
    }

    @Get("/customer") 
    async getOne(@Query('id') id: string): Promise<any> {  
            console.log(id); 
            return await this.customerService.getOne(id); 
    }

    @Post("/addCustomer") 
    async addCustomer(@Body() customerData: AddCustomerDto): Promise<any> {
        return await this.customerService.addCustomer(customerData);
    }  

    @Post("/login") 
    async login(@Body() customerData: CustomerLoginDto): Promise<string> { 
        return await this.customerService.login(customerData); 
    }

    @Patch("/updateCustomer") 
    async updateCustomer(@Body() customerData): Promise<any> { 
        return await this.customerService.updateCustomer(customerData); 
    }

    @Delete("/deleteCustomer") 
    async deleteCustomer(@Body("id") id: string): Promise<any> { 
        return await this.customerService.deleteCustomer(id); 
    }
}
