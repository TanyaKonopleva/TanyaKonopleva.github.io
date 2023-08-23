export class GifsView {
    gifsWrap;
    input;
    searchBtn;

    constructor() {
        this.gifsWrap = document.querySelector('.giffs-wrap');

        this.input = document.querySelector('.search-input');
        this.searchBtn = document.querySelector('.search-button');
    }


    renderHTML(gifs) {
        this.clearGifsWrap();

        const html = gifs
            .map(({ images: { original: { url } } }) => this._getGifHTML(url)
            .join('');

        this.gifsWrap.innerHTML = html;
    }

    clearGifsWrap() {
        this.gifsWrap.innerHTML = '';
    }

    bindSearch(handler) {
        const method = () => {
            const searchTerm = this.input.value;
            handler(searchTerm);
        };
        this.searchBtn.addEventListener('click', method);
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                method();
            }
        })
    }

    _getGifHTML(gifUrl) {
        return `
            <div class="giffs-wrap__img">
              <img src="${gifUrl}" alt="giff">
              <div class="giffs-wrap__overlay">
                <a href="${gifUrl}" class="giffs-wrap__link" title="Copy link"></a>
              </div>
            </div>`;
    }
}

