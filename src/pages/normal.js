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
import CardsNormal from "../component/normal-card"


const NormalLevelPage = () => {
    return (
        <Base>

        <LogoWrap alt="logo" src={Logo} />

        <HeaderWrap>
            <span>3 movimentos</span>
            <IconWrap alt="Restart" src={ClockCountArrow}/>
        </HeaderWrap>
        
        <TableBase>
            <CardsNormal/>
        </TableBase>

        <LevelWrap>
            <span>Nível:</span>
            <Level color="normal">Normal - 8</Level>
        </LevelWrap>
        
        </Base>
    )
}

export default NormalLevelPage;