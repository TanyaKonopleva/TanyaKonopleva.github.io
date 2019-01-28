(function() {

  const HOST = 'https://api.giphy.com/v1/gifs/';
  const KEY = '&api_key=hklAv9L2KE8cxy1IuDjWtD05bheryIJs';
  const LIMIT = '&limit=20';
  const SEACRH = 'search?q=';
  const OFFSET = '&offset=';

  const div = document.querySelector('.giffs-wrap');
  const input = document.querySelector('.search-input');
  const searchBtn = document.querySelector('.search-button');
  const moreBtn = document.querySelector('.more-button');

  const getData = (url) => {
    fetch(url) //замена XHR на fetch
      .then((data) => data.json())
      .then(( {data} ) => appendHTML(data))
      .catch((err) => console.log(err));
  };

  const appendHTML = (arr) => { 
    let text = arr.map(( {images: {original: {url} }} ) => `<div class="giffs-wrap__img"> 
      <img src="${url}" alt="giff">
      <div class="giffs-wrap__overlay">
        <a href="${url}" class="giffs-wrap__link" title="Copy link"></a>
      </div>
      </div>`).join('');
    div.innerHTML = text;
  };

  const searchGiffs = () => {
    let val = input.value;
    if (!!val) {
      div.innerHTML = '';
      getData(`${HOST}${SEACRH}${val}${KEY}${LIMIT}`);
      moreBtn.classList.add('active');
    }
  };

  const showMore = () => {
    let val = input.value;
    let offsetNum = 0;
    getData(`${HOST}${SEACRH}${val}${KEY}${OFFSET}${LIMIT}${offsetNum}`);
    offsetNum += 5;
  };

  const copyLink = (target) => {
    let aux = document.createElement('input');
    let url = target.getAttribute('href');
    aux.setAttribute('value', url);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
  };

  window.addEventListener('DOMContentLoaded', getData(`${HOST}trending?${KEY}${LIMIT}`)); //show popular giffs after page load

  input.addEventListener('keydown', ( {key} ) => {
    if (key === 'Enter') searchGiffs();
  });

  searchBtn.addEventListener('click', searchGiffs);

  moreBtn.addEventListener('click', showMore);

  div.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      copyLink(e.target);
    }
  });
  
})();