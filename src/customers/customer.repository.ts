import { Injectable } from "@nestjs/common";
import { BaseRepository } from "../util/BaseRepository";
import { Customer } from "./customer.entity";
@Injectable() 
export class CustomerRepository extends BaseRepository<Customer> { 
    constructor() { 
        super(Customer, "customer")
    } 
}