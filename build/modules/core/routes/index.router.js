"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = __importDefault(require("../controllers/indexController"));
const products_controller_1 = __importDefault(require("../controllers/products-controller"));
class IndexRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/health', indexController_1.default.Health);
        this.router.get('/products', products_controller_1.default.getProducts);
    }
}
const indexRouter = new IndexRouter();
exports.default = indexRouter.router;
//# sourceMappingURL=index.router.js.map