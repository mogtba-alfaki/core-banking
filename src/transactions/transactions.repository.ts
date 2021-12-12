import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/util/BaseRepository";
import { Transaction } from "./transaction.entity";


@Injectable() 
export class TransactionRepository extends BaseRepository<Transaction> { 
    constructor() { 
        super(Transaction, "Transaction")
    }
}