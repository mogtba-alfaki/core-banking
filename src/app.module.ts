import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CustomersModule } from './customers/customers.module';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      isGlobal: true, 
    }), 
    CustomersModule, AccountsModule, TransactionsModule, 
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
