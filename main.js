const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", async () => {
    const response = await axios.get(
        "https://restcountries.eu/rest/v2/name/belgium"
    );
    console.log(response);
});


