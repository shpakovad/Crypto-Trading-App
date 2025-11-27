import ConnectWallet from "../ConnectWallet/ConnectWallet";
import Header from "../Header/Header";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <ConnectWallet />
    </div>
  );
};

export default Layout;
