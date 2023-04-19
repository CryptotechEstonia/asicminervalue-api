import type { ProfitabilityEndpoint } from './profitability';
import ProfitabilityApi from './profitability';
export interface RequestParameters extends Object {
}
export type Endpoint = ProfitabilityEndpoint;
export default class Api {
    private readonly base;
    private readonly headers;
    private readonly config;
    readonly profitability: ProfitabilityApi;
    constructor();
    request(endpoint: Endpoint, parameters?: RequestParameters): Promise<import("node-html-parser").HTMLElement>;
}
//# sourceMappingURL=api.d.ts.map