const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", async () => {

    // Select input
    //Take value from input
    const response = await axios.get(
        "https://restcountries.eu/rest/v2/name/belgium" //<-- replace value here
    );
    console.log(response.data);
});

const countryFlag = document.getElementById("countryFlag");
console.log(countryFlag);
const flagImage = document.createElement("img");
console.log(flagImage);
flagImage.src = "https://restcountries.eu/data/bel.svg";
console.log(flagImage);
countryFlag.appendChild(flagImage);
console.log(flagImage);