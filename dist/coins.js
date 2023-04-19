"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CoinsApi {
    constructor(api) {
        this.base = '/coins';
        this.api = api;
    }
    /**
     * Assorted information for a custom map of coins.
     */
    map(parameters) {
        return this.api.request('/coins/map', parameters);
    }
}
exports.default = CoinsApi;
//# sourceMappingURL=coins.js.map