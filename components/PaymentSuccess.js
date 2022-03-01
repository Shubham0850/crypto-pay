import Link from "next/link";
import React from "react";
import { BsShieldCheck } from "react-icons/bs";
import { IoChevronBack } from "react-icons/io5";

export default function PaymentSuccess(props) {
  return (
    <div className="payment-success">
      <div className="payment-success__icon-box">
        <div>
          <BsShieldCheck className="icon" />
          <p>Transaction Successful</p>
          <h3>
            Paid {props.amount} SOL to {props.storeName} at {props.time}
          </h3>
        </div>
      </div>

      <Link href="/wallet">
        <button className="btn">
          <IoChevronBack className="icon" />
          Back to Home
        </button>
      </Link>
    </div>
  );
}
