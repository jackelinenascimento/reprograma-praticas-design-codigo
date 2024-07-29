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
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const transactions_model_1 = require("./transactions.model");
const accounts_service_1 = require("../accounts/accounts.service");
const fs = require("fs");
const path = require("path");
let TransactionsService = class TransactionsService {
    constructor(accountsService) {
        this.accountsService = accountsService;
        this.filePath = path.resolve('src/transactions/transactions.json');
        const transactions = this.readTransactions();
        this.idCounter = transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 1;
    }
    readTransactions() {
        const data = fs.readFileSync(this.filePath, 'utf8');
        return JSON.parse(data);
    }
    writeTransactions(transactions) {
        fs.writeFileSync(this.filePath, JSON.stringify(transactions, null, 2), 'utf8');
    }
    createTransaction(accountId, amount, type) {
        const account = this.accountsService.findById(accountId);
        if (!account) {
            throw new common_1.NotFoundException('Account not found');
        }
        const newTransaction = new transactions_model_1.Transaction(this.idCounter++, accountId, amount, type, new Date());
        const transactions = this.readTransactions();
        transactions.push(newTransaction);
        this.writeTransactions(transactions);
        if (type === transactions_model_1.TransactionType.DEBIT) {
            account.balance -= amount;
        }
        else {
            account.balance += amount;
        }
        this.accountsService.updateBalance(accountId, account.balance);
        return newTransaction;
    }
    findAll() {
        return this.readTransactions();
    }
    updateTransaction(transactionUpdated) {
        const listOfTransactions = this.readTransactions();
        const transactionIndex = listOfTransactions.findIndex(trans => trans.id === transactionUpdated.id);
        if (transactionIndex === -1) {
            throw new common_1.NotFoundException('Transaction not found');
        }
        const updatedTransaction = {
            ...transactionUpdated,
        };
        listOfTransactions[transactionIndex] = updatedTransaction;
        this.writeTransactions(listOfTransactions);
        return updatedTransaction;
    }
    removeTransaction(id) {
        const listOfTransactions = this.readTransactions();
        const index = listOfTransactions.findIndex(transaction => transaction.id === id);
        if (index < 0) {
            throw new common_1.NotFoundException('Transaction not found');
        }
        listOfTransactions.splice(index, 1);
        this.writeTransactions(listOfTransactions);
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [accounts_service_1.AccountsService])
], TransactionsService);
//# sourceMappingURL=transactions.service.js.map