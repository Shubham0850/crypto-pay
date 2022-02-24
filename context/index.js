import { createContext, useContext, useEffect, useState } from "react";
import { PriceGetter } from "crypto-price-getter";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [network, setNetwork] = useState("devnet");
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);
  const [mnemonic, setMnemonic] = useState(null);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const keypair = window.localStorage.getItem("wallet");
    console.log(JSON.parse(keypair))
    setAccount(JSON.parse(keypair));
  }, []);

  useEffect(() => {
    (async () => {
      const resPrice = await PriceGetter.getLatestTradePrice("SOL", "USD");
      setPrice(resPrice);
    })();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        network,
        setNetwork,
        account,
        setAccount,
        balance,
        setBalance,
        price,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
