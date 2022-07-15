import { styled } from '@stitches/react';
import Logo from "../image/logo-completa.svg"


const HeaderBase = styled("header", {
    display: "flex",
    height: "50px",
    width: "100%",
    gap:"10px",
    
    position: "sticky",
    top: "0",
    left: "0",
    
    color:"white",
    fontSize:"12px",
  
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px",
  });
  
  export const Header = () => (
    <HeaderBase>
    
    <img width="170px" alt="logo" src={Logo}/>
    
    </HeaderBase>
  );
