import { BaseRepository } from "src/util/BaseRepository";
import { Branch } from "./branch.entity";

export class BranchRepository extends BaseRepository<Branch> { 

    constructor() { 
        super(Branch, "Branch"); 
    }
}