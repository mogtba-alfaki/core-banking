import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { AccountRepository } from './accounts.repository';

@Module({
  providers: [AccountsService, AccountRepository],
  controllers: [AccountsController], 
})
export class AccountsModule {}
