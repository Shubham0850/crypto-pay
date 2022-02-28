import { encodeURL } from "@solana/pay";
import { Keypair, PublicKey } from "@solana/web3.js";
import BigNumber from "bignumber.js";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { GiShare } from "react-icons/gi";
import { MdArrowBackIos } from "react-icons/md";
import { QRCode } from "react-qrcode-logo";
import PoweredBy from "../../components/PoweredBy";
import { GlobalContext } from "../../context";
import withAuth from "../../HOC/withAuth";

function ShowQr() {
  const [url, setUrl] = useState("Hello");
  const [pKey, setPKey] = useState();

  useEffect(() => {
    const publicKey = Cookies.get("publicKey");
    console.log(publicKey);
    setPKey(publicKey);

    if (pKey) {
      const recipient = new PublicKey(pKey);
      const amount = new BigNumber(0);
      const reference = new Keypair().publicKey;
      const label = "Krishna Store";
      const message = "General store - all you need";
      const memo = "INV#10001";

      const urlData = encodeURL({
        recipient,
        amount,
        reference,
        label,
        message,
        memo,
      });

      setUrl(urlData);
    }
  }, [pKey]);

  console.log(pKey);

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
            value={url}
            size={300}
            qrStyle={"dots"}
            eyeRadius={10}
            logoImage={"/icon.png"}
            logoOpacity={0.8}
            fgColor={"#333333"}
          />
          <PoweredBy />
        </div>

        <p>Scan this code with your CryptoPay Wallet</p>
      </div>
    </div>
  );
}

export default withAuth(ShowQr);
