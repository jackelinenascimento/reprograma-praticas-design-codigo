import { Transaction, TransactionType } from './transactions.model';
import { AccountsService } from '../accounts/accounts.service';
export declare class TransactionsService {
    private readonly accountsService;
    private readonly filePath;
    private idCounter;
    constructor(accountsService: AccountsService);
    private readTransactions;
    private writeTransactions;
    createTransaction(accountId: number, amount: number, type: TransactionType): Transaction;
    findAll(): Transaction[];
    updateTransaction(transactionUpdated: Transaction): Transaction;
    removeTransaction(id: number): void;
}
