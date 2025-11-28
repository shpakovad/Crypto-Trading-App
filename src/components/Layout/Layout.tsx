import Header from "../Header/Header";
import PositionDetails from "../PositionDetails/PositionDetails";
import PriceChart from "../PriceChart/PriceChart";
import Wallet from "../Wallet/Wallet";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Wallet />
      <PriceChart />
      <PositionDetails />
      <div className="home-indicator">
        <div className="indicator" />
      </div>
    </div>
  );
};

export default Layout;
