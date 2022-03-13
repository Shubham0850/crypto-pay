import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { AiOutlineScan } from "react-icons/ai";
import { MdArrowBackIos, MdGppGood } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
import { GlobalContext } from "../context";
import { getCustomerWallet, sendToken } from "../utils";

export default function Pay() {
  const router = useRouter();
  const { address } = router.query;
  const { publicKey, balance, network } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [amount, setAmount] = useState(0);

  const sendTransaction = async () => {
    setLoading(true);
    const signer = getCustomerWallet();

    const transactionDetails = {
      fromPubKey: new PublicKey(publicKey),
      toPubKey: new PublicKey(address),
      amount: LAMPORTS_PER_SOL * amount,
      signer,
      network,
    };

    sendToken(transactionDetails)
      .then((res) => {
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="wallet Pay">
      <nav className="nav">
        <Link href="/wallet">
          <div className="back">
            <MdArrowBackIos className="icon" /> Back
          </div>
        </Link>

        <h3>Confirm Transaction</h3>

        <Link href="/merchant/show-qr">
          <div className="network">
            <AiOutlineScan className="icon" />
          </div>
        </Link>
      </nav>

      <div className="merchant__enter-amount">
        <p>Enter bill amount in SOL</p>
        <input
          type={"number"}
          placeholder="0"
          className="inp"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <p>In your wallet: {balance}</p>

      {loading ? (
        <button className="butn">
          <VscLoading className="icon loading" />
          Processing ..
        </button>
      ) : (
        <button className="butn" onClick={sendTransaction}>
          <MdGppGood className="icon" />
          Send
        </button>
      )}
    </div>
  );
}
