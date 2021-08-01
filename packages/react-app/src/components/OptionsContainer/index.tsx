import React, { useEffect, useState } from "react";
import Text from "../Text";
import { Wrapper } from "./styles";

import { useWalletContext } from "../../hooks/useWalletContext";
import { useClaimable } from "../../hooks/useClaimable";
import AdminToolbar from "./AdminToolbar";

const OptionsContainer = () => {
  const { selectedAccount, provider } = useWalletContext();
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [isClaimer, setIsClaimer] = useState<boolean>(false);
  const [isClaimable, setIsClaimable] = useState<boolean>(false);
  const [expiredDate, setExpiredDate] = useState<Date>();
  const claimable = useClaimable({provider});

  useEffect(() => {
    const fetchClaimableData = async () => {
      if (claimable) {
        const claimableData = await claimable.isClaimable();
        console.log(claimableData);
        setIsClaimer(claimableData[0]);
        setIsOwner(!claimableData[2]);
        setIsClaimable(claimableData.every(value => value === true));

        const claimableExpDate = await claimable.getExpirationTime();
        setExpiredDate(new Date(claimableExpDate.toNumber() * 1000)); 
      }
    }
    fetchClaimableData();

  }, [claimable, selectedAccount]);
  
  return (
    <Wrapper>
      { !provider ?
        <Text>Please connect your Wallet</Text>
      :
      <>
        <h2>Status of Ownership</h2>
        {isOwner ?
          <>
            <Text>You are the owner of this contract</Text>
            <AdminToolbar />
          </>
        :
          !isClaimer ?
            <Text>You can not claim the ownership of this contract</Text>
          :
            isClaimable ?
              <Text>You can claim the ownership of this contract now.</Text>
            :
              <Text>You can claim the ownership of this contract on {Intl.DateTimeFormat('pt-BR').format(expiredDate)}</Text>
        }        
      </>
    }

    </Wrapper>
    
  );
}

export default OptionsContainer;

