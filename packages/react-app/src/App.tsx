import React from "react";
import Header from "./components/Header"
import WalletContainer from "./components/WalletContainer";
import Logo from "./components/Logo";
import { Body } from "./components";
import GlobalStyles from "./styles/global"
import { WalletContextProvider } from "./contexts/WalletContext";
import OptionsContainer from "./components/OptionsContainer";

function App() {
  
  return (
    <WalletContextProvider>
      <GlobalStyles />
      <Header>
        <Logo />
        <WalletContainer />
      </Header>
      <Body>
        <OptionsContainer />
      </Body>
    </WalletContextProvider>
  );
}

export default App;
