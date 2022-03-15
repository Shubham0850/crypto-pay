import React, { useContext, useEffect, useState } from "react";
import { IoQrCodeOutline } from "react-icons/io5";
import NavBar from "../components/common/NavBar";
import { GlobalContext } from "../context";
import { paymentHistory } from "../utils";

export default function History() {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const { publicKey, network } = useContext(GlobalContext);

  useEffect(() => {
    paymentHistory(publicKey, network)
      .then((res) => {
        console.log(res);
        setTransactions(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="history wallet">
      <NavBar
        firstLink="/wallet"
        title="Payment History"
        secondLink="/merchant/show-qr"
        secondIcon={<IoQrCodeOutline className="icon" />}
      />

      {loading && <p>Loading..</p>}

      {transactions?.map(
        ({
          feeAmount,
          amount,
          signature,
          sender,
          senderBalance,
          receiver,
          receiverBalance,
        }) => (
          <div className="history__card" key={1}>
            <p>
              fees {feeAmount}
              <br />
              Transaction {amount - feeAmount}
              <br />
              Signature: {signature}
              <br />
              sender: {sender}
              <br />
              senderBalance: {senderBalance}
              <br />
              receiver: {receiver}
              <br />
              receiverBalance: {receiverBalance}
            </p>
          </div>
        )
      )}
    </div>
  );
}
