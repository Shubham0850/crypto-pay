import React from "react";
import Tokens from "./Tokens";

export default function HomeTab() {
  return (
    <div className="tab">
      <div className="home-tab">
        <div className="home-tab__tab active">
          <p className="p">{`Tokens`}</p>
        </div>

        <div className="home-tab__tab">
          <p className="p">{"NFTs"}</p>
        </div>
      </div>

      <Tokens/>
    </div>
  );
}
