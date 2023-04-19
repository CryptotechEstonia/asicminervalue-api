"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROFITABILITY_TABLE = void 0;
exports.PROFITABILITY_TABLE = 'table#datatable_profitability';
const parseRow = ({ childNodes: nodes }) => ({
    name: nodes[0].querySelector('a').childNodes[2].innerText.split(' (')[0],
    model: nodes[0].querySelector('a').childNodes[2].innerText,
    producer: nodes[0].querySelector('a').childNodes[0].innerText,
    full: nodes[0].attrs['data-search'].replace('undefined', '').trim(),
    release: nodes[1].attrs['data-sort'],
    hashrate: Number(nodes[2].attrs['data-sort']),
    power: Number(nodes[3].attrs['data-sort']),
    noise: Number(nodes[4].attrs['data-sort']),
    algo: nodes[5].attrs['data-sort'],
    profit: Math.floor(Number(nodes[6].attrs['data-sort']) * 100)
});
class ProfitabilityApi {
    constructor(api) {
        this.base = '/';
        this.api = api;
    }
    async list(parameters) {
        const dom = await this.api.request('/');
        const table = dom.querySelector(exports.PROFITABILITY_TABLE);
        const tbody = table.childNodes[1];
        const profitability = tbody.childNodes.map(parseRow);
        if (parameters === undefined)
            return profitability;
        const { models } = parameters;
        if (models === undefined)
            return profitability;
        return profitability
            .filter(({ model }) => models.includes(model) === true);
    }
}
exports.default = ProfitabilityApi;
//# sourceMappingURL=profitability.js.map