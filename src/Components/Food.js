import React from "react";

import { SiHappycow } from "react-icons/si";
import {
  TbPig,
  TbFish,
  TbCheese,
  TbMilk,
  TbEggs,
  TbCarrot,
  TbBrandApple,
} from "react-icons/tb";
import { GiChicken, GiWheat } from "react-icons/gi";
import { BiBowlRice } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
// import categories from "../data.js";

import { useContextProvider } from "./Provider.js";
import { useState } from "react";

import "./Food.css";

// "food": {
//     "Beef": 220,
//     "Chicken": 64,
//     "Pork": 34.5,
//     "Fish (wild)": 21.5,
//     "Fish (farmed)": 50,
//     "Dairy (cheese)": 83,
//     "Dairy (milk)": 20.75,
//     "Eggs": 31,
//     "Rice": 4.4,
//     "Wheat": 5.65,
//     "Vegetables": 5.2,
//     "Fruits": 11.2
//   },

export default function Food() {
  const navigate = useNavigate();

  const { result, setResult, categories } = useContextProvider();

  const [options, setOptions] = useState([]);

  const handleOptionChange = (e) => {
    if (options.includes(e.target.value)) {
      const remove = options.filter((el) => el !== e.target.value);
      setOptions(remove);
    } else {
      setOptions([...options, e.target.value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let val = 0;
    for (let i = 0; i < options.length; i++) {
      val += Number(options[i]);
    }
    setResult(result + val);
    navigate("/home");
  };

  console.log(categories);
  console.log(options);
  return (
    <div className="food" style={{ fontFamily: "monospace" }}>
      <h2>What food items do you consume?</h2>
      <h4>Select all that apply!</h4>
      <form>
        <div className="food-selections">
          <label htmlFor="beef">
            <input
              type="checkbox"
              id="beef"
              value={categories.food["Beef"]}
              onChange={handleOptionChange}
            />
            <SiHappycow size="50" /> Beef
          </label>
          <label htmlFor="chicken">
            <input
              type="checkbox"
              id="chicken"
              value={categories.food["Chicken"]}
              onChange={handleOptionChange}
            />
            <GiChicken size="50" /> Chicken
          </label>
          <label htmlFor="pork">
            <input
              type="checkbox"
              id="pork"
              value={categories.food["Pork"]}
              onChange={handleOptionChange}
            />
            <TbPig size="50" /> Pork
          </label>

          <label htmlFor="fish (wild)">
            <input
              type="checkbox"
              id="fish (wild)"
              value={categories.food["Fish (wild)"]}
              onChange={handleOptionChange}
            />
            <TbFish size="50" /> Wild Fish
          </label>
          <label htmlFor="fish (farmed)">
            <input
              type="checkbox"
              id="fish (farmed)"
              value={categories.food["Fish (farmed)"]}
              onChange={handleOptionChange}
            />
            <TbFish size="50" /> Farmed Fish
          </label>
          <label htmlFor="dairy (cheese)">
            <input
              type="checkbox"
              id="dairy (cheese)"
              value={categories.food["Dairy (cheese)"]}
              onChange={handleOptionChange}
            />
            <TbCheese size="50" /> Cheese
          </label>
          <label htmlFor="dairy (milk)">
            <input
              type="checkbox"
              id="dairy (milk)"
              value={categories.food["Dairy (milk)"]}
              onChange={handleOptionChange}
            />
            <TbMilk size="50" /> Milk
          </label>
          <label htmlFor="eggs">
            <input
              type="checkbox"
              id="eggs"
              value={categories.food["Eggs"]}
              onChange={handleOptionChange}
            />
            <TbEggs size="50" /> Eggs
          </label>
          <label htmlFor="rice">
            <input
              type="checkbox"
              id="rice"
              value={categories.food["Rice"]}
              onChange={handleOptionChange}
            />
            <BiBowlRice size="50" /> Rice
          </label>
          <label htmlFor="wheat">
            <input
              type="checkbox"
              id="wheat"
              value={categories.food["Wheat"]}
              onChange={handleOptionChange}
            />
            <GiWheat size="50" /> Wheat
          </label>
          <label htmlFor="vegetables">
            <input
              type="checkbox"
              id="vegetables"
              value={categories.food["Vegetables"]}
              onChange={handleOptionChange}
            />
            <TbCarrot size="50" /> Veggies
          </label>
          <label htmlFor="fruits">
            <input
              type="checkbox"
              id="fruits"
              value={categories.food["Fruits"]}
              onChange={handleOptionChange}
            />
            <TbBrandApple size="50" /> Fruits
          </label>
        </div>
        <button className="next" onClick={handleSubmit}>
          Next!
        </button>
      </form>
    </div>
  );
}
