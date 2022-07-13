import { NavLink, Routes, Route, Navigate } from "react-router-dom";

import Dogs from "./Dogs";

import hazelPic from "../images/hazel.jpg";
import tubbyPic from "../images/tubby.jpg";
import whiskeyPic from "../images/whiskey.jpg";

// Helper data for all the dogs, as if we got them from a database or API
const dogs = [
  {
    name: "whiskey",
    id: 0,
    image: whiskeyPic,
    age: 4,
    facts: [
      "Whiskey loves eating popcorn",
      "Whiskey is a terrible guard dog",
      "Whiskey wants to cuddle with you",
    ],
  },
  {
    name: "hazel",
    id: 1,
    age: 0,
    image: hazelPic,
    facts: [
      "Hazel has a lot of energy",
      "Hazel is highly intelligent",
      "Hazel loves people more than dogs",
    ],
  },
  {
    name: "tubby",
    id: 2,
    age: 4,
    image: tubbyPic,
    facts: [
      "Tubby is really stupid",
      "Tubby does not like walks",
      "Angelina hates Tubby",
    ],
  },
];

function App() {
  return (
    <div className="App">
      <NavLink to="/">
        <h1>Helloz. We have dogz. Click on them for more info.</h1>
      </NavLink>

      <Routes>
        <Route path="/dogs" element={<Dogs dogs={dogs} />} />
        <Route path="/dogs/:name" element={<Dogs dogs={dogs} />} />
        <Route path="*" element={<Navigate to="dogs" />} />
      </Routes>
    </div>
  );
}

export default App;
