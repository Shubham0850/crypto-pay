import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoQrCodeOutline } from "react-icons/io5";
import { MdArrowBackIos } from "react-icons/md";
import MerchantTab from "../../components/MerchantTab";
import PoweredBy from "../../components/PoweredBy";
import withAuth from "../../HOC/withAuth";

function Merchant() {
  const router = useRouter();
  const [amount, setAmount] = useState(0);

  const generateCode = () => {
    router.push({
      pathname: "/merchant/generate-qr",
      query: {
        requestAmount: amount,
      },
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

        <h3>Krishna Store</h3>

        <Link href="/merchant/show-qr">
          <div className="network">
            <IoQrCodeOutline className="icon" />
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
        <PoweredBy />
      </div>

      <MerchantTab />

      <div className="g-code">
        <button className="btn btn--fill" onClick={generateCode}>
          <IoQrCodeOutline className="icon" /> Generate Payment Code{" "}
        </button>
      </div>
    </div>
  );
}

export default withAuth(Merchant);
