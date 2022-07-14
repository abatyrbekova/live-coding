import { useContext } from "react";
import { Context } from "./context/countContext";

export default function Card() {
const { count, setCount } = useContext(Context);

  return (
    <div className="border">
      <h2>Card</h2>
      <h3>count: {count} </h3>
      <button onClick={()=> setCount(count-1)} >count-1</button>
    </div>
  );
}
