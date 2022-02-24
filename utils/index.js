import { clusterApiUrl, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

export const updateBalance = async (network, account) => {
  if (!account) return;

  try {
    // Connect to the blockchain
    const connection = new Connection(clusterApiUrl(network), "confirmed");

    // get publickey
    const publicKey = account.publicKey;

    // get balance
    const balance = await connection.getBalance(publicKey);

    return balance / LAMPORTS_PER_SOL;
  } catch (err) {
    console.log("Balance is not updated", err.message);
  }
};

export const handleAirdrop = async (network, account) => {
  if (!account) return;

  try {
    // Connect to the blockchain
    const connection = new Connection(clusterApiUrl(network), "confirmed");

    // get PublicKey
    const publicKey = account.publicKey;

    // Request for airdrop
    const confirmation = await connection.requestAirdrop(
      publicKey,
      LAMPORTS_PER_SOL
    );

    // confirm the transaction
    const result = await connection.confirmTransaction(
      confirmation,
      "confirmed"
    );

    return await updateBalance(network, account);
  } catch (err) {
    console.log("AirDrop failed: ", err.message);
  }
};
