import "dotenv/config"; // with type: module

// require("dotenv").config();   // with type: commonjs (default)

import axios from "axios";

console.log(process.env.KEY);

const getWeather = async (city) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.KEY}&units=metric`
  );

  console.log(`
  It is now ${res.data.main.temp}°C in ${res.data.name}
  
  The current weather conditions are: ${res.data.weather
    .map((item) => item.description)
    .join(", ")}`);
};

getWeather(process.argv[2]);


//==============================================================

