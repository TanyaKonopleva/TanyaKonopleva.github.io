var methods = (function() {
  var div = document.querySelector('.giffs-wrap'); // common container for giffs

  return {
    init: function() {
      trending.init();
      search.init();
      showMore.init();
    },

    getData: function(url) {
      var xhr = new XMLHttpRequest();
      var self = this;
      xhr.open('GET', url);
      xhr.onprogress = function(e) {
        document.querySelector('.preloader').style.display = 'flex';
      }
      xhr.onload = function() {
        document.querySelector('.preloader').style.display = 'none';
        if (xhr.status >= 200 && xhr.status < 400) {
          var data = JSON.parse(xhr.responseText);
          var giffsArr = data.data;
          self.appendHTML(giffsArr);
        };
      };
      xhr.send();

    },

    appendHTML: function(arr) {
      for (var i = 0; i < arr.length; i++) {
        var wrap = document.createElement('div'), //container for giffs
            img = document.createElement('img'), // for giffs
            overlay = document.createElement('div'), //overlay for hover effect
            link = document.createElement('a'); // link  for copy url of giffs

        wrap.classList.add('giffs-wrap__img'); 
        wrap.appendChild(img);
        img.src = arr[i].images.original.url; 
        div.appendChild(wrap);
        overlay.classList.add('giffs-wrap__overlay'); 
        link.classList.add('giffs-wrap__link');
        link.setAttribute('href', arr[i].images.original.url);
        link.title = 'Copy link';
        overlay.appendChild(link);
        wrap.appendChild(overlay);
      };
    }
  }
})();

var trending = (function() { 
  var url = 'https://api.giphy.com/v1/gifs/trending?&api_key=hklAv9L2KE8cxy1IuDjWtD05bheryIJs&limit=20';
  return {
    init: function() {
      window.addEventListener('DOMContentLoaded', function() { //show popular giffs after page load
        methods.getData(url);
      });
    }
  }
})();

var search = (function() {
  var div = document.querySelector('.giffs-wrap'),
      input = document.querySelector('.search-input'),
      searchBtn = document.querySelector('.search-button'),
      moreBtn = document.querySelector('.more-button'),
      offset = 0;

  function searchGiffs() {
    var input = document.querySelector('.search-input').value;
    if (input === '') return;
    div.innerHTML = '';
    moreBtn.classList.add('active');
    var url = 'https://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=hklAv9L2KE8cxy1IuDjWtD05bheryIJs&limit=20';
    methods.getData(url);
  }
  return {
    init: function() {
      searchBtn.addEventListener('click', searchGiffs);

      input.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
          searchGiffs();
        }
      })
    }
  }
})();

var showMore = (function() {
  var moreBtn = document.querySelector('.more-button');
  var offset = 0;
  return {
    init: function() {
      moreBtn.addEventListener('click', function() {
        var input = document.querySelector('.search-input').value;
        offset += 5;
        var url = 'https://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=hklAv9L2KE8cxy1IuDjWtD05bheryIJs&limit=20&offset=' + offset;
        methods.getData(url);
      })
    }
  }
})();

var copyLink = (function() {
  var giffsWrap = document.querySelector('.giffs-wrap');
  giffsWrap.addEventListener('click', function(e) {
    var target = e.target;
    if (target.tagName === 'A') {
      e.preventDefault();
      var aux = document.createElement('input');
      var url = target.getAttribute('href');
      aux.setAttribute('value', url);
      document.body.appendChild(aux);
      aux.select();
      document.execCommand('copy');
      document.body.removeChild(aux);
    }
  });
})();


methods.init();








