import React from "react";
import { styled } from '@stitches/react';
import { Base, ButtonBase, Button, LinkWrap} from './pages.style'
import Logo from '../image/logo-completa.svg'
import CheckMark from '../image/check-mark.svg'

const TextWrap = styled("div", {
    color:"white",
    gap:"15px",
    margin:"30px auto 15px auto"
});

const LogoWrap = styled("footer", {
    marginTop: "60px",
});

const CongratsPage = () => {

    return (
        
        <Base>

        <img width="60px" alt="logo" src={CheckMark}/>

        <TextWrap>
            <h1>Parabéns! Você conseguiu!</h1>
            <span> Com - movimentos!</span>
        </TextWrap>

         <LinkWrap to="/" >
         <ButtonBase>
            <Button color='normal'>Jogar novamente</Button>
         </ButtonBase>
         </LinkWrap>

        <LogoWrap>
        <img width="170px" alt="logo" src={Logo}/>
        </LogoWrap>

        </Base>
       
    )
}

export default CongratsPage;