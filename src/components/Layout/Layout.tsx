import Header from "../Header/Header";
import PriceChart from "../PriceChart/PriceChart";
import Wallet from "../Wallet/Wallet";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Wallet />
      <PriceChart />
    </div>
  );
};

export default Layout;
