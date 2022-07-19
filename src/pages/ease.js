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

const EaseLevelPage = () => {
    return (
        <Base>

        <LogoWrap alt="logo" src={Logo} />

        <HeaderWrap>
            <span>3 movimentos</span>
            <IconWrap alt="Restart" src={ClockCountArrow}/>
        </HeaderWrap>
        
        <TableBase>

           {/*  <CardBase></CardBase>
            <CardBase></CardBase>
            <CardBase></CardBase>
            <CardBase></CardBase> */}

        </TableBase>

        <LevelWrap>
            <span>Nível:</span>
            <Level color="ease">Fácil - 4</Level>
        </LevelWrap>
        
        </Base>
        
    )
}

export default EaseLevelPage;