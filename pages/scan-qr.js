import { parseURL } from "@solana/pay";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
import { QrReader } from "react-qr-reader";

export default function ScanQr() {
  const router = useRouter();
  const readCode = (url) => {
    const { recipient, amount, splToken, reference, label, message, memo } =
      parseURL(url);

    router.push({
      pathname: "/make-payment",
      query: {
        recipient,
        amount,
        splToken,
        reference,
        label,
        message,
        memo,
      },
    });
  };

  return (
    <div className="qr-code">
      <nav className="nav">
        <Link href="/wallet">
          <div className="back">
            <MdArrowBackIos className="icon" /> Cancel
          </div>
        </Link>

        <h3>Scan Code</h3>

        <div className="network">
          <VscLoading className="loading icon" />
        </div>
      </nav>

      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            readCode(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        className="qr-code-cam"
      />
    </div>
  );
}
