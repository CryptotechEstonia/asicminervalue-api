import Api from './api';
export declare namespace CoinsMap {
    interface Parameters {
        /**
         * array any valid coin code strings
         */
        codes: string[];
        /**
         * any valid coin or fiat code
         */
        currency?: string;
        /**
         * sorting parameter, rank, price, volume, code, name, age
         */
        sort?: string;
        /**
         * sorting order, ascending or descending
         */
        order?: string;
        /**
         * offset of the list, default 0
         */
        offset?: number;
        /**
         * limit of the list, default 0, maximum 100
         */
        limit?: number;
        /**
         * to include full coin information or not
         */
        meta?: boolean;
    }
    type Response = Coin[];
    interface Coin {
        /**
         * coin's code
         */
        code: string;
        /**
         * coin rate in the specified currency
         */
        rate: number;
        /**
         * 24-hour volume of coin
         */
        volume: number;
        /**
         * market cap of coin
         */
        cap: number;
        /**
         * rates of change
         */
        delta: Delta;
    }
    interface Delta {
        /**
         * rate of change in the last hour
         */
        hour: number;
        /**
         * rate of change in the last 24 hours
         */
        day: number;
        /**
         * rate of change in the last 7 days
         */
        week: number;
        /**
         * rate of change in the last 30 days
         */
        month: number;
        /**
         * rate of change in the last 90 days
         */
        quarter: number;
        /**
         * rate of change in the last 365 days
         */
        year: number;
    }
}
export type CoinsRequestParameters = CoinsMap.Parameters;
export type CoinsEndpoint = '/coins/map';
export default class CoinsApi {
    private readonly base;
    private readonly api;
    constructor(api: Api);
    /**
     * Assorted information for a custom map of coins.
     */
    map(parameters: CoinsMap.Parameters): Promise<CoinsMap.Response>;
}
//# sourceMappingURL=coins.d.ts.map