import React from "react";
import { styled } from '@stitches/react';
import { Header } from "../component/header";

const Base = styled("div", {
    display: "flex",
    flexDirection: "column",
    position:"relative",
  
    height: "100vh",
  
    backgroundColor: "#ff5656",
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
          easy: { color: "#00B336" },
          normal: { color: "#333333" },
          hard: { color: "#FF424E" },
        },
    },

    "@media (min-width: 500px)": {
        width:"400px",
      },
  });

const HomePage = () => {
    return (
    
        <Base>
        <Header/>
        <ButtonBase>
            <Button color='easy'>Fácil</Button>
            <Button color='normal'>Normal</Button>
            <Button color='hard'>Difícil</Button>
        </ButtonBase>
        </Base>

    )
}

export default HomePage ;