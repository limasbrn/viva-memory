import React, { useState } from "react";
import Card from "./card-normal"
import Cactus from "../image/cactus.svg";
import Cereja from "../image/cherries.svg"
import Donut from "../image/doughnut.svg";
import Fish from "../image/fish.svg"

function CardsNormal() {
  const [items, setItems] = useState([
    { id: 1, img: `${Cactus}`, stat: "" },
    { id: 1, img: `${Cactus}`, stat: "" },
    { id: 2, img: `${Cereja}`, stat: "" },
    { id: 2, img: `${Cereja}`, stat: "" },
    { id: 3, img: `${Donut}`, stat: "" },
    { id: 3, img: `${Donut}`, stat: "" },
    { id: 4, img: `${Fish}`, stat: "" },
    { id: 4, img: `${Fish}`, stat: "" },
 
  ].sort(() => Math.random() -  0.5));

  return (
    <>
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </>
  );
}

export default CardsNormal;
