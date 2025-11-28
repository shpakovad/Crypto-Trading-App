import { useMemo, useState } from "react";

import { BtcIcon, UnionIcon, UsdcIcon } from "../../assets/icons/Icons";
import { IoClose, IoIosArrowDown } from "../../assets/react-icons";
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
        <BtcIcon />
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
            <UsdcIcon className="usdc-icon" />
            <span>15,000.00</span>
            <IoIosArrowDown className="arrow-icon" />
            <div className="wallet-icon-container">
              <UnionIcon />
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
