import type { CoinsEndpoint, CoinsMap } from './coins';
import CoinsApi from './coins';
export interface RequestParameters extends Object {
}
export type RequestResponse = CoinsMap.Response;
export type Endpoint = CoinsEndpoint;
export default class Api {
    private readonly base;
    private readonly token;
    private readonly headers;
    private readonly config;
    readonly coins: CoinsApi;
    constructor(token: string);
    request<T>(endpoint: Endpoint, parameters: RequestParameters): Promise<T>;
}
//# sourceMappingURL=api.d.ts.map