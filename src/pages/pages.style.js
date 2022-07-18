import { styled } from '@stitches/react';


export const Base = styled("div", {
    display: "flex",
    flexDirection: "column",
    position:"relative",
  
    height: "100vh",
  
    background:"linear-gradient(-45deg, #ff1c1c, #ff5656)", 
    alignItems: "center",
    justifyContent:"center",
  
  });

export const ButtonBase = styled("div", {
    width:"100%",
    justifyContent:"center",
});

export const Button = styled("button", {
    display: "flex",
    width:"80%",
    minWidth:"250px",
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
        width:"320px",
        margin:"25px auto 25px auto",
        fontSize:"22px",
      },
  });