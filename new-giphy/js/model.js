export class GifsModel {
    constructor(apiService) {
        this.apiService = apiService;
    }

    async getTradingGifs() {
        return await this.apiService.getTrendingGifs();
    }

    async searchGifs(query) {
        return await this.apiService.searchGifs(query);
    }
}
