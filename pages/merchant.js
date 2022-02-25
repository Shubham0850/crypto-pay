import Link from "next/link";
import React from "react";
import { IoQrCodeOutline } from "react-icons/io5";
import { MdArrowBackIos } from "react-icons/md";
import MerchantTab from "../components/MerchantTab";

export default function Merchant() {
  return (
    <div className="merchant wallet">
      <nav className="nav">
        <Link href="/wallet">
          <div className="back">
            <MdArrowBackIos className="icon" /> Back
          </div>
        </Link>

        <h3>Krishna Store</h3>

        <div className="network">
          <IoQrCodeOutline className="icon" />
        </div>
      </nav>

      <div className="merchant__enter-amount">
        <p>Enter bill amount in SOL</p>
        <input type={"number"} placeholder="0" className="inp" />
        <div className="merchant__spay">
          <p>
            Powered by <img src="/spay.png" alt="spay" />
          </p>
        </div>
      </div>

      <MerchantTab />

      <div className="g-code">
        <button disabled={true} className="btn btn--fill">Generate Payment Code</button>
      </div>
    </div>
  );
}
