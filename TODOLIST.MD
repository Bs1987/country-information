# Steps

0. SETUP
- [x] Link .css file to HTML
- [x] Link .js file to HTML
- [x] Install npm
- [x] Install axios
- [x] Link axios to HTML

1. Make search button -> get data on Belgium (click)
- [x] HTML
    - [x] Make button
    - [x] Give button id
- [x] Program interaction
  - [X] Select button: document.getElementById
  - [X] Make event listener: .addEventListener 
  - [x] Make event handler async function (execute on click)
- [x] Make request to API
  - [x] find url for Belgium (api docs)
  - [x] axios.get(url)
  - [x] add await to async function (we don't want a promise)
  - [x] Log the data