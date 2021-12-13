import { NotFoundException } from "@nestjs/common";
import {randomUUID} from "crypto"
import { Model } from "sequelize/dist";

export class BaseRepository<T extends Model>{ 
    constructor(private model: any, private modelName: string) {
    }
    async findAll(whereQlause?, attributes?): Promise<T[]>{  
        return await this.model.findAll({where: whereQlause, attributes});       
    } 

    async findOne(whereQlause?, attributes?): Promise<T>{ 
        const result =  await this.model.findOne({where: whereQlause , attributes})
        if(!result) { 
            throw new NotFoundException(`${this.modelName} Not Found`); 
        } 
        return result; 
    }    

    async findOneWithoutFailing(whereQlause?, attributes?): Promise<T>{ 
        return  await this.model.findOne({where: whereQlause , attributes})
    }    

    async create(data): Promise<T>{ 
        // data.id = Date.now().toString();  
        data.id  = randomUUID(); 
        return await this.model.create(data); 
    } 

    async updateOne(id: string, data): Promise<T>{
    const modelFound = await this.findOne({id: id});  
    if(!modelFound) { 
        throw new NotFoundException(`${this.modelName} Not Found`); 
    }
        return await modelFound.update(data); 
    } 

    async delete(id: string): Promise<T>{
        return await this.model.destroy({where:{id: id}}); 
    } 

    async count(whereQlause): Promise<T>{ 
        return await this.model.count({where: whereQlause}); 
    }  
}