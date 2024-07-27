import { Account } from './account.model';
export declare class AccountsServicse {
    private accounts;
    private idCounter;
    createAccount(name: string, balance: number): Account;
    findAll(): Account[];
    findById(id: number): Account;
    getTotalBalance(): number;
    updateBalance(id: number, newBalance: number): Account;
}
