const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", async () => {

    // Select input
    //Take value from input
    const response = await axios.get(
        "https://restcountries.eu/rest/v2/name/belgium" //<-- replace value here
    );
    console.log(response);
});


