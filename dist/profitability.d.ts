import type { HTMLElement } from 'node-html-parser';
import Api from './api';
export declare const PROFITABILITY_TABLE = "table#datatable_profitability";
export declare namespace ProfitabilityList {
    interface Parameters {
        models?: string[];
    }
    type Result = Profitability[];
    interface Profitability {
        /**
         * Display name
         */
        name: string;
        /**
         * Device model
         */
        model: string;
        /**
         * Brand producer
         */
        producer: string;
        /**
         * Full name with producer
         */
        full: string;
        /**
         * Month and year of release
         */
        release: string;
        /**
         * Produced hashrate
         */
        hashrate: number;
        /**
         * Power consumption in watts
         */
        power: number;
        /**
         * Noise production in db
         */
        noise: number;
        /**
         * Mining algorithm
         */
        algo: string;
        /**
         * Estimated profit in USD per day
         */
        profit: number;
    }
}
export type ProfitabilityEndpoint = '/';
export interface MyHTMLElement extends HTMLElement {
    childNodes: MyHTMLElement[];
}
export default class ProfitabilityApi {
    private readonly base;
    private readonly api;
    constructor(api: Api);
    list(parameters?: ProfitabilityList.Parameters): Promise<ProfitabilityList.Result>;
}
//# sourceMappingURL=profitability.d.ts.map