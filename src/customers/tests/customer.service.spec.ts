import {Test} from "@nestjs/testing"; 
import { BaseRepository } from "../../util/BaseRepository";
import { CustomerRepository } from "../customer.repository";
import { CustomersService } from "../customers.service";

const mockCustomerRepo = () => ({
    getAll: jest.fn()
});  

const mockBaseRepo =() => ({

})


describe("Customer Service Tests", () => { 
    let customerService; 
    let customerRepository; 

    beforeEach(async() => { 
        const module = await Test.createTestingModule({
            providers: [ 
                CustomersService,  
                {provide: BaseRepository, useFactory: mockBaseRepo},
                {provide: CustomerRepository, useFactory: mockCustomerRepo} 
            ], 
        }).compile();  
    customerService = await  module.get(CustomersService);  
    customerRepository = await module.get(CustomerRepository)
    }) 

    it("should return an array of customers when calling get all", () => {  
        // customerRepository.getAll(); 
        // expect(customerRepository.getAll()).not.toHaveBeenCalled(); 
    })
})
