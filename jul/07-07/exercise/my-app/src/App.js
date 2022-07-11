import { useState } from "react";

function App() {
  const [numsArr, setNumsArr] = useState([]);

  const handleClick = () => {
    let newArr = [];

    while (newArr.length < 6) {
      const randomNum = Math.floor(Math.random() * 49 + 1);
      if (!newArr.includes(randomNum)) {
        newArr.push(randomNum);
      }

      // newArr.push(randomNum);

      //  new Set (newArr)
    }

    const superNum = Math.floor(Math.random() * 10 + 1);

    newArr.push(superNum);

    setNumsArr(newArr);
  };

  return (
    <div className="App">
      <div className="container">
        {numsArr.map((item, i) => (
          <div className="num" key={i}> {item} </div>
        ))}
      </div>
      <div>
        <button onClick={() => setNumsArr([])}> Reset</button>
        <button onClick={handleClick}> get Lucky Nums</button>
      </div>
    </div>
  );
}

export default App;
