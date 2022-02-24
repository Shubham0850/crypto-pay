import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WalletSetup() {
  return (
    <div className="intro wallet-setup">
      <div className="intro__title">
        <img src="/logo2.png" alt="logo"  />
        <h3 className="h3">Wallet setup</h3>
        <p className="p">Import an existing wallet or create a new one</p>
      </div>

      <img src="/banner2.png" alt="intro" />

      <div>
        <Link href="/wallet-setup">
          <button className="btn">Use existing wallet</button>
        </Link>
        <Link href="/create-wallet">
          <button className="btn btn--fill">Create wallet</button>
        </Link>
      </div>
    </div>
  );
}
