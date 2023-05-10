import type { HTMLElement } from 'node-html-parser'

import Api, { RequestParameters } from './api'

export const PROFITABILITY_TABLE = 'table#datatable_profitability'

export namespace ProfitabilityList {
	export interface Parameters {
		models?: string[]
		request?: RequestParameters
	}

	export type Result = Profitability[]

	export interface Profitability {
		/**
		 * Display name
		 */
		name: string

		/**
		 * Device model
		 */
		model: string

		/**
		 * Brand producer
		 */
		producer: string

		/**
		 * Full name with producer
		 */
		full: string

		/**
		 * Month and year of release
		 */
		release: string

		/**
		 * Produced hashrate
		 */
		hashrate: number

		/**
		 * Power consumption in watts
		 */
		power: number

		/**
		 * Noise production in db
		 */
		noise: number

		/**
		 * Mining algorithm
		 */
		algo: string

		/**
		 * Estimated profit in USD per day
		 */
		profit: number
	}
}

export type ProfitabilityEndpoint = '/'

export interface MyHTMLElement extends HTMLElement {
	childNodes: MyHTMLElement[]
}

const parseRow = ({ childNodes: nodes }: MyHTMLElement): ProfitabilityList.Profitability => ({
	name: nodes[0].querySelector('a')!.childNodes[2].innerText.split(' (')[0],
	model: nodes[0].querySelector('a')!.childNodes[2].innerText,
	producer: nodes[0].querySelector('a')!.childNodes[0].innerText,
	full: nodes[0].attrs['data-search'].replace('undefined', '').trim(),
	release: nodes[1].attrs['data-sort'],
	hashrate: Number(nodes[2].attrs['data-sort']),
	power: Number(nodes[3].attrs['data-sort']),
	noise: Number(nodes[4].attrs['data-sort']),
	algo: nodes[5].attrs['data-sort'],
	profit: Math.floor(Number(nodes[6].attrs['data-sort']) * 100)
})

export default class ProfitabilityApi {
	private readonly base = '/'
	private readonly api: Api

	constructor(api: Api) {
		this.api = api
	}

	async list(parameters?: ProfitabilityList.Parameters): Promise<ProfitabilityList.Result> {
		const dom = await this.api.request('/', parameters?.request)

		const table = dom.querySelector(PROFITABILITY_TABLE) as MyHTMLElement
		const tbody = table.childNodes[1]

		const profitability = tbody.childNodes.map(parseRow)

		if (parameters === undefined)
			return profitability

		const { models } = parameters

		if (models === undefined)
			return profitability

		return profitability
			.filter(({ model }) => models.includes(model) === true)
	}
}
