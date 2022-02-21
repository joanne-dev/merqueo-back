"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    Health(rq, rs) {
        rs.status(200);
        rs.end('Hola mundo este controller quedo al pelo');
    }
}
const indexController = new IndexController();
exports.default = indexController;
//# sourceMappingURL=indexController.js.map