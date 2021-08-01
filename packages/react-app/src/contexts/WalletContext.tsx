import { ExternalProvider, Web3Provider } from "@ethersproject/providers";
import React, { createContext, useEffect, useState, ReactNode } from "react";
import useWeb3Modal from "../hooks/useWeb3Modal";

interface WalletContextData {
  selectedAccount: string;
  provider?: Web3Provider;
  loadWeb3Modal: () => Promise<void>;
  logoutOfWeb3Modal: () => Promise<void>;
}

interface WalletContextProviderProps {
  children: ReactNode;
}

interface CustomExternalProvider extends ExternalProvider {
  on: (typeEvent:string, fallback: (accounts: string[]) => void) => void
}

export const WalletContext = createContext<WalletContextData>(
  {} as WalletContextData
);

export const WalletContextProvider = ({ children }: WalletContextProviderProps) => {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  const [selectedAccount, setSelectedAccount] = useState("");

  useEffect(() => {
      const takeCurrentAddress = async () => {
        if (provider && provider.provider) {
          const customProvider:CustomExternalProvider = provider.provider as CustomExternalProvider;

          if (customProvider.request) {
            const [firstAddress,] = await customProvider.request({ method: 'eth_accounts' });
            setSelectedAccount(firstAddress);
            
            customProvider.on('accountsChanged', (accounts) => setSelectedAccount(accounts[0]));
            customProvider.on('chainChanged', (_chainId) => window.location.reload());
            
          }
        }
      }
      takeCurrentAddress();

  }, [provider]);

  return (
    <WalletContext.Provider value={{selectedAccount, provider, loadWeb3Modal, logoutOfWeb3Modal}}>
      {children}
    </WalletContext.Provider>
  );
}