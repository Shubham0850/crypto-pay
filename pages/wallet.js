import React, { useContext } from "react";
import { GlobalContext } from "../context";
import { BsMenuApp, BsCreditCard2Back } from "react-icons/bs";
import { BiCopy } from "react-icons/bi";
import { FaParachuteBox } from "react-icons/fa";
import { ImArrowDownLeft2, ImArrowUpRight2 } from "react-icons/im";
import { AiOutlineSwap, AiOutlineDownload } from "react-icons/ai";
import HomeTab from "../components/HomeTab";
import toast, { Toaster } from "react-hot-toast";

export default function Wallet() {
  const { account, balance, setBalance, network } = useContext(GlobalContext);

  const address = account?.publicKey.toString();
  const walletAddress = `0x${address?.slice(0, 6)}...${address?.slice(-4)}`;

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    toast.success("Address Copied to clipboard");
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
          <p className="p balance">₹0.0</p>
          <span className="address" onClick={copyAddress}>
            {walletAddress} <BiCopy />
          </span>
        </div>

        <div className="btns">
          <div>
            <span className="b">
              <ImArrowDownLeft2 />
            </span>
            Receive
          </div>
          <div>
            <span className="b">
              <BsCreditCard2Back />
            </span>
            Buy
          </div>
          <div>
            <span className="b">
              <ImArrowUpRight2 />
            </span>
            Send
          </div>
          <div>
            <span className="b">
              <FaParachuteBox />
            </span>
            Airdrop
          </div>
        </div>
      </div>

      <HomeTab />
    </div>
  );
}
