import React, { useEffect } from "react";
import WalletButton from "../WalletButton";
import Text from "../Text";
import { Wrapper } from "./styles";
import { shortenAddress } from "../../helpers/formatAddress";

import { useWalletContext } from "../../hooks/useWalletContext";
import { useClaimable } from "../../hooks/useClaimable";

const WalletContainer = () => {
  const { selectedAccount, provider } = useWalletContext();

  const claimable = useClaimable({provider});
  
  useEffect(() => {
    const getExpTime = async () => {
      if (claimable) {
        const expTime = await claimable.getExpirationTime();
        console.log('### claimable', new Date(expTime.toNumber() * 1000));
      }
    }
    getExpTime();

  }, [claimable]);
  
  return (
    <Wrapper>
      <Text>{shortenAddress(selectedAccount)}</Text>
      <WalletButton />
    </Wrapper>
    
  );
}

export default WalletContainer;

