"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const axios_1 = __importDefault(require("axios"));
// Api
const coins_1 = __importDefault(require("./coins"));
// Default export
class Api {
    constructor(token) {
        this.base = 'https://api.livecoinwatch.com';
        this.token = token;
        this.headers = {
            "content-type": "application/json",
            "x-api-key": this.token,
        };
        this.config = {
            headers: this.headers
        };
        this.coins = new coins_1.default(this);
    }
    async request(endpoint, parameters) {
        const url = this.base + endpoint;
        const response = await axios_1.default.post(url, parameters, this.config);
        return response.data;
    }
}
exports.default = Api;
//# sourceMappingURL=api.js.map