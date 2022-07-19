import React from "react";
import { Link } from "react-router-dom";
import { styled } from '@stitches/react';
import { Base, ButtonBase, Button} from './pages.style'
import { Header } from "../component/header";
import Baby from "../image/Baby.svg"
import Boy from "../image/Boy.svg"
import Exploding from "../image/Exploding-Head.svg"

const HomePage = () => {
    return (
    
        <Base>
        <Header/>
        <ButtonBase>

            <Link to="/ease" >
            <Button color='ease'>
                <img width="25px" alt="baby emoji" src={Baby}/>
                <span>Fácil</span>
            </Button>
            </Link>

            <Link to="/normal">
            <Button color='normal'>
                <img width="25px" alt="baby emoji" src={Boy}/>
                <span>Normal</span>
            </Button>
            </Link>

            <Link to="/hard" >
            <Button color='hard'>
                <img width="25px" alt="baby emoji" src={Exploding}/>
                <span>Difícil</span>
            </Button>
            </Link>

        </ButtonBase>
        </Base>

    )
}

export default HomePage ;