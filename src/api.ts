// Typing
import type { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios'
import type { ProfitabilityEndpoint, ProfitabilityList } from './profitability'

// Dependencies
import axios from 'axios'
import { parse } from 'node-html-parser'

// Api
import ProfitabilityApi from './profitability'

// Inline typing
export interface RequestParameters extends Object {}

export type Endpoint = ProfitabilityEndpoint

// Default export
export default class Api {
	private readonly base: string = 'https://api.livecoinwatch.com'
	private readonly token: string

	private readonly headers: RawAxiosRequestHeaders
	private readonly config: AxiosRequestConfig

	readonly coins: ProfitabilityApi

	constructor(token: string) {
		this.token = token

		this.headers = { }

		this.config = {
			headers: this.headers
		}

		this.coins = new ProfitabilityApi(this)
	}

	async request(endpoint: Endpoint, parameters?: RequestParameters) {
		const url = this.base + endpoint

		const response = await axios.post(url, parameters, this.config)

		return parse(response.data)
	}
}
