import React from "react";

import { ResponsiveContainer } from "recharts";

import { CHART_SIZE } from "./chart-config";

interface ConditionWrapperProps {
  isMobile: boolean;
  children: React.ReactNode;
}

const ConditionChartWrapper = ({ isMobile, children }: ConditionWrapperProps) => {
  if (isMobile) {
    return (
      <ResponsiveContainer width="100%" height={CHART_SIZE.height}>
        {children}
      </ResponsiveContainer>
    );
  }

  return <>{children}</>;
};

export default ConditionChartWrapper;
