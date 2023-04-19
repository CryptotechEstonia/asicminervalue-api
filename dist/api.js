"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const axios_1 = __importDefault(require("axios"));
const node_html_parser_1 = require("node-html-parser");
// Api
const profitability_1 = __importDefault(require("./profitability"));
// Default export
class Api {
    constructor() {
        this.base = 'https://www.asicminervalue.com';
        this.headers = {};
        this.config = {
            headers: this.headers
        };
        this.coins = new profitability_1.default(this);
    }
    async request(endpoint, parameters) {
        const url = this.base + endpoint;
        const response = await axios_1.default.post(url, parameters, this.config);
        return (0, node_html_parser_1.parse)(response.data);
    }
}
exports.default = Api;
//# sourceMappingURL=api.js.map