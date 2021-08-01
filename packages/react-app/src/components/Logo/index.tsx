import React from "react";
import { Wrapper, LogoImage, LogoTitle } from "./styles";
import LogoPng from "../../ethereumLogo.png";

const Logo = () => (
  <Wrapper>
    <LogoImage src={LogoPng} />
    <LogoTitle>Claimable Sample</LogoTitle>
  </Wrapper>
);


export default Logo;

