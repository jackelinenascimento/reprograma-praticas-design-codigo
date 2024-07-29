"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
let AccountsService = class AccountsService {
    constructor() {
        this.filePath = path.resolve('src/accounts/accounts.json');
        const accounts = this.readAccounts();
        this.idCounter = accounts.length > 0 ? accounts[accounts.length - 1].id + 1 : 1;
    }
    readAccounts() {
        const data = fs.readFileSync(this.filePath, 'utf8');
        return JSON.parse(data);
    }
    writeAccounts(accounts) {
        fs.writeFileSync(this.filePath, JSON.stringify(accounts, null, 2), 'utf8');
    }
    findById(id) {
        const listOfAccounts = this.readAccounts();
        const account = listOfAccounts.find(account => account.id === id);
        if (!account) {
            throw new common_1.NotFoundException(`Account with id ${id} not found`);
        }
        return account;
    }
    getTotalBalance() {
        const listOfAccounts = this.readAccounts();
        return listOfAccounts.reduce((total, account) => total + account.balance, 0);
    }
    updateBalance(id, newBalance) {
        const listOfAccounts = this.readAccounts();
        const accountToUpdate = listOfAccounts.find(account => account.id === Number(id));
        if (!accountToUpdate) {
            throw new common_1.NotFoundException('Account not found');
        }
        accountToUpdate.balance = newBalance;
        this.writeAccounts(listOfAccounts);
        return accountToUpdate;
    }
    createAccount(name, balance) {
        const listOfAccounts = this.readAccounts();
        const newAccount = {
            id: this.idCounter++,
            name,
            balance,
        };
        listOfAccounts.push(newAccount);
        this.writeAccounts(listOfAccounts);
        return newAccount;
    }
    findAll() {
        return this.readAccounts();
    }
    removeAccount(id) {
        const listOfAccounts = this.readAccounts();
        const indexOfAccount = listOfAccounts.findIndex(account => account.id === id);
        if (indexOfAccount < 0) {
            throw new common_1.NotFoundException('Account not found');
        }
        listOfAccounts.splice(indexOfAccount, 1);
        this.writeAccounts(listOfAccounts);
    }
};
exports.AccountsService = AccountsService;
exports.AccountsService = AccountsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AccountsService);
//# sourceMappingURL=accounts.service.js.map