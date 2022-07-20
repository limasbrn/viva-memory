import { styled } from "@stitches/react";

const CardBase = styled('div', {
    display:"flex",
    width:"80px",
    height:"80px",

    backgroundColor:"#d8d8d8",
    borderRadius:"3px",

    justifyContent:"center",
    alignItems:"center",

    "& > img": {
       
    },

    "@media (min-width: 340px)": {
        width:"113px",
        height:"113px",
    },

    "@media (min-width: 500px)": {
        width:"152px",
        height:"152px",
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