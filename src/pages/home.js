import React from "react";
import { Base, ButtonBase, Button, LinkWrap} from './pages.style'
import { Header } from "../component/header";
import Baby from "../image/Baby.svg"
import Boy from "../image/Boy.svg"
import Exploding from "../image/Exploding-Head.svg"

const HomePage = () => {
    return (
    
        <Base>
        <Header/>
        <ButtonBase>

            <LinkWrap to="/ease">
            <Button color='ease'>
                <img width="25px" alt="baby emoji" src={Baby}/>
                <span>Fácil</span>
            </Button>
            </LinkWrap>

            <LinkWrap to="/normal">
            <Button color='normal'>
                <img width="25px" alt="baby emoji" src={Boy}/>
                <span>Normal</span>
            </Button>
            </LinkWrap>

            <LinkWrap to="/hard" >
            <Button color='hard'>
                <img width="25px" alt="baby emoji" src={Exploding}/>
                <span>Difícil</span>
            </Button>
            </LinkWrap>

        </ButtonBase>
        </Base>

    )
}

export default HomePage ;