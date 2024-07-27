import { AccountsService } from './accounts.service';
import { Account } from './account.model';
export declare class AccountsController {
    private readonly accountsService;
    constructor(accountsService: AccountsService);
    createAccount(name: string, balance: number): Account;
    findAll(): Account[];
    findById(id: number): Account;
    getTotalBalance(): {
        totalBalance: number;
    };
    updateBalance(id: number, newBalance: number): Account;
    removeAccount(id: number): void;
}
