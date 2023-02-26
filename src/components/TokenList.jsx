import React from "react";

const TokenList = () => {
  const data = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="col-md-12 bg-white mt-5 p-2 rounded">
      <span>Your Tokens List</span>
      {data.map((el, i) => (
        <div key={i + 1}>
          <div className="d-flex justify-content-center align-items-center m-1">
            <span className="badge text-bg-primary me-3">Hey</span>
            <span className="me-3">
              <b>34</b>
            </span>
            <span>
              <small>GOLD COIN</small>
            </span>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TokenList;
