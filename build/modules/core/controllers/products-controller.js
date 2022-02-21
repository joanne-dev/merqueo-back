"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const products_service_1 = __importDefault(require("../services/products-service"));
const products_mapper_1 = __importDefault(require("../utils/products-mapper"));
const response_mapper_1 = __importDefault(require("../utils/response-mapper"));
class ProductsController {
    getProducts(rq, rs) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                const products = yield products_service_1.default.getProducts();
                const productsForFront = products_mapper_1.default.mapProductsFrontEndWeb(products);
                response = response_mapper_1.default.mapResponseSuccessful(productsForFront);
            }
            catch (error) {
                console.log(error);
                response = response_mapper_1.default.mapResponseFailed(error);
            }
            finally {
                rs.status(response.status).json(response);
            }
        });
    }
}
exports.ProductsController = ProductsController;
const productsController = new ProductsController();
exports.default = productsController;
//# sourceMappingURL=products-controller.js.map