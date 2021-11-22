import { Controller } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('/customers')
export class CustomersController {
    constructor(private customerService: CustomersService){}

   async getAll(): Promise<any> { 
        return await this.customerService.getAll(); 
    }

}
