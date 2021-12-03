import { Injectable } from '@nestjs/common';
import { BranchRepository } from './branch.repository';

@Injectable()
export class BranchesService { 
    constructor(private branchRepository: BranchRepository) {}

    async getAll(): Promise<any> {
        return await this.branchRepository.findAll(); 
    } 

    async getOne(id: string): Promise<any> { 
       return await this.branchRepository.findOne({"id": id}); 
    }  

    async addBranch(data): Promise<any> { 
        return await this.branchRepository.create(data); 
    } 

    async updateBranch(data): Promise<any>  { 
        return await this.branchRepository.updateOne(data.id, data); 
    } 

    async deleteBranch(id: string): Promise<any>  { 
        return await this.branchRepository.delete(id); 
    }
}
