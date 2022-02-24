import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [network, setNetwork] = useState("devnet");
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);
  const [mnemonic, setMnemonic] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        network,
        setNetwork,
        account,
        setAccount,
        balance,
        setBalance,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
