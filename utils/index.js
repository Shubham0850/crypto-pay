import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
const CryptoJS = require("crypto-js");

export const updateBalance = async (network, publicKey) => {
  if (!publicKey) return;

  try {
    // Connect to the blockchain
    const connection = new Connection(clusterApiUrl(network), "confirmed");

    const myAddress = new PublicKey(publicKey);

    // get balance
    const balance = await connection.getBalance(myAddress);

    

    return balance / LAMPORTS_PER_SOL;
  } catch (err) {
    console.log("Balance is not updated", err.message);
  }
};

export const handleAirdrop = async (network, publicKey) => {
  if (!publicKey) return;

  try {
    // Connect to the blockchain
    const connection = new Connection(clusterApiUrl(network), "confirmed");

    const myAddress = new PublicKey(publicKey);

    // Request for airdrop
    const confirmation = await connection.requestAirdrop(
      myAddress,
      LAMPORTS_PER_SOL
    );

    // confirm the transaction
    const result = await connection.confirmTransaction(
      confirmation,
      "confirmed"
    );

    return await updateBalance(network, publicKey);
  } catch (err) {
    console.log("AirDrop failed: ", err.message);
  }
};

export const encryptData = (data) => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    "my-secret-key-@123"
  ).toString();

  return encryptedData;
};

export const decryptData = (data) => {
  const bytes = CryptoJS.AES.decrypt(data, "my-secret-key-@123");

  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

  return decryptedData;
};
