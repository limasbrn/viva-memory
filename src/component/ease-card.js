import React, { useState } from "react";
import Card from "./card"
import Butterfly from "../image/butterfly.svg";
import Cupcake from "../image/cupcake.svg"

function CardsEase() {
  const [items, setItems] = useState([
    { id: 1, img: `${Butterfly}`, stat: "" },
    { id: 1, img: `${Butterfly}`, stat: "" },
    { id: 2, img: `${Cupcake}`, stat: "" },
    { id: 2, img: `${Cupcake}`, stat: "" },
  ]);

  return (
    <>
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </>
  );
}

export default CardsEase;
