import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CustomersModule } from './customers/customers.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      isGlobal: true, 
    }), 
    CustomersModule, AccountsModule, 
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
