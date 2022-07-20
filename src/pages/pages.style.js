import { styled } from '@stitches/react';

import { Link } from "react-router-dom";


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

export const TableBase = styled('div', {
  display:"flex",
  flexWrap:"wrap",
  width:"190px",
  height:"fit-content",
  
  padding:"10px",
  gap:"10px",
  borderRadius:"5px",
  backgroundColor:"white",
  boxShadow:"2px 2px #7F1717",

  "@media (min-width: 340px)": {
      width:"265px",
      padding:"13px",
      gap:"13px",
  },

  "@media (min-width: 500px)": {
      width:"350px",
      padding:"15px",
      gap:"15px",
      boxShadow:"5px 5px #7F1717",
  },
});

export const LogoWrap = styled('img', {
  width:"130px",
  margin:"30px auto 30px auto",

  "@media (min-width: 340px)": {
      width:"150px",
  },

  "@media (min-width: 500px)": {
      width:"170px",
  },

});

export const HeaderWrap = styled('header', {
  display:"flex",
  width:"190px",
  justifyContent:"space-between",
  alignItems:"center",

  margin:"0px auto 15px",

  color:"white",
  fontSize:"15px",
  fontWeight:"bold",

  "@media (min-width: 340px)": {
      width:"265px",
  },

  "@media (min-width: 500px)": {
      width:"350px",
      fontSize:"20px",
  },
});

export const IconWrap =  styled('img', {
  width:"25px",

  "@media (min-width: 340px)": {
      width:"27px",
  },

  "@media (min-width: 500px)": {
      width:"35px",
  },
});

export const LevelWrap = styled('div', {
  display:"flex",
  color:"white",
  fontSize:"15px",
  margin:"30px auto 30px auto",

  alignItems:"center",

  "@media (min-width: 500px)": {
      fontSize:"20px",
  },
});

export const Level = styled('div', {
  width:"fit-content",
  height:"fit-content",
  padding:"3px 5px",
  fontWeight:"bold",

  backgroundColor:"white",
  borderRadius:"5px",

  marginLeft:"5px",

  variants: {
      color: {
        ease: { color: "#00B336" },
        normal: { color: "#333333" },
        hard: { color: "#FF424E" },
      },
  },
});

export const LinkWrap = styled( Link , {
  textDecoration:"none",
})
