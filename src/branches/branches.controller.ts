import { Controller, Get, Query, Post, Body, Patch, Delete} from '@nestjs/common';
import { Branch } from './branch.entity';
import { BranchesService } from './branches.service';

@Controller('/branches')
export class BranchesController { 
    constructor(private branchService: BranchesService){}

    @Get("/allBranches")
   async getAll(): Promise<Branch[]> { 
        return await this.branchService.getAll(); 
    }

    @Get("/branch") 
    async getOne(@Query('id') id: string): Promise<Branch> {  
            return await this.branchService.getOne(id); 
    }

    @Post("/branch/atm") 
    async fillAtm(@Body() body): Promise<Branch> { 
        return await this.branchService.fillAtm(body); 
    } 

    @Post("/branch") 
    async addBranch(@Body() branchData): Promise<Branch> {
        return await this.branchService.addBranch(branchData);
    } 

    @Patch("/branch") 
    async updateBranch(@Body() branchData): Promise<Branch> { 
        return await this.branchService.updateBranch(branchData); 
    }

    @Delete("/branch") 
    async deleteBranch(@Body("id") id: string): Promise<Branch> { 
        return await this.branchService.deleteBranch(id); 
    }
}
