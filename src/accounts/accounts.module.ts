import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { AccountRepository } from './accounts.repository';
import { CustomerRepository } from 'src/customers/customer.repository';
import { TransactionRepository } from 'src/transactions/transactions.repository';

@Module({
  providers: [AccountsService, AccountRepository, CustomerRepository,TransactionRepository],
  controllers: [AccountsController], 
})
export class AccountsModule {}
