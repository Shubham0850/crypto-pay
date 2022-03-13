import React, { useContext, useState } from "react";
import { GlobalContext } from "../context";
import { BsMenuApp, BsCreditCard2Back } from "react-icons/bs";
import { BiCopy } from "react-icons/bi";
import { FaParachuteBox } from "react-icons/fa";
import { ImArrowDownLeft2, ImArrowUpRight2 } from "react-icons/im";
import { AiOutlineLoading, AiOutlineScan } from "react-icons/ai";
import HomeTab from "../components/HomeTab";
import toast, { Toaster } from "react-hot-toast";
import { handleAirdrop } from "../utils";
import Menu from "../components/Menu";
import withAuth from "../HOC/withAuth";
import { useRouter } from "next/router";
import { MdHistory } from "react-icons/md";
import Link from "next/link";

function Wallet() {
  const { publicKey, balance, setBalance, network, price } =
    useContext(GlobalContext);
  const [airdropLoading, setAirdropLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const walletAddress = `0x${publicKey?.slice(0, 6)}...${publicKey?.slice(-4)}`;

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    toast.success("Address Copied to clipboard");
  };

  const airdrop = async () => {
    setAirdropLoading(true);
    const res = await handleAirdrop(network, publicKey);

    if (typeof res === "number") {
      setBalance(res);
    }

    setAirdropLoading(false);

    console.log(res);
  };

  const scanQrCode = () => {
    router.push("/scan-qr");
  };

  const url =
    "https://cpay.vercel.app/pay?address=4Swbos81KdH2HcAaZccXBWEk8aDWcARXyFmji4m2vsww";

  console.log();

  return (
    <div className="wallet">
      <Toaster position="bottom-center" reverseOrder={false} />

      {menuOpen && (
        <div className="navigation__menu">
          <div className="navigation__menu__content">
            <Menu />
          </div>
          <div className="navigation__menu__close" onClick={closeMenu}></div>
        </div>
      )}

      <nav className="nav">
        <div className="menu" onClick={openMenu}>
          <BsMenuApp className="icon" />
        </div>

        <p>Wallet</p>

        {/* <div className="network">
          <select className="section">
            <option>Devnet</option>
            <option>Testnet</option>
            <option>Mainnet</option>
          </select>
        </div> */}
        <Link href="/history">
          <MdHistory className="icon" />
        </Link>
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
              {airdropLoading ? (
                <AiOutlineLoading className="loading" />
              ) : (
                <FaParachuteBox />
              )}
            </span>
            <p className="p">Airdrop</p>
          </div>
        </div>
      </div>

      <HomeTab />

      <div className="s-pay">
        <button onClick={scanQrCode} className="butn butn--fill mx-auto">
          <AiOutlineScan className="icon" /> Scan and Pay
        </button>
      </div>
    </div>
  );
}

export default withAuth(Wallet);
