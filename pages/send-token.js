import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { IoQrCodeOutline } from "react-icons/io5";
import { MdArrowBackIos, MdGppGood } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
import PoweredBy from "../components/PoweredBy";
import { GlobalContext } from "../context";
import { getCustomerWallet, sendToken } from "../utils";

export default function SendToken() {
  const { publicKey, balance, network } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [amount, setAmount] = useState(0);
  const [toAddress, setToAddress] = useState(null);

  const sendTransaction = async () => {
    setLoading(true);
    const signer = getCustomerWallet();

    const transactionDetails = {
      fromPubKey: new PublicKey(publicKey),
      toPubKey: new PublicKey(toAddress),
      amount: LAMPORTS_PER_SOL * amount,
      signer,
      network
    };

    sendToken(transactionDetails)
      .then((res) => {
        setConfirm(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="merchant wallet">
      <nav className="nav">
        <Link href="/wallet">
          <div className="back">
            <MdArrowBackIos className="icon" /> Back
          </div>
        </Link>

        <h3>Send Token</h3>

        <Link href="/merchant/show-qr">
          <div className="network">
            <IoQrCodeOutline className="icon" />
          </div>
        </Link>
      </nav>

      <div className="merchant__enter-amount">
        <p>Enter amount in SOL</p>
        <input
          type={"number"}
          placeholder="0"
          className="inp"
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type={"text"}
          placeholder="wallet address"
          className="inp-txt"
          onChange={(e) => setToAddress(e.target.value)}
        />
      </div>

      <p>In your wallet: {balance}</p>

      {loading ? (
        <button className="btn">
          <VscLoading className="icon loading" />
          Processing ..
        </button>
      ) : (
        <button className="btn" onClick={sendTransaction}>
          <MdGppGood className="icon" />
          Send
        </button>
      )}
    </div>
  );
}
