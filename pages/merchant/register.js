import React, { useState } from "react";
import { GiSave } from "react-icons/gi";
import { MdEdit } from "react-icons/md";
import NavBar from "../../components/common/NavBar";
import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");

export default function Register() {
  const [storeName, setStoreName] = useState(null);
  const [storeDesc, setStoreDesc] = useState(null);
  const [storeAddress, setStoreAddress] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const created = await client.add({
        storeName: storeName,
        storeDescription: storeDesc,
        storeAddress: storeAddress,
      });
      const url = `https://ipfs.infura.io/ipfs/`;
      console.log(created);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="merchant wallet">
      <NavBar
        firstLink="/merchant"
        title="Register new merchant"
        secondLink="/merchant/show-qr"
        secondIcon={<GiSave className="icon" />}
      />

      <div className="merchant__register">
        <h3 className="h3">Please fill this form</h3>

        <input
          type="text"
          placeholder="store name"
          className="inp input"
          onChange={(e) => setStoreName(e.target.value)}
        />

        <textarea
          type="text"
          placeholder="store description"
          className="inp input"
          onChange={(e) => setStoreDesc(e.target.value)}
        />

        <input
          type="text"
          placeholder="address"
          className="inp input"
          onChange={(e) => setStoreAddress(e.target.value)}
        />

        <button onClick={handleSubmit} className="butn butn--full">
          Register
        </button>
      </div>
    </div>
  );
}
