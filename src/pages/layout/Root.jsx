import React from "react";
import { Link, Outlet } from "react-router-dom";
import Walletpopup from "../../components/Walletpopup";
import Logo from "../../images/logo.jpg";
import Eth from "../../images/eth.png";

const Root = () => {
  const connectWallet = () => {
    alert("hello from wallet");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky">
        <div className="container">
          <img
            src={Logo}
            alt="logo"
            width={50}
            height={30}
            className="rounded"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Swap
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tokens">
                  Tokens
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pool">
                  Pools
                </Link>
              </li>
            </ul>

            <div
              className="input-group input-group-sm me-5 my-2"
              style={{ width: "500px" }}
            >
              <span className="input-group-text" id="inputGroup-sizing-sm">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>

            <div className="p-1 rounded me-5 bg-white btn">
              <img
                src={Eth}
                alt="eth"
                width={20}
                height={20}
                className="me-1 rounded-circle"
              />
              <span className="mx-1">Ethereum</span>
            </div>

            <Walletpopup connectWallet={connectWallet} />
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Root;
