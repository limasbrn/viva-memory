import { styled } from "@stitches/react";
import React from "react";
import { Base ,
        TableBase ,
        LogoWrap , 
        HeaderWrap ,
        IconWrap ,
        LevelWrap ,
        Level } from "./pages.style";
import Logo from '../image/logo-completa.svg'
import ClockCountArrow from "../image/counterclockwise.svg"

const CardBase = styled('div', {
    width:"35px",
    height:"35px",

    backgroundColor:"#d8d8d8",
    borderRadius:"3px",

    "@media (min-width: 340px)": {
        width:"50px",
        height:"50px",
    },

    "@media (min-width: 500px)": {
        width:"68px",
        height:"68px",
    },
})

const HardLevelPage = () => {
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
            <CardBase></CardBase>
            <CardBase></CardBase>
            <CardBase></CardBase>
            <CardBase></CardBase>
            <CardBase></CardBase>
            <CardBase></CardBase>
            <CardBase></CardBase>
            <CardBase></CardBase>
            <CardBase></CardBase>
            <CardBase></CardBase>
            <CardBase></CardBase>
            <CardBase></CardBase>
 
        </TableBase>

        <LevelWrap>
            <span>Nível:</span>
            <Level color="hard">Difícil - 16</Level>
        </LevelWrap>
        
        </Base>
        
    )
}

export default HardLevelPage;