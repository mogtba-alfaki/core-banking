import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/util/BaseRepository";
import { Customer } from "./customer.entity";
@Injectable() 
export class CustomerRepository extends BaseRepository { 
    constructor() { 
        super(Customer, "customer")
    }
}