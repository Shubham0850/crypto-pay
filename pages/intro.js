import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro__title">
        <Image src="/logo.svg" alt="logo" width={200} height={50} />
        <h3 className="h3">Welcome to CryptoPay</h3>
        <p className="p">
          Trusted by people, CryptoPay is a secure wallet makeing the
          Decentralised payments accessible to all.
        </p>
      </div>

      <img src="/intro.webp" alt="intro" />

      <Link href="/wallet-setup">
        <button className="btn">Get Started</button>
      </Link>
    </div>
  );
}
