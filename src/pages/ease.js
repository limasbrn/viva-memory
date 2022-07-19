import { styled } from "@stitches/react";
import React from "react";
import { Base ,
         LogoWrap , 
         HeaderWrap ,
         IconWrap ,
         LevelWrap ,
         Level } from "./pages.style";
import Logo from '../image/logo-completa.svg'
import ClockCountArrow from "../image/counterclockwise.svg"

const TableBase = styled('div', {
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

const CardBase = styled('div', {
    width:"80px",
    height:"80px",

    backgroundColor:"#d8d8d8",
    borderRadius:"3px",

    "@media (min-width: 340px)": {
        width:"113px",
        height:"113px",
    },

    "@media (min-width: 500px)": {
        width:"152px",
        height:"152px",
    },
})

const EaseLevelPage = () => {
    return (
        <Base>

        <LogoWrap alt="logo" src={Logo} />

        <HeaderWrap>
            <span>3 movimentos</span>
            <IconWrap alt="Restart" src={ClockCountArrow}/>
        </HeaderWrap>
        
        <TableBase>

            <CardBase></CardBase>
            <CardBase></CardBase>
            <CardBase></CardBase>
            <CardBase></CardBase> 

        </TableBase>

        <LevelWrap>
            <span>Nível:</span>
            <Level color="ease">Fácil - 4</Level>
        </LevelWrap>
        
        </Base>
        
    )
}

export default EaseLevelPage;