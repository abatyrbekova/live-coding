import React, { useState, useEffect } from "react";

// Components
import CountryCard from "./CountryCard";
import SearchResult from "./SearchResult";

/*
- in ByRegion component:
4) fetch the countries on load by their region using this URL https://restcountries.com/v3.1/region/{region}  give the {region} an initial value in a local state. 
    1. create a fetcher function 
            - accept a region parameter
    2. useState hook - import it
                     - use it
                     - give it initial state
    3. useEffect hook - import it
                      - use it to fetch based on the region state

5) save the received array of countries in a local state {countries} and make sure that the fetch happens only when {region} (in the local state) changes. 
  1. useState - import it
              - use it once the data is fetched
6) show each country in the array {countries} using the template component CountryCard
    1. import CountryCard
    2. use it when mapping over the countries array
*/

/*
7) give the user the ability to change the region to one of the following: 
   (Africa, Americas, Asia, Europe, Oceania) by
    using input type radio which should change the region in the
    local state (check the rad-list in App.js as a reference for radio) 

  - we need to create 5 inputs with the type of radio
  - add an onChange event listener to every input radio
  - create a function which will be called whenever the user clicks on a radio input
  - this function, it should set the region state(setRegion) to the value of the input

8) add a form that has an input field (type text) and a button, save the user input in a local state then use it to fetch a country by name onSubmit using this URL https://restcountries.com/v3.1/name/{name}
    - add a form with input and button inside of it
    - save the user input in local state - 
                      1. create local state
                      2. add an event listener to the input and save it to the newly created state
    - an event listener for the form - 
                      1. make an API call with the value of the input state -
                                - create a fetcher function for fetching by country name
9) save the received object of the searched country in a local state {country} then show it using the component searchResult
    1. create new state for the response [country, setCountry]
    2. import SearchResult
    3. render the SearchResult and pass the country as a prop to it
*/

const fetchCountriesByRegion = async (region) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/region/${region}`
  );
  const data = await response.json();
  return data;
};

const fetchCountryByName = async (name) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const data = await response.json();
  return data;
};

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export default function ByRegion() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("Europe");
  const [userInput, setUserInput] = useState("");
  const [country, setCountry] = useState();

  useEffect(() => {
    fetchCountriesByRegion(region).then((data) => setCountries(data));
  }, [region]);

  const handleChange = (e) => {
    setRegion(e.target.value);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCountryByName(userInput).then((data) => setCountry(data[0]));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleUserInput} type="text" />
          <button>Submit</button>
        </div>
      </form>
      {/* if the left side is true, return what is on the right side of the `&&` */}
      {country && <SearchResult country={country} />}
      {/* If country is true, render the SearchResult, otherwise render the <p> tag  */}
      {/* {country ? (
        <SearchResult country={country} />
      ) : (
        <p>Country does not exist</p>
      )} */}

      {regions.map((reg, i) => (
        <React.Fragment key={i}>
          <input
            onChange={handleChange}
            type="radio"
            value={reg}
            name="regions"
            checked={reg === region}
          />
          <label>{reg}</label>
        </React.Fragment>
      ))}

      <div className="cardsContainer">
        {countries.map((country, i) => (
          <CountryCard country={country} key={i} />
        ))}
      </div>
    </div>
  );
}
