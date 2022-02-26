import Link from "next/link";
import React from "react";
import { GiShare } from "react-icons/gi";
import { MdArrowBackIos } from "react-icons/md";
import { QRCode } from "react-qrcode-logo";
import PoweredBy from "../../components/PoweredBy";

export default function ShowQr() {
  return (
    <div className="show-qr merchant-qr merchant wallet">
      <nav className="nav">
        <Link href="/merchant">
          <div className="back">
            <MdArrowBackIos className="icon" /> Back
          </div>
        </Link>

        <h3>Krishna Store</h3>

        <div className="network">
          <GiShare className="icon" />
        </div>
      </nav>

      <div className="merchant-qr__qr-box">
        <div>
          <h3 className="h3">My Qr-Code</h3>
        </div>

        <div className="qr-code">
          <QRCode
            value={"hello"}
            size={300}
            qrStyle={"dots"}
            eyeRadius={10}
            logoImage={"/icon.png"}
            logoOpacity={0.8}
            fgColor={"#333333"}
          />
          <PoweredBy/>
        </div>

        <p>
          Scan this code with your CryptoPay Wallet
        </p>
      </div>
    </div>
  );
}
