async function findCountry () {
const response  = await axios.get(
"https://restcountries.eu/rest/v2/alpha/be"
);

const searchButton = document.getElementById("searchButton");
console.log(searchButton);

searchButton.addEventListener("click", () => {
    console.log(response);
})
}

findCountry();