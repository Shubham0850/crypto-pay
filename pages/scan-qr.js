import { parseURL } from "@solana/pay";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import dynamic from "next/dynamic";
const QrReader = dynamic(() => import("modern-react-qr-reader"), {
  ssr: false,
});
import { FiRotateCcw } from "react-icons/fi";

export default function ScanQr() {
  const [facingMode, setFacingMode] = useState("environment");

  const router = useRouter();

  const readCode = (url) => {
    if (url) {
      localStorage.setItem("url", url);
      router.push("/make-payment");
    }
  };

  const changeCam = () => {
    if (facingMode === "environment") {
      setFacingMode("user");
    } else {
      setFacingMode("environment");
    }
  };

  return (
    <div className="wallet qr-code">
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

      {typeof window !== "undefined" && (
        <QrReader
          delay={500}
          onScan={(res) => {
            readCode(res?.text);
          }}
          onError={(err) => console.log(err)}
          facingMode={facingMode}
          className="qr-code-cam"
        />
      )}
    </div>
  );
}
