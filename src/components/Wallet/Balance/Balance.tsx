import { FaHeart } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

import "./Balance.scss";

const Balance = () => {
  return (
    <div className="balance-container">
      <div className="main-balance">
        <span className="title">113,610.07</span>
        <span className="positive">+2,3%</span>
      </div>
      <div className="controls-icons">
        <div>
          <FaHeart />
        </div>
        <div>
          <IoSettingsOutline />
        </div>
      </div>
    </div>
  );
};

export default Balance;
