import { keyframes, styled } from "@stitches/react";
import React, { useState } from "react";

const showImage = keyframes({
  "0%": { transform: "scale(0)" },
  "100%": { transform: "scale(1)" },
});

const hideImage = keyframes({
  "0%": { transform: "scale(1)" },
  "100%": { transform: "scale(0)" },
});

const rotateCard = keyframes({
  "0%": { transform: "rotateY(0)" },
  "100%": { transform: "rotateY(180deg)" },
});

const CardBase = styled("div", {
  display: "flex",
  width: "80px",
  height: "80px",

  backgroundColor: "#d8d8d8",
  borderRadius: "3px",

  justifyContent: "center",
  alignItems: "center",

  animation: `${rotateCard} 0.025s`,
  transition: "transform 0.5s",

  /*  Image related stuff */
  "& > img": {
    width: "50px",
    height: "auto",
    transform: "scale(0)",
    transition: "transform 0.5s",

    variants: {
      animation: {
        show: { animation: `${showImage} 2s` },
        hide: { animation: `${hideImage} 2s` },
      },
    },
  },

  /*  classes */
  "&.active": {
    backgroundColor: "#00b1f4",
    transform: "rotateY(0)",

    "& > img": {
      transform: "scale(1)",
    },
  },

  "&.wrong": {
    backgroundColor: "#ff424e",
  },

  "&.correct": {
    backgroundColor: "#00b335",
  },

  /* Media queries */
  "@media (min-width: 340px)": {
    width: "113px",
    height: "113px",

    "& > img": {
      width: "60px",
      height: "auto",
    },
  },

  "@media (min-width: 500px)": {
    width: "152px",
    height: "152px",

    "& > img": {
      width: "75px",
      height: "auto",
    },
  },
});

function Card({ item, id, handleClick, onClick }) {
  const itemClass = item.stat ? "active" + item.stat : "";

  return (
    <CardBase
      className={itemClass}
      onClick={() => {
        handleClick(id);
        onClick()
      }}
    >
      <img src={item.img} alt="" />
    </CardBase>
  );
}

export default Card;
