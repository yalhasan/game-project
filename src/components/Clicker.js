import { toBePartiallyChecked } from "@testing-library/jest-dom/matchers";
import React, { useState } from "react";

let buildings = [];
let numberOfBuildings = 0;
let number = 0;
let b = buildings.forEach((building) => {
  building += building;
});

const Clicker = () => {
  const [counter, setCounter] = useState(0);
  const [gold, setGold] = useState(0);
  const [building, setBuilding] = useState(10);
  const [level, setLevel] = useState(0);
  const [increment, setIncrement] = useState(0);

  const addPoints = () => {
    if (level == 0) {
      setCounter(counter + 1);
      setGold(gold + 1);
    } else if (level >= 1) {
      setCounter(counter + increment);
      setGold(gold + increment);
      console.log({ increment, counter });
    }
  };

  const buyBuilding = (e) => {
    setLevel(e);
    console.log(e);
    if (gold >= building) {
      setGold(gold - building);
      numberOfBuildings++;
      setIncrement(increment + e);
    }
  };

  return (
    <div className="background">
      <div className="goldposition">
        <div className="upgrade">
          <h2> Your UPGRADES: {numberOfBuildings}</h2>
        </div>
        <div className="gold">
          <img
            className="imgdesign"
            src="https://cdn-icons-png.flaticon.com/512/3044/3044876.png"
            // https://www.pngall.com/wp-content/uploads/5/Game-Gold-Coin-PNG-Photo.png"
          />
          <h3>{gold}</h3>
        </div>
      </div>

      <div className="center">
        <div className="counter">
          <h1>{counter}</h1>
        </div>
        <button className="clicker" onClick={addPoints} value={1}>
          {/* <h3>clicker</h3> */}
          <img
            className="imgclickerdesign"
            src="https://img.lovepik.com/element/40155/5207.png_300.png"
          />
        </button>

        <div className="buyposition">
          {gold >= 10 && (
            <button className="button" onClick={() => buyBuilding(2)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
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
              </svg>
              <h3> Upgrade +2</h3>
            </button>
          )}
          {gold >= 20 && (
            <button className="button" onClick={() => buyBuilding(3)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
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
              </svg>
              <h3> Upgrade +3</h3>
            </button>
          )}
          {gold >= 30 && (
            <button className="button" onClick={() => buyBuilding(4)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
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
              </svg>
              <h3> Upgrade +4</h3>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clicker;
