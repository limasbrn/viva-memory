import { styled } from "@stitches/react";

const CardBase = styled('div', {
    display:"flex",
    width:"35px",
    height:"35px",

    backgroundColor:"#d8d8d8",
    borderRadius:"3px",

    justifyContent:"center",
    alignItems:"center",

    "& > img": {
        width:"25px",
        height:"auto",
    },

    "@media (min-width: 340px)": {
        width:"50px",
        height:"50px",

        "& > img": {
            width:"35px",
            height:"auto",
        },
    },

    "@media (min-width: 500px)": {
        width:"68px",
        height:"68px",

        "& > img": {
            width:"45px",
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