import React from "react";
import Tokens from "./Tokens";

export default function MerchantTab() {
  return (
    <div className="tab">
      <div className="home-tab">
        <div className="home-tab__tab active">
          <p className="p">{`Today`}</p>
        </div>

        <div className="home-tab__tab">
          <p className="p">{"All Payments"}</p>
        </div>
      </div>

      <Tokens/>
    </div>
  );
}
