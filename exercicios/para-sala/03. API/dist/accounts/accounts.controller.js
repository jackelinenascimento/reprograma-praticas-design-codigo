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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsController = void 0;
const common_1 = require("@nestjs/common");
const accounts_service_1 = require("./accounts.service");
const account_model_1 = require("./account.model");
let AccountsController = class AccountsController {
    constructor(accountsService) {
        this.accountsService = accountsService;
    }
    createAccount(name, balance) {
        return this.accountsService.createAccount(name, balance);
    }
    findAll() {
        return this.accountsService.findAll();
    }
    findById(id) {
        return this.accountsService.findById(id);
    }
    getTotalBalance() {
        const totalBalance = this.accountsService.getTotalBalance();
        return { totalBalance };
    }
    updateBalance(id, newBalance) {
        const updatedAccount = this.accountsService.updateBalance(id, newBalance);
        return updatedAccount;
    }
    removeAccount(id) {
        return this.accountsService.removeAccount(id);
    }
};
exports.AccountsController = AccountsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('balance')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", account_model_1.Account)
], AccountsController.prototype, "createAccount", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AccountsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", account_model_1.Account)
], AccountsController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('total/balance'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AccountsController.prototype, "getTotalBalance", null);
__decorate([
    (0, common_1.Patch)(':id/balance-update'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('balance')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", account_model_1.Account)
], AccountsController.prototype, "updateBalance", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AccountsController.prototype, "removeAccount", null);
exports.AccountsController = AccountsController = __decorate([
    (0, common_1.Controller)('accounts'),
    __metadata("design:paramtypes", [accounts_service_1.AccountsService])
], AccountsController);
//# sourceMappingURL=accounts.controller.js.map