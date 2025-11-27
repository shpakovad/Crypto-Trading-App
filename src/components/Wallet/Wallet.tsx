import Balance from "./Balance/Balance";
import ConnectWallet from "./ConnectWallet/ConnectWallet";
import "./Wallet.scss";

const Wallet = () => {
  return (
    <div className="wallet-container">
      <ConnectWallet />
      <Balance />
    </div>
  );
};

export default Wallet;
