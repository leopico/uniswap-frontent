import { Button, Modal } from "antd";
import { useState } from "react";
import ethImage from "../images/eth.png";
const TokenTwo = () => {
  const coin = [
    {
      img: ethImage,
      name: "ETH",
    },
    {
      img: ethImage,
      name: "BTC",
    },
    {
      img: ethImage,
      name: "SOL",
    },
    {
      img: ethImage,
      name: "ADA",
    },
    {
      img: ethImage,
      name: "BNB",
    },
    {
      img: ethImage,
      name: "DOG",
    },
  ];
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
      <Button className="bg-primary " onClick={() => setModal2Open(true)}>
        <img width={20} height={15} src={ethImage} alt="logo" />
        <span className="text-white me-2">9474</span>
      </Button>
      <Modal
        title="Select Token"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        {coin.map((el, i) => (
          <button
            key={i + 1}
            className="btn btn-sm btn-outline-primary p-1 m-1"
          >
            <img width={20} height={15} src={el.img} alt="logo" />
            <span className="me-2">{el.name}</span>
          </button>
        ))}
      </Modal>
    </>
  );
};
export default TokenTwo;
