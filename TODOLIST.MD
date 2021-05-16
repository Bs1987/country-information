# Steps

0. SETUP
- [x] Link .css file to HTML
- [x] Link .js file to HTML
- [x] Install npm
- [x] Install axios
- [x] Link axios to HTML

1. Make search button -> get data on Belgium (click)
- [] HTML
    - [] Make button
    - [] Give button id
- [] Program interaction
  - [] Select button: document.getElementById
  - [] Make event listener: .addEventListener 
  - [] Make event handler async function (execute on click)
- [] Make request to API
  - [] find url for Belgium (api docs)
  - [] axios.get(url)
  - [] add await to async function (we don't want a promise)
  - [] Log the data