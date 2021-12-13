import { Module } from '@nestjs/common';
import { CustomerRepository } from './customer.repository';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import {JwtModule} from "@nestjs/jwt"; 
import {PassportModule} from "@nestjs/passport"; 

@Module({   
  imports: [
    JwtModule.register({
      secret: "somesecret",
    }), 

    PassportModule.register({ 
      defaultStrategy: "jwt" 
    })
  ], 
  controllers: [CustomersController],
  providers: [CustomersService, CustomerRepository]
})
export class CustomersModule {}
