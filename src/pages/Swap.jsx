import React from "react";
import TokenList from "../components/TokenList";
import TokenSwap from "../components/TokenSwap";

const Swap = () => {
  return (
    <div className="container-fluid text-center flex-wrap">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 mt-5">
                <TokenSwap />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="container">
            <div className="row">
              <TokenList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
