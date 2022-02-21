"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_router_1 = __importDefault(require("./modules/core/routes/index.router"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(morgan_1.default('dev', {
    skip: (rq) => rq.url === '/health',
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(cors_1.default());
app.use('/', index_router_1.default);
app.use((req, res) => {
    return res.status(404).send({ message: `Route '${req.url}' Not found.` });
});
exports.default = app;
//# sourceMappingURL=app.js.map