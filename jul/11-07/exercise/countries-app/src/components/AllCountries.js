import React, { useEffect, useState } from "react";

// Components
import CountryCard from "./CountryCard";

/*
- in AllCountries component:
1) fetch all the countries on load from restcountries using this URL https://restcountries.com/v3.1/all
    1. create fetcher function
    2. useEffect - import it
                 - use the fetcher function inside of it


2) save the received array of countries in a local state {countries} and prevent an infinite render
  1. useState - import it
              - use the useState hook
              - when the response is here, we need to save the response inside state

3) show each country in the array {countries} using the template component CountryCard
  1. import CountryCard
  2. map over the countries array, and use CountryCard component for each element in the array
*/

const fetchAllCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data;
};

export default function AllCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // When the component mounts, run this code
    fetchAllCountries().then((data) => setCountries(data));
  }, []);

  return (
    <div className="cardsContainer">
      {countries.map((country, i) => (
        <CountryCard key={i} country={country} />
      ))}
    </div>
  );
}
