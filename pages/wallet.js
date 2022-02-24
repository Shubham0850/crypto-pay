import React, { useContext, useState } from "react";
import { GlobalContext } from "../context";
import { BsMenuApp, BsCreditCard2Back } from "react-icons/bs";
import { BiCopy } from "react-icons/bi";
import { FaParachuteBox } from "react-icons/fa";
import { ImArrowDownLeft2, ImArrowUpRight2 } from "react-icons/im";
import HomeTab from "../components/HomeTab";
import toast, { Toaster } from "react-hot-toast";
import { handleAirdrop } from "../utils";

export default function Wallet() {
  const { account, balance, setBalance, network, price } = useContext(GlobalContext);
  const [airdropLoading, setAirdropLoading] = useState(false);

  const address = account?.publicKey.toString();
  const walletAddress = `0x${address?.slice(0, 6)}...${address?.slice(-4)}`;

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    toast.success("Address Copied to clipboard");
  };

  const airdrop = async () => {
    setAirdropLoading(true);
    const res = await handleAirdrop(network, account);

    if (typeof res === "number") {
      setBalance(res);
    }

    setAirdropLoading(false);

    console.log(res);
  };

  return (
    <div className="wallet">
      <Toaster position="bottom-center" reverseOrder={false} />
      <nav className="nav">
        <div className="menu">
          <BsMenuApp className="icon" />
        </div>

        <p>Wallet</p>

        <div className="network">
          <select className="section">
            <option>Devnet</option>
            <option>Testnet</option>
            <option>Mainnet</option>
          </select>
        </div>
      </nav>

      <div className="wallet__profile">
        <div className="wallet__profile-img">
          <img src="/profile.png" alt="profile" />
        </div>
        <div>
          <h3 className="h3">Account 1</h3>
          <p className="p balance">$ {price * balance}</p>
          <span className="address" onClick={copyAddress}>
            {walletAddress + "  -"} <BiCopy />
          </span>
        </div>

        <div className="btns">
          <div>
            <span className="b">
              <ImArrowDownLeft2 />
            </span>
            <p className="p">Receive</p>
          </div>
          <div>
            <span className="b">
              <BsCreditCard2Back />
            </span>
            <p className="p">Buy</p>
          </div>
          <div>
            <span className="b">
              <ImArrowUpRight2 />
            </span>
            <p className="p">Send</p>
          </div>
          <div>
            <span className="b" onClick={airdrop}>
              <FaParachuteBox />
            </span>
            <p className="p">{airdropLoading ? "Loading.." : "Airdrop"}</p>
          </div>
        </div>
      </div>

      <HomeTab />
    </div>
  );
}
