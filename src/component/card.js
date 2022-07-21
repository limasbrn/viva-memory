import { keyframes, styled } from "@stitches/react";


const hideImage = keyframes({
    '0%' : { transform: 'scale(0)' },
    '100%' : { transform: 'scale(1)' },
});

const rotateCard = keyframes({
    '0%' : { transform: 'rotateY(0)' },
    '100%' : { transform: 'rotateY(180deg)' },
});

const CardBase = styled('div', {
    display:"flex",
    width:"80px",
    height:"80px",

    backgroundColor:"#d8d8d8",
    borderRadius:"3px",

    justifyContent:"center",
    alignItems:"center",

    animation:`${rotateCard} 2s`,

    "& > img": {
       width:"50px",
       height:"auto",
       animation:`${hideImage} 2s`,
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