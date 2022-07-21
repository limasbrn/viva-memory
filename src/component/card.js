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
       width:"50px",
       height:"auto",
    },

    "@media (min-width: 340px)": {
        width:"113px",
        height:"113px",

        "& > img": {
            width:"60px",
            height:"auto",
         },
    },

    "@media (min-width: 500px)": {
        width:"152px",
        height:"152px",

        "& > img": {
            width:"75px",
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