import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineScan } from "react-icons/ai";
import { IoQrCodeOutline } from "react-icons/io5";
import { MdArrowBackIos, MdGppGood } from "react-icons/md";

export default function MakePayment() {
  const router = useRouter();
  const { recipient, amount, splToken, reference, label, message, memo } =
    router.query;

  return (
    <div className="wallet make-payment">
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

      <div className="make-payment__details">
        <div>
          <h3>{label}</h3>
          <p>{message}</p>
          <h1>$ {amount}</h1>
          <p>{recipient}</p>
          <p>{reference}</p>
          <p>{memo}</p>
        </div>
        <button className="btn">
          <MdGppGood className="icon" />
          Confirm
        </button>
      </div>
    </div>
  );
}
