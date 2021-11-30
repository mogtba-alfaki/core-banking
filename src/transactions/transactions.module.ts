import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TransactionRepository } from './transactions.repository';
import { AccountRepository } from 'src/accounts/accounts.repository';

@Module({
  providers: [TransactionsService, TransactionRepository, AccountRepository],
  controllers: [TransactionsController]
})
export class TransactionsModule {}
