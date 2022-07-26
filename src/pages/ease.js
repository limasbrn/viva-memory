import {React, useState} from "react";
import { Base ,
         TableBase ,
         LogoWrap , 
         HeaderWrap ,
         IconWrap ,
         LevelWrap ,
         Level } from "./pages.style";
import Logo from '../image/logo-completa.svg';
import ClockCountArrow from "../image/counterclockwise.svg";
import CardsEase from "../component/ease-card";

const EaseLevelPage = () => {
    const [ clicks, setClicks ] = useState(0);
    
    return (
        <Base>

        <LogoWrap alt="logo" src={Logo} />

        <HeaderWrap>
            <span>{clicks}</span>
            <IconWrap alt="Restart" src={ClockCountArrow}/>
        </HeaderWrap>
        
        <TableBase>
            <CardsEase onClick={() => setClicks(clicks + 1)}/>
        </TableBase>

        <LevelWrap>
            <span>Nível:</span>
            <Level color="ease">Fácil - 4</Level>
        </LevelWrap>
        
        </Base>
        
    )
}

export default EaseLevelPage;