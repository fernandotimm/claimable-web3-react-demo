import { Web3Provider } from "@ethersproject/providers";
import { useEffect, useState } from "react";

import {Claimable, Claimable__factory} from "../typechain/types/ethers-contracts";

const claimableAddress:string = process.env.REACT_APP_CLAIMABLE_ADDRESS || "";

interface ClaimableProps {
  provider?: Web3Provider;
}

export const useClaimable = ({ provider }:ClaimableProps) => {
  const [contract, setContract] = useState<Claimable>();

  useEffect(() => {
    if (provider) {
      getMyNetwork(provider);

      const claimable:Claimable = Claimable__factory.connect(claimableAddress, provider.getSigner());
      setContract(claimable);
    }

    async function getMyNetwork(provider:Web3Provider) {
      console.log(await provider.getNetwork());
    }


  }, [provider]);

  return contract;
}