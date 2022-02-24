import Image from "next/image";
import * as Bip39 from "bip39";
import React, { useContext, useState } from "react";
import { Keypair } from "@solana/web3.js";
import { GlobalContext } from "../context";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

export default function CreateWallet() {
  const router = useRouter();
  const [phrase, setPhrase] = useState();
  const [copy, setCopy] = useState("Copy Phrase");
  const { setAccount } = useContext(GlobalContext);

  const generatePhrase = () => {
    // Generating mnemonic phrase
    const generatedMnemonic = Bip39.generateMnemonic();

    setPhrase(generatedMnemonic);
  };

  const createAccount = () => {
    // convert the mnemonic to seed bytes and making sure it is of 32-bytes
    const seed = Bip39.mnemonicToSeedSync(phrase).slice(0, 32); // return Uint8Array(32)

    // Generate new Keypair from seed ( new account )
    const newAccount = Keypair.fromSeed(seed); // return keypair

    console.log(newAccount);
//     _keypair:
// publicKey: 
// secretKey: Uint8Array(64) 
// [[Prototype]]: Object
// publicKey: PublicKey
// secretKey: Uint8Array(64)

    // save account on localstorage for now
    window.localStorage.setItem("wallet", JSON.stringify(newAccount));

    // store newAccount in global state
    setAccount(newAccount);

    router.push("/wallet");
  };

  const copyPhrase = () => {
    navigator.clipboard.writeText(phrase);
    toast.success("Phrase copied to clipboard");
  };

  return (
    <div className="intro create-wallet">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="intro__title">
        <img src="/logo2.png" alt="logo" />

        {!phrase ? (
          <div>
            <h3 className="h3">Create wallet</h3>
            <p className="p">
              {`Don't risk losing your funds. Protect your wallet by saving your
              Secret Recovery Phrase in a place you trust. It's the only way to
              recover your wallet if you get locked out of the app or get a new
              device.`}
            </p>
          </div>
        ) : (
          <div>
            <h3 className="h3">Secure your wallet</h3>
            <p className="p">
              Once you have stored this phrase somewhere safe, click finish to
              go to your wallet.
            </p>
          </div>
        )}
      </div>

      {phrase ? (
        <div className="secret-phrase-box">{phrase}</div>
      ) : (
        <img src="/banner2.png" alt="intro" />
      )}

      <div className="btns">
        {phrase && (
          <button className="btn" onClick={copyPhrase}>
            {copy}
          </button>
        )}

        {!phrase ? (
          <button className="btn btn--fill" onClick={generatePhrase}>
            Generate Phrase
          </button>
        ) : (
          <button className="btn btn--fill" onClick={createAccount}>
            Create Wallet
          </button>
        )}
      </div>
    </div>
  );
}
