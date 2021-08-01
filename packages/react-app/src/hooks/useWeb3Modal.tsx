import { useCallback, useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

// Enter a valid infura key here to avoid being rate limited
// You can get a key for free at https://infura.io/register
const INFURA_ID: string = "INVALID_INFURA_KEY";

const NETWORK_NAME: string = process.env.REACT_APP_BLOCKCHAIN_NETWORK ?? "mainnet";

interface ConfigWeb3Modal {
  autoLoad: boolean;
  infuraId: string;
  network: string;
}

const initialConfigValues:ConfigWeb3Modal = {
  autoLoad: true,
  infuraId: '',
  network: NETWORK_NAME,
}

const useWeb3Modal = (config:ConfigWeb3Modal = initialConfigValues) => {
  const [provider, setProvider] = useState<Web3Provider>();
  const [autoLoaded, setAutoLoaded] = useState(false);
  const { autoLoad = true, infuraId = INFURA_ID, network = NETWORK_NAME } = config;
  
  // Web3Modal also supports many other wallets.
  // You can see other options at https://github.com/Web3Modal/web3modal
  const web3Modal: Web3Modal = new Web3Modal({
    // disableInjectedProvider: true,
    network,
    cacheProvider: false,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId
        }
      },
    },
  });

  // Open wallet selection modal.
  const loadWeb3Modal = useCallback(async () => {
    const newProvider = await web3Modal.connect();
    setProvider(new Web3Provider(newProvider));

  }, [web3Modal]);

  const logoutOfWeb3Modal = useCallback(
    async function () {
      await web3Modal.clearCachedProvider();
      window.location.reload();
    },
    [web3Modal],
  );

  // If autoLoad is enabled and the the wallet had been loaded before, load it automatically now.
  useEffect(() => {
    if (autoLoad && !autoLoaded && web3Modal.cachedProvider) {
      loadWeb3Modal();
      setAutoLoaded(true);
    }
  }, [autoLoad, autoLoaded, loadWeb3Modal, setAutoLoaded, web3Modal.cachedProvider]);

  return [provider, loadWeb3Modal, logoutOfWeb3Modal] as const;
}

export default useWeb3Modal;
