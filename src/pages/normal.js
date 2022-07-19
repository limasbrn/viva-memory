import { styled } from "@stitches/react";
import React from "react";
import { Base } from "./pages.style";
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
})

const CardBase = styled('div', {
    width:"50px",
    height:"50px",

    backgroundColor:"#d8d8d8",

    "@media (min-width: 340px)": {
        width:"70px",
        height:"70px",
    },

    "@media (min-width: 500px)": {
        width:"96px",
        height:"96px",
    },
})

const LogoWrap = styled('img', {
    width:"130px",
    margin:"30px auto 30px auto",

    "@media (min-width: 340px)": {
        width:"150px",
    },

    "@media (min-width: 500px)": {
        width:"170px",
    },

});

const HeaderWrap = styled('header', {
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

const IconWrap =  styled('img', {
    width:"25px",

    "@media (min-width: 340px)": {
        width:"27px",
    },

    "@media (min-width: 500px)": {
        width:"35px",
    },
});

const LevelWrap = styled('div', {
    display:"flex",
    color:"white",
    fontSize:"15px",
    margin:"30px auto 30px auto",

    alignItems:"center",

    "@media (min-width: 500px)": {
        fontSize:"20px",
    },
});

const Level = styled('div', {
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
})


const NormalLevelPage = () => {
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

        </TableBase>

        <LevelWrap>
            <span>Nível:</span>
            <Level color="ease">Fácil - 4</Level>
        </LevelWrap>
        
        </Base>
    )
}

export default NormalLevelPage;