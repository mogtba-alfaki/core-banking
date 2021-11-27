import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { AccountRepository } from './accounts.repository';
import { CustomerRepository } from 'src/customers/customer.repository';

@Module({
  providers: [AccountsService, AccountRepository, CustomerRepository],
  controllers: [AccountsController], 
})
export class AccountsModule {}
