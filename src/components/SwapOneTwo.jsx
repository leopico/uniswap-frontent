import React, { useState } from "react";
import TokenOne from "./TokenOne";
import TokenTwo from "./TokenTwo";

const SwapOneTwo = () => {
  const [account, setAccount] = useState(false);
  return (
    <div>
      <div className="input-group my-3">
        <input
          type="text"
          className="form-control h-auto"
          placeholder="0"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          <TokenOne />
        </button>
      </div>
      <div className="input-group my-3">
        <input
          type="text"
          className="form-control h-auto"
          placeholder="0"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          <TokenTwo />
        </button>
      </div>
      {account ? (
        <span className="btn btn-lg bg-primary text-white d-block">
          Connect
        </span>
      ) : (
        <span
          onClick={() => {}}
          className="btn btn-lg bg-primary text-white d-block"
        >
          Swap
        </span>
      )}
    </div>
  );
};

export default SwapOneTwo;
