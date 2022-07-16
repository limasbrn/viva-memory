import React from "react";
import { Link } from "react-router-dom";
import { styled } from '@stitches/react';
import { Header } from "../component/header";
import Baby from "../image/Baby.svg"
import Boy from "../image/Boy.svg"
import Exploding from "../image/Exploding-Head.svg"

const Base = styled("div", {
    display: "flex",
    flexDirection: "column",
    position:"relative",
  
    height: "100vh",
  
    background:"linear-gradient(-45deg, #ff1c1c, #ff5656)", 
    alignItems: "center",
    justifyContent:"center",
  
  });

const ButtonBase = styled("div", {
    width:"100%",
    justifyContent:"center",
});

const Button = styled("button", {
    display: "flex",
    width:"80%",
    height:"55px",
    margin:"15px auto 15px auto",
    gap:"5px",

    backgroundColor:"white",
    border:"none",
    borderRadius:"5px",
    fontSize:"20px",
    fontWeight:"bold",
    boxShadow:"5px 5px #7F1717",

    justifyContent:"center",
    alignItems:"center",  

    variants: {
        color: {
          ease: { color: "#00B336" },
          normal: { color: "#333333" },
          hard: { color: "#FF424E" },
        },
    },

    "@media (min-width: 500px)": {
        width:"400px",
        margin:"25px auto 25px auto",
        fontSize:"22px",
      },
  });


const HomePage = () => {
    return (
    
        <Base>
        <Header/>
        <ButtonBase>

            <Link to="/ease" >
            <Button color='ease'>
                <img width="25px" alt="baby emoji" src={Baby}/>
                <span>Fácil</span>
            </Button>
            </Link>

            <Link to="/normal">
            <Button color='normal'>
                <img width="25px" alt="baby emoji" src={Boy}/>
                <span>Normal</span>
            </Button>
            </Link>

            <Link to="/hard" >
            <Button color='hard'>
                <img width="25px" alt="baby emoji" src={Exploding}/>
                <span>Difícil</span>
            </Button>
            </Link>

        </ButtonBase>
        </Base>

    )
}

export default HomePage ;