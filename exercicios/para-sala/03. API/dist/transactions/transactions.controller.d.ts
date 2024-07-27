import { TransactionsService } from './transactions.service';
import { Transaction, TransactionType } from './transactions.model';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    createTransaction(accountId: number, amount: number, type: TransactionType): Transaction;
    findAll(): Transaction[];
    updateTransaction(id: number, accountId: number, amount: number, type: TransactionType, date: Date): Transaction;
    removeTransaction(id: number): void;
}
