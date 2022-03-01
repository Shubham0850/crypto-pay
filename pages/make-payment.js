import { createTransaction, parseURL } from "@solana/pay";
import {
  clusterApiUrl,
  Connection,
  Keypair,
  PublicKey,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import BigNumber from "bignumber.js";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineScan } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { IoQrCodeOutline } from "react-icons/io5";
import { MdArrowBackIos, MdGppGood } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
import PaymentSuccess from "../components/PaymentSuccess";
import { GlobalContext } from "../context";
import { updateBalance } from "../utils";

export default function MakePayment() {
  const { publicKey, balance, network } = useContext(GlobalContext);
  const [paymentConfirm, setPaymentConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { url } = router.query;

  const parsedUrl = url ? parseURL(url) : { label: "", message: "" };

  // Keypair purely for testing purposes. Exists only on devnet
  const CUSTOMER_WALLET = Keypair.fromSecretKey(
    Uint8Array.from([
      87, 99, 78, 15, 182, 105, 253, 75, 39, 245, 79, 67, 78, 121, 214, 77, 94,
      14, 60, 89, 104, 70, 208, 189, 18, 5, 174, 103, 63, 37, 174, 194, 187,
      125, 203, 89, 177, 225, 152, 179, 26, 86, 13, 131, 207, 209, 89, 56, 76,
      192, 16, 112, 131, 55, 176, 233, 173, 177, 155, 43, 24, 237, 28, 95,
    ])
  );

  const confirmTransaction = async () => {
    const { recipient, memo, amount, reference } = parsedUrl;

    setLoading(true);
    const connection = new Connection(clusterApiUrl(network), "confirmed");

    const tx = await createTransaction(
      connection,
      new PublicKey(publicKey),
      recipient,
      amount,
      {
        reference,
        memo,
      }
    );

    sendAndConfirmTransaction(connection, tx, [CUSTOMER_WALLET])
      .then((res) => {
        setPaymentConfirm(true);
      })
      .catch((err) => console.log(err));
  };

  paymentConfirm &&
    (async () => {
      await updateBalance(network, publicKey);
    })();

  const copyAddress = () => {
    navigator.clipboard.writeText(merchantWalletAddress);
    toast.success("Address Copied to clipboard");
  };

  const merchantWalletAddress = `0x${parsedUrl?.recipient
    ?.toString()
    ?.slice(0, 6)}...${parsedUrl?.recipient?.toString()?.slice(-4)}`;

  return (
    <div className="wallet make-payment">
      <Toaster position="bottom-center" reverseOrder={false} />
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

      {paymentConfirm ? (
        <PaymentSuccess
          storeName={parsedUrl?.label}
          amount={parsedUrl?.amount?.toNumber()}
          time={Date.now()}
        />
      ) : (
        <div className="make-payment__details">
          <div>
            <h1 className="h1">{parsedUrl?.label}</h1>
            <p>{parsedUrl?.message}</p>
            <h2 className="h2">{parsedUrl?.amount?.toNumber()} SOL</h2>
            <span className="address" onClick={copyAddress}>
              {merchantWalletAddress + "  -"} <BiCopy />
            </span>
            <p>{parsedUrl?.memo}</p>
          </div>
          <h3>In your wallet: {balance}</h3>
          {loading ? (
            <button className="btn" onClick={confirmTransaction}>
              <VscLoading className="icon loading" />
              Processing ..
            </button>
          ) : (
            <button className="btn" onClick={confirmTransaction}>
              <MdGppGood className="icon" />
              Confirm
            </button>
          )}
        </div>
      )}
    </div>
  );
}
