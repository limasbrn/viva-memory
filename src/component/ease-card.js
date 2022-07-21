import React, { useState } from "react";
import Card from "./card"
import Butterfly from "../image/butterfly.svg";
import Cupcake from "../image/cupcake.svg"
import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";

function CardsEase() {
  const [items, setItems] = useState([
    { id: 1, img: `${Butterfly}`, stat: "" },
    { id: 1, img: `${Butterfly}`, stat: "" },
    { id: 2, img: `${Cupcake}`, stat: "" },
    { id: 2, img: `${Cupcake}`, stat: "" },
  ].sort(() => Math.random() -  0.5))

  const [prev, setPrev] = useState(-1)

  function check(current){
      if(items[current].id == items[prev].id){
        items[current].stat = " correct"
        items[prev].stat = " correct"
        setItems([...items])
        setPrev(-1)
      }else{
        items[current].stat = " wrong"
        items[prev].stat = " wrong"
        setItems([...items])
        setTimeout(()=> {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
        }, 2000)
      }
  }

  function handleClick(id){
   
    if(prev === -1){
      items[id].stat = " active"
      setItems([...items])
      setPrev(id)
    }else{
      check(id)
    }
  }

  return (
    <>
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </>
  );
}

export default CardsEase;
