import { Module } from '@nestjs/common';
import { BranchRepository } from './branch.repository';
import { BranchesController } from './branches.controller';
import { BranchesService } from './branches.service';

@Module({
  controllers: [BranchesController],
  providers: [BranchesService, BranchRepository]
})
export class BranchesModule {}
