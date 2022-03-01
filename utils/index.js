import { createTransaction } from "@solana/pay";
import {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import Cookies from "js-cookie";
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

export const handleTransaction = async (transactionDetails) => {
  const { recipient, memo, amount, reference, signer, network, publicKey } =
    transactionDetails;

  const connection = new Connection(clusterApiUrl(network), "confirmed");

  const tx = await createTransaction(
    connection,
    new PublicKey(publicKey),
    recipient,
    amount,
    {
      reference,
      memo,
    }
  );

  return sendAndConfirmTransaction(connection, tx, [signer]);
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

export const getCustomerWallet = () => {
  const esKey = Cookies.get("PrivateKey");

  const sKey = decryptData(esKey);

  const secKeyArray = Object.values(JSON.parse(sKey));

  const customerWallet = Keypair.fromSecretKey(Uint8Array.from(secKeyArray));

  return customerWallet;
};
