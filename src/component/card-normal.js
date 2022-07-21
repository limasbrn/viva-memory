import { styled } from "@stitches/react";

const CardBase = styled('div', {
    display:"flex",
    width:"50px",
    height:"50px",

    backgroundColor:"#d8d8d8",
    borderRadius:"3px",

    justifyContent:"center",
    alignItems:"center",

    "& > img":{
        width:"35px",
        height:"auto",
    },

    "@media (min-width: 340px)": {
        width:"70px",
        height:"70px",

        "& > img":{
            width:"45px",
            height:"auto",
        },
    },

    "@media (min-width: 500px)": {
        width:"96px",
        height:"96px",

        "& > img":{
            width:"55px",
            height:"auto",
        },
    },
})

function Card({item}){
    return (
        <CardBase>
            <img src={item.img} alt=""/>
        </CardBase>
    )
}

export default Card;