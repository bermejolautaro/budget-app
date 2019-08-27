export class Spending {

    description: string;
    date: Date;
    amount: number;

    constructor(description?: string, date?: Date | string, amount?: number) { 

        this.description = '';
        this.date = null;
        this.amount = 0;

        if(description !== undefined) {
            this.description = description;
        }
        if(date !== undefined) {
            this.date = new Date(date);
        }
        if(amount !== undefined) {
            this.amount = amount;
        }
    }

}