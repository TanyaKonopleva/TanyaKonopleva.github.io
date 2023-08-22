export class GifsController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }


    async init() {
        const gifs = await this.model.getTradingGifs();
        this.view.renderHTML(gifs);

        this.view.bindSearch(this.handleSearch.bind(this));
    }

    async handleSearch(searchTerm) {
        const gifs = await this.model.searchGifs(searchTerm);
        this.view.renderHTML(gifs);
    }

}
