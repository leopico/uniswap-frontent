import { Button, Modal } from "antd";
import { useState } from "react";
import Toggle from "./Toggle";
const OpensettingPopup = () => {
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <Button type="" onClick={() => setModal2Open(true)}>
        <i className="fa-solid fa-gear"></i>
      </Button>
      <Modal
        title="Setting"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="my-2">
                <span>Slipppage tolerance</span>
                <br />
                <span className="btn btn-sm btn-primary me-3">Auto</span>
                <input
                  type="number"
                  className="w-75 rounded p-1 mt-2"
                  placeholder="0.10%"
                />
              </div>
              <div className="my-2">
                <span>Slipppage tolerance</span>
                <br />
                <input
                  type="number"
                  className="w-75 rounded me-3 p-1 mt-2"
                  placeholder="30"
                />
                <span className="btn btn-sm btn-primary ">minutes</span>
              </div>
              <span>
                <b>Interface Setting</b>
              </span>
              <br />
              <div className="d-flex justify-content-between mb-2">
                <small>Transcation deadline</small>
                <Toggle />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default OpensettingPopup;
