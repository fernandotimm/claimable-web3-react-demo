
import { useContext } from "react";
import { WalletContext } from "../contexts/WalletContext";

export const useWalletContext = () => {
  const walletContext = useContext(WalletContext);

  return walletContext;
}