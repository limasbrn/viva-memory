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
        }, 1000)
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

export default CardsNormal;
