import type { ProfitabilityEndpoint } from './profitability';
import ProfitabilityApi from './profitability';
export interface RequestParametersElectricity {
    /**
     * Example: 'EUR'
     */
    currency: string;
    /**
     * Example: 0.13
     * Warning: do not use `0` because it returns default price, instead use `0.00001`
     */
    electricitycost: number;
}
export type RequestParameters = RequestParametersElectricity;
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