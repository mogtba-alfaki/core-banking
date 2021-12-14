import { Controller, Get, Query, Post, Body, Patch, Delete} from '@nestjs/common';
import { BranchesService } from './branches.service';

@Controller('/branches')
export class BranchesController { 
    constructor(private branchService: BranchesService){}

    @Get("/allBranches")
   async getAll(): Promise<any> { 
        return await this.branchService.getAll(); 
    }

    @Get("/branch") 
    async getOne(@Query('id') id: string): Promise<any> {  
            return await this.branchService.getOne(id); 
    }

    @Post("/fillAtm") 
    async fillAtm(@Body() body): Promise<any> { 
        return await this.branchService.fillAtm(body); 
    } 

    @Post("/addBranch") 
    async addBranch(@Body() branchData): Promise<any> {
        return await this.branchService.addBranch(branchData);
    } 

    @Patch("/updateBranch") 
    async updateBranch(@Body() branchData): Promise<any> { 
        return await this.branchService.updateBranch(branchData); 
    }

    @Delete("/deleteBranch") 
    async deleteBranch(@Body("id") id: string): Promise<any> { 
        return await this.branchService.deleteBranch(id); 
    }
}
