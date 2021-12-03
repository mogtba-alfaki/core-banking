import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CustomersModule } from './customers/customers.module';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';
import { BranchesModule } from './branches/branches.module';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      isGlobal: true, 
    }), 
    CustomersModule, AccountsModule, TransactionsModule, BranchesModule, 
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
