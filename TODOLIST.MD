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

7. Add an image to page (country-flag)

- [] find url for image (API-response)
- [] HTML
	- [] Make div (with ID)
	- [] Select div (getElementById)
	- [] Create img element (createElement -> img)
	- [] Add url to image (`img.src = url`, `img.setAttribute("src, url"`))
	- [] appendChild -> to the div

8. Make an input area which lets the user press enter and find data on Belgium

- [] HTML
	- [] Input
	- [] Give an ID
- [] Interaction
	- [] Select input area
	- [] Add event listener to input area (keyup)
	- [] Look in event for the code (event.code)
	- [] If event.code is Enter -> get data from API on Belgium

9. Make the value from the input area usable as query for the GET request

- [] Select input area (const inputField = document...)
- [] const query = inputField.value -> e.g. England
- [] Replace belgium in url for "dynamic value" (query)