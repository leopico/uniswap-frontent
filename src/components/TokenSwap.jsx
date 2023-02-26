import React from "react";
import OpensettingPopup from "./OpensettingPopup";
import SwapOneTwo from "./SwapOneTwo";

const TokenSwap = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-lg-10 bg-white rounded-3 p-3">
          <div className="d-flex justify-content-between align-items-center">
            <span>Swap</span>
            <OpensettingPopup />
          </div>
          <SwapOneTwo />
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};

export default TokenSwap;
