import { Module } from '@nestjs/common';
import { CustomerRepository } from './customer.repository';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';

@Module({  
  controllers: [CustomersController],
  providers: [CustomersService, CustomerRepository]
})
export class CustomersModule {}
