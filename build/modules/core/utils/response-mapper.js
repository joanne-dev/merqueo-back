"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseMapper {
    mapResponseSuccessful(data) {
        return {
            status: 200,
            data
        };
    }
    mapResponseFailed(data) {
        return {
            status: 500,
            data
        };
    }
}
const responseMapper = new ResponseMapper();
exports.default = responseMapper;
//# sourceMappingURL=response-mapper.js.map