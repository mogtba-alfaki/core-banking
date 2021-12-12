import { Injectable } from '@nestjs/common';
import { Branch } from './branch.entity';
import { BranchRepository } from './branch.repository';

@Injectable()
export class BranchesService { 
    constructor(private branchRepository: BranchRepository) {}

    async getAll(): Promise<Branch[]> {
        return await this.branchRepository.findAll(); 
    } 

    async getOne(id: string): Promise<Branch> { 
       return await this.branchRepository.findOne({"id": id}); 
    }  

    async addBranch(data): Promise<Branch> { 
        return await this.branchRepository.create(data); 
    } 

    async updateBranch(data): Promise<Branch>  { 
        return await this.branchRepository.updateOne(data.id, data); 
    } 

    async deleteBranch(id: string): Promise<Branch>  { 
        return await this.branchRepository.delete(id); 
    }
}
