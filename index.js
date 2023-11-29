const getCountryByName= async (countryName)  => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const jsonData = await response.json();

    const displayData = document.getElementById("country-details");

    const name = document.createElement("p");
    name.innerText = `Country Name: ${jsonData[0].name.common}`;

    const capital = document.createElement ('p');
    capital. innerText = `Capital:  ${jsonData[0].capital[0]}` ;

    const languages = document.createElement ('p');
    const languagesArray = Object.values(jsonData[0].languages);
    const languagesString = languagesArray-join(",");
    languages. innerText = `Language: ${languagesString}`;

    const population = document. createElement ('p');
    population. innerText = `Population: ${jsonData[0].population}` ;
    
    displayCountry.appendChild(name); 
    displayCountry.appendChild(capital); 
    displayCountry.appendChild(lanquages);
    displayCountry.appendChild(population);
    // return jsonData[0].name.common;    
} 

// const getCapitalOfCountry = async(countryName) => {
//     const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
//     const jsonData = await response.json();
//     return jsonData[0].capital[0];
// }

// const getPopulationOfCountry = async(countryName) => {
//     const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
//     const jsonData = await response.json();
//     return jsonData[0].population;
// }

// const getLanguagesOfCountry = async(countryName) => {
//     const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
//     const jsonData = await response.json();
//     return jsonData[0].languages;
// }




// const section = document.querySelector('#country-details').appendChild()

// console.log(getCountryByName("Bolivia"));
// console.log(getLanguagesOfCountry("Bolivia"));
// console.log(getPopulationOfCountry("Bolivia"));
// console.log(getCapitalOfCountry("Bolivia"));

