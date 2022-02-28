import { parseURL } from "@solana/pay";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { QrReader } from "react-qr-reader";
import { FiRotateCcw } from "react-icons/fi";

export default function ScanQr() {
  const [facingMode, setFacingMode] = useState("environment");

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

  const changeCam = () => {
    if (facingMode === "environment") {
      setFacingMode("user");
    } else {
      setFacingMode("environment");
    }
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

        <div className="network" onClick={changeCam}>
          <FiRotateCcw className="icon" />
        </div>
      </nav>

      <QrReader
        facingMode={facingMode}
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
