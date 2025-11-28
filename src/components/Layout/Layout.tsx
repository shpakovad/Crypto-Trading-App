import React, { Suspense } from "react";

import Header from "../Header/Header";
import PositionDetails from "../PositionDetails/PositionDetails";
import Wallet from "../Wallet/Wallet";
import "./Layout.scss";
import {CHART_SIZE} from "../PriceChart/chart-config";

const HeavyChart = React.lazy(() => import("../PriceChart/PriceChart"));

const Chart = () => (
  <Suspense fallback={<div style={{height:CHART_SIZE.height}} />}>
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
