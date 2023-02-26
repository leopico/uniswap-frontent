import React, { useState } from "react";
import { Switch } from "antd";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <div>
      {toggle ? <span>yes</span> : <span>no</span>}
      <Switch onClick={toggler} />
    </div>
  );
};

export default Toggle;
