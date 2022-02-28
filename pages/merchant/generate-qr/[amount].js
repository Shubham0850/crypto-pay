import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js";
import toast, { Toaster } from "react-hot-toast";
import { MdArrowBackIos } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
import React, { useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import Link from "next/link";
import {
  encodeURL,
  findTransactionSignature,
  FindTransactionSignatureError,
  validateTransactionSignature,
} from "@solana/pay";
import { QRCode } from "react-qrcode-logo";
import withAuth from "../../../HOC/withAuth";

function MerchantQr() {
  const [paymentStatus, setPaymentStatus] = useState();
  const [url, setUrl] = useState("Hello");

  const initiatePayment = async () => {
    // Step 1:- Connecting to the network
    toast.success("Network Connected");
    console.log("1. ✅ Establish connection to the network");
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    // Step 2:- Simulating a customer checkout
    console.log("2. 🛍 Simulate a customer checkout \n");
    const recipient = new PublicKey(
      "4Swbos81KdH2HcAaZccXBWEk8aDWcARXyFmji4m2vsww"
    );
    const amount = new BigNumber(2);
    const reference = new Keypair().publicKey;
    const label = "Krishna Store";
    const message = "General store - all you need";
    const memo = "INV#10001";

    // Step 3:- Create a payment request link
    console.log("3. 💰 Create a payment request link \n");
    const url = encodeURL({
      recipient,
      amount,
      reference,
      label,
      message,
      memo,
    });
    setUrl(url);

    // Step 4:- Check for payment status
    console.log("4. 🔐 Simulate wallet interaction \n");
    // simulateWalletInteraction(connection, url);
    setPaymentStatus("Pending..");

    console.log("\n5. Find the transaction");
    let signatureInfo;
    const { signature } = await new Promise((resolve, reject) => {
      // Recheck payment status until conformed
      const interval = setInterval(async () => {
        // toast.loading("Checking for transaction...");
        console.count("Checking for transaction...");
        try {
          signatureInfo = await findTransactionSignature(
            connection,
            reference,
            undefined,
            "confirmed"
          );
          toast.success("Signature Found!");
          clearInterval(interval);
          resolve(signatureInfo);
        } catch (error) {
          if (!(error instanceof FindTransactionSignatureError)) {
            console.log(error);
            clearInterval(interval);
            reject(error);
          }
        }
      });
    }, 1000);

    setPaymentStatus("Transaction Confirmed");
    // Step 6:- Validating Transaction
    console.log("\n6. 🔗 Validate transaction \n");
    try {
      await validateTransactionSignature(
        connection,
        signature,
        MERCHANT_WALLET,
        amount,
        undefined,
        reference
      );
      setPaymentStatus("Transaction Validated");
      toast.success("Ship orer to Customer");
    } catch (err) {
      console.log("Payment failed", err);
    }
  };

  useEffect(() => {
    initiatePayment();
  }, []);

  return (
    <div className="merchant-qr wallet">
      <nav className="nav">
        <Link href="/merchant">
          <div className="back">
            <MdArrowBackIos className="icon" /> Cancel
          </div>
        </Link>

        <h3>Krishna Store</h3>

        <div className="network">
          <VscLoading className="loading icon" />
        </div>
      </nav>

      <div className="merchant-qr__qr-box">
        <div>
          <h1 className="h1">2.0</h1>
          <h3 className="h3">SOL</h3>
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
        </div>

        <p>
          <b>Scan this code with your CryptoPay Wallet</b>
          <br />
          {` You'll be asked to approve the transaction`}
          <p className="status">{paymentStatus}</p>
        </p>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default withAuth(MerchantQr);
