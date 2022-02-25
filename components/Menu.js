import React from "react";
import Link from "next/link";

import { IoWalletOutline } from "react-icons/io5";
import { RiHistoryLine, RiStore2Line } from "react-icons/ri";
import { GiShare } from "react-icons/gi";
import { MdTravelExplore } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi";

export default function Menu() {
  return (
    <div className="menu hide-on-pc">
      <div className="menu__logo">
        <img src="/logo2.png" alt="logo" />
      </div>

      <div className="menu__btns">
        <button className="btn">
          Send
          <FiArrowUpRight />{" "}
        </button>
        <button className="btn">
          Add Fund <FiArrowDownLeft />
        </button>
      </div>

      <div className="menu__top">
        <Link href="/about">
          <a className="menu__link">
            <IoWalletOutline className="icon" /> Wallet
          </a>
        </Link>
        <Link href="/offers">
          <a className="menu__link">
            <RiHistoryLine className="icon" /> Transaction History
          </a>
        </Link>
        <Link href="/services">
          <a className="menu__link">
            <GiShare className="icon" /> Share my Public Address
          </a>
        </Link>
        <Link href="/dental-care">
          <a className="menu__link">
            <MdTravelExplore className="icon" /> View on solana explorer
          </a>
        </Link>
        <Link href="/merchant">
          <a className="menu__link">
            <RiStore2Line className="icon" /> Merchant
          </a>
        </Link>
        <Link href="#contact">
          <a className="menu__link">
            <HiOutlineLogout className="icon" /> Log Out
          </a>
        </Link>
      </div>
    </div>
  );
}
