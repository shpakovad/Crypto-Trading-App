import { useMemo, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import btcIcon from "../../../library/icons/btc.svg";
import unionIcon from "../../../library/icons/union.svg";
import usdcIcon from "../../../library/icons/usdc.svg";
import "./ConnectWallet.scss";

const ConnectWallet = () => {
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [isFinishedConnecting, setIsFinishedConnecting] = useState<boolean>(false);

  const classNameForConnectingBtn = useMemo(
    () => ["connect-btn", isConnecting && "disabled"].filter(Boolean).join(" "),
    [isConnecting]
  );

  const handleButtonClick = () => {
    if (isConnecting) return;
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      setIsFinishedConnecting(true);
    }, 1500);
  };

  return (
    <div className="connection-container">
      <div className="left-navigation">
        <img alt="btc-icon" src={btcIcon} />
        <span className="title-1">BTCDEGEN/USDC</span>
        <div className="title-2">
          <span>100</span>
          <IoClose className="close-icon" />
          <IoIosArrowDown className="arrow-icon" />
        </div>
      </div>
      <div className="right-navigation">
        {isFinishedConnecting ? (
          <div className="connected-wallet">
            <img src={usdcIcon} alt="usdc-icon" className="usdc-icon" />
            <span>15,000.00</span>
            <IoIosArrowDown className="arrow-icon" />
            <div className="wallet-icon-container">
              <img src={unionIcon} alt="union-icon" />
            </div>
          </div>
        ) : (
          <button
            onClick={handleButtonClick}
            className={classNameForConnectingBtn}
            type="button"
            aria-label="connect-wallet"
            disabled={isConnecting}
          >
            <span className="title">{isConnecting ? "Connecting..." : "Connect Wallet"}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ConnectWallet;
