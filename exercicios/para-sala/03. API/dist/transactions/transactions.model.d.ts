export declare enum TransactionType {
    DEBIT = "debit"
}
export declare class Transaction {
    id: number;
    accountId: number;
    amount: number;
    type: TransactionType;
    date: Date;
    constructor(id: number, accountId: number, amount: number, type: TransactionType, date: Date);
}
