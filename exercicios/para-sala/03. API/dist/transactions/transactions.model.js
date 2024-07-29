"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.TransactionType = void 0;
var TransactionType;
(function (TransactionType) {
    TransactionType["DEBIT"] = "debit";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
class Transaction {
    constructor(id, accountId, amount, type, date) {
        this.id = id;
        this.accountId = accountId;
        this.amount = amount;
        this.type = type;
        this.date = date;
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=transactions.model.js.map