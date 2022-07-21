import { keyframes, styled } from "@stitches/react";

const showImage = keyframes({
    '0%' : { transform: 'scale(0)' },
    '100%' : { transform: 'scale(1)' },
});

const hideImage = keyframes({
    '0%' : { transform: 'scale(1)' },
    '100%' : { transform: 'scale(0)' },
});

const rotateCard = keyframes({
    '0%' : { transform: 'rotateY(0)' },
    '100%' : { transform: 'rotateY(180deg)' },
});

const CardBase = styled('div', {
    display:"flex",
    width:"50px",
    height:"50px",

    backgroundColor:"#d8d8d8",
    borderRadius:"3px",

    justifyContent:"center",
    alignItems:"center",

    animation:`${rotateCard} 0.025s`,
    transition:"transform 0.5s",

    "& > img":{
        width:"35px",
        height:"auto",
        transform: "scale(0)",
        transition:"transform 0.5s",
    },


    /*  classes */
    '&.active': {
        backgroundColor: '#00b1f4',
        transform:"rotateY(0)",
        
        "& > img": {
            transform: "scale(1)",
        },
    },

    '&.wrong': {
        backgroundColor: '#ff424e',
    },

    '&.correct': {
        backgroundColor: '#00b335',
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

function Card({item, id, handleClick}){
    const itemClass = item.stat? "active" + item.stat : "";

    return (
        <CardBase className={itemClass} onClick={()=> handleClick(id)}>
            <img src={item.img} alt=""/>
        </CardBase>
    )
}

export default Card;