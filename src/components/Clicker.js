import React, { useState } from "react";

let buildings = [];
let numberOfBuildings = 0;

const Clicker = () => {
  const [counter, setCounter] = useState(0);
  const [gold, setGold] = useState(0);
  const [building, setBuilding] = useState(10);

  const [level, setLevel] = useState(0);

  const addPoints = () => {
    if (level == 1) {
      setCounter(counter + 2);
    } else if (level == 2) {
      setCounter(counter + 3);
    } else if (level == 3) {
      setCounter(counter + 4);
    }
    if (numberOfBuildings == 0) {
      setCounter(counter + 1);
      setGold(gold + 1);
    } else {
      setCounter(counter + buildings.length + 1);
      setGold(gold + buildings.length + 1);
    }
  };

  const buyBuilding = (e) => {
    setLevel(e.target.value);
    console.log(e.target.value);
    if (gold >= 10) {
      setGold(gold - building);
      setBuilding(building);
      numberOfBuildings++;
      buildings.push(numberOfBuildings);
    }
  };

  return (
    <div className="background">
      <div className="goldposition">
        <div className="gold">
          <img
            className="imgdesign"
            src="https://www.pngall.com/wp-content/uploads/5/Game-Gold-Coin-PNG-Photo.png"
          />
          <h3>{gold}</h3>
        </div>
      </div>

      <div className="center">
        <div className="counter">
          <h1>{counter}</h1>
        </div>
        <button className="clicker" onClick={addPoints} value={1}>
          <h3>clicker</h3>
        </button>
        <div className="buyposition">
          {gold >= 10 && (
            <button onClick={(e) => buyBuilding(e)} value={1}>
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-home"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg> */}
              Upgrade +2
            </button>
          )}
          {gold >= 20 && (
            <button onClick={(e) => buyBuilding(e)} value={2}>
              Upgrade +3
            </button>
          )}
          {gold >= 30 && (
            <button onClick={(e) => buyBuilding(e)} value={3}>
              Upgrade +4
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clicker;
