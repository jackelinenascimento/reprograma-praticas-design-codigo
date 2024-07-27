"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsServicse = void 0;
const common_1 = require("@nestjs/common");
const account_model_1 = require("./account.model");
let AccountsServicse = class AccountsServicse {
    constructor() {
        this.accounts = [
            { id: 1, name: 'John Doe', balance: 1000 },
            { id: 2, name: 'Jane Doe', balance: 500 },
        ];
        this.idCounter = 1;
    }
    createAccount(name, balance) {
        const newAccount = new account_model_1.Account(this.idCounter++, name, balance);
        this.accounts.push(newAccount);
        return newAccount;
    }
    findAll() {
        return this.accounts;
    }
    findById(id) {
        return this.accounts.find(account => account.id === Number(id));
    }
    getTotalBalance() {
        console.log('teste', this.accounts.reduce((total, account) => total + account.balance, 0));
        return this.accounts.reduce((total, account) => total + account.balance, 0);
    }
    updateBalance(id, newBalance) {
        const account = this.findById(id);
        if (!account) {
            throw new common_1.NotFoundException('Account not found');
        }
        account.balance = newBalance;
        return account;
    }
};
exports.AccountsServicse = AccountsServicse;
exports.AccountsServicse = AccountsServicse = __decorate([
    (0, common_1.Injectable)()
], AccountsServicse);
//# sourceMappingURL=backupacservice.js.map