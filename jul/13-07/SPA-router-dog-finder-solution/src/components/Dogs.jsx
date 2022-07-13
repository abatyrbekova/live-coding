import { useParams, NavLink } from "react-router-dom";
import Dog from "./Dog";

export default function Dogs({ dogs }) {
  // Get the current dog name form the route (current address in browser)
  const { name } = useParams();

  // find the selected dog by name from the array dogs
  const selectedDog = dogs.find((x) => x.name === name);

  // If a dog is NOT selected, force full opacity for the links
  const classes = name ? "" : "force-full-opacity";

  return (
    <div className="Dogs">
      <nav>
        {dogs.map((dog) => (
          <NavLink key={dog.id} className={classes} to={"/dogs/" + dog.name}>
            <img src={dog.image} alt="" />
            {dog.name}
          </NavLink>
        ))}
      </nav>

      {/* If we have a name / if a dog is selected, then show info for that dog */}
      {name && <Dog dog={selectedDog} />}
    </div>
  );
}
