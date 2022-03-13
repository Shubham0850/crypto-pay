import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
import BigNumber from "bignumber.js";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { IoQrCodeOutline } from "react-icons/io5";
import { MdArrowBackIos } from "react-icons/md";
import { GlobalContext } from "../context";
import { paymentHistory } from "../utils";

export default function History() {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const { publicKey, balance, network } = useContext(GlobalContext);

  useEffect(() => {
    paymentHistory(publicKey, network)
      .then((res) => {
        console.log(res);
        setTransactions(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="history wallet">
      <nav className="nav">
        <Link href="/wallet">
          <div className="back">
            <MdArrowBackIos className="icon" /> Back
          </div>
        </Link>

        <h3>Payment History</h3>

        <Link href="/merchant/show-qr">
          <div className="network">
            <IoQrCodeOutline className="icon" />
          </div>
        </Link>
      </nav>

      {loading && <p>Loading..</p>}

      {transactions?.map((el) => (
        <div key={el.key}>
          <p>
            {el?.feeAmount} - {el?.transactionAmount}
          </p>
        </div>
      ))}
    </div>
  );
}
