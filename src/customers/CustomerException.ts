
export class CustomerException extends Error { 
    public statusCode: number; 
    constructor(message: string, statusCode: number) { 
        super(); 
        this.message = message; 
        this.statusCode = statusCode; 
    }
}