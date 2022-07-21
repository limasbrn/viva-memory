import React, { useState } from "react";
import Card from "./card-hard"
import Cactus from "../image/cactus.svg";
import Strawberry from "../image/strawberry.svg"
import Donut from "../image/doughnut.svg";
import Mushroom from "../image/mushroom.svg"
import Popcorn from "../image/popcorn.svg";
import Chipmunk from "../image/chipmunk.svg"
import Rex from "../image/rex.svg";
import Unicorn from "../image/unicorn.svg"

function CardsHard() {
  const [items, setItems] = useState([
    { id: 1, img: `${Cactus}`, stat: "" },
    { id: 1, img: `${Cactus}`, stat: "" },
    { id: 2, img: `${Strawberry}`, stat: "" },
    { id: 2, img: `${Strawberry}`, stat: "" },
    { id: 3, img: `${Donut}`, stat: "" },
    { id: 3, img: `${Donut}`, stat: "" },
    { id: 4, img: `${Unicorn}`, stat: "" },
    { id: 4, img: `${Unicorn}`, stat: "" },
    { id: 5, img: `${Mushroom}`, stat: "" },
    { id: 5, img: `${Mushroom}`, stat: "" },
    { id: 6, img: `${Popcorn}`, stat: "" },
    { id: 6, img: `${Popcorn}`, stat: "" },
    { id: 7, img: `${Chipmunk}`, stat: "" },
    { id: 7, img: `${Chipmunk}`, stat: "" },
    { id: 8, img: `${Rex}`, stat: "" },
    { id: 8, img: `${Rex}`, stat: "" },
 
  ].sort(() => Math.random() -  0.5));

  return (
    <>
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </>
  );
}

export default CardsHard;
