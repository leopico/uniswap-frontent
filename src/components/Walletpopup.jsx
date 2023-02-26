import { Button, Modal } from "antd";
import { useState } from "react";
const Walletpopup = ({ connectWallet }) => {
  const [modal2Open, setModal2Open] = useState(false);
  const walletMenu = ["MetaMask", "Coinbase", "Wallet", "WalletConnect"];
  return (
    <>
      <Button type="" onClick={() => setModal2Open(true)}>
        <i className="fa-solid fa-wallet me-2"></i>connect
      </Button>
      <Modal
        title="Connect with your wallet"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        {walletMenu.map((el, i) => (
          <p
            key={i + 1}
            onClick={() => connectWallet()}
            className="btn btn-sm btn-primary d-block my-3 p-2"
          >
            {el}
          </p>
        ))}

        <p className="border border-outline-primary p-2 rounded">
          <small>
            <b>
              By connecting a wallet,you agree to Uniswap Labs' Terms of Service
              and consent to its Privacy Policy
            </b>
          </small>
        </p>
      </Modal>
    </>
  );
};
export default Walletpopup;
