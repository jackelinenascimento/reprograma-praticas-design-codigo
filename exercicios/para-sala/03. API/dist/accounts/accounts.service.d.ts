import { Account } from './account.model';
export declare class AccountsService {
    private readonly filePath;
    private idCounter;
    constructor();
    private readAccounts;
    private writeAccounts;
    findById(id: number): Account;
    getTotalBalance(): number;
    updateBalance(id: number, newBalance: number): Account;
    createAccount(name: string, balance: number): Account;
    findAll(): Account[];
    removeAccount(id: number): void;
}
