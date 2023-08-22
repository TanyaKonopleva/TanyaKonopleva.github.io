import { API_KEY, HOST } from './consts.js';

export class GifsApi {
    async getTrendingGifs(limit, offset) {
        const url = this._getURL('trending');
        const response = await fetch(url);
        const data = await response.json();
        return data.data;
    }

    async searchGifs(q) {
        const url = this._getURL('search', { q });
        const response = await fetch(url);
        const data = await response.json();
        return data.data;
    }

    _getURL(endpoint, params = {}) {
        const allParams = Object.assign(params, {
            api_key: API_KEY,
        })
        const base = `${HOST}${endpoint}`;
        let query = '';

        Object.keys(allParams).forEach((key, index) => {
            if (index === 0) {
                query += '?';
            } else {
                query += '&';
            }
            query += `${key}=${allParams[key]}`;
        });

        return `${base}${query}`;

    }
}
