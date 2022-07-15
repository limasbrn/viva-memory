import { styled } from '@stitches/react';
/* import { Logo } from '../image/logo-vivamemory.svg' */


const HeaderBase = styled("header", {
    display: "flex",
    position: "sticky",
    top: "0",
    left: "0",
    height: "50px",
    width: "100%",

    border:"1px white solid",
    color:"white",
    fontSize:"12px",
  
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px",
  });
  
  export const Header = () => (
    <HeaderBase>
    
       {/* <Logo/> */}
       <h1>Viva memory</h1>
    
    </HeaderBase>
  );
