import Header from "../Header/Header";
import PositionDetails from "../PositionDetails/PositionDetails";
import Wallet from "../Wallet/Wallet";
import "./Layout.scss";
import React, { Suspense } from "react";


const HeavyChart = React.lazy(() => import('../PriceChart/PriceChart'));

const Chart = () => (
    <Suspense fallback={<div/>}>
        <HeavyChart />
    </Suspense>
);
const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Wallet />
      <Chart />
      <PositionDetails />
    </div>
  );
};

export default Layout;
