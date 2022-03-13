import { parseURL } from "@solana/pay";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import QrReader from "react-qr-scanner";
import { FiRotateCcw } from "react-icons/fi";

export default function ScanQr() {
  const [facingMode, setFacingMode] = useState("environment");

  const router = useRouter();

  const readCode = (url) => {
    localStorage.setItem("url", url);
    router.push("/make-payment");
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

      {/* <QrReader
        facingMode={facingMode}
        onResult={(result, error) => {
          console.log(result);
          if (!!result) {
            readCode(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        className="qr-code-cam"
      /> */}

      {typeof window !== "undefined" && (
        <QrReader
          delay={500}
          onScan={(res) => console.log(res?.text)}
          onError={(err) => console.log(err)}
        />
      )}
    </div>
  );
}
