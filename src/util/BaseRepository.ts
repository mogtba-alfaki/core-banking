
export class BaseRepository{ 
    constructor(private model: any) {
    }
    async findAll(whereQlause?, attributes?): Promise<any>{  
        return await this.model.findAll({where: whereQlause, attributes});       
    } 

    async findOne(whereQlause?, attributes?): Promise<any>{ 
        return await this.model.findOne({where: whereQlause , attributes})
    }  

    async create(data): Promise<any>{ 
        data.id = Date.now().toString(); 
        return await this.model.create(data); 
    } 

    async updateOne(id: string, data): Promise<any>{
    const modelFound = await this.findOne({id: id});  
        return await modelFound.update(data); 
    } 

    async delete(id: string): Promise<any>{
        return await this.model.destroy({where:{id: id}}); 
    } 

    async count(whereQlause): Promise<any>{ 
        return await this.model.count({where: whereQlause}); 
    }  
}