import Image from "next/image";
import * as Bip39 from "bip39";
import React, { useState } from "react";

export default function CreateWallet() {
  const [loading, setLoading] = useState(false);
  const [phrase, setPhrase] = useState();

  const generatePhrase = () => {
    // Generating mnemonic phrase
    const generatedMnemonic = Bip39.generateMnemonic();

    setPhrase(generatedMnemonic);
  };

  return (
    <div className="intro create-wallet">
      <div className="intro__title">
        <Image src="/logo.svg" alt="logo" width={200} height={50} />

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
        <img src="/intro.webp" alt="intro" />
      )}

      <div className="btns">
        {phrase && <button className="btn">Copy phrase</button>}

        {!phrase ? (
          <button className="btn btn--fill" onClick={generatePhrase}>
            Generate Phrase
          </button>
        ) : (
          <button className="btn btn--fill" onClick={generatePhrase}>
            Finish
          </button>
        )}
      </div>
    </div>
  );
}
