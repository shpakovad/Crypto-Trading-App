import React from "react";

import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";

import { getChartData } from "../../data/chartData";
import { useDeviceDetection } from "../../hooks/useDeviceDetection";
import { ITooltipProps } from "../types";
import { ACTIVE_DOT_STYLE, AXIS_STYLE, CHART_SIZE, TOOLTIP_CURSOR_STYLE } from "./chart-config";
import Controls from "./components/Controls/Controls";
import TradeHistory from "./components/TradeHistory/TradeHistory";
import ConditionChartWrapper from "./ConditionChartWrapper";
import "./PriceChart.scss";

const CustomTooltip = (props: ITooltipProps) => {
  const { active, payload } = props;
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].value}.00`}</p>
      </div>
    );
  }
  return null;
};

const PriceChart = () => {
  const chartData = getChartData();

  const { isMobile } = useDeviceDetection();

  return (
    <div className="chart-container">
      {chartData ? (
        <>
          <ConditionChartWrapper isMobile={isMobile}>
            <AreaChart data={chartData} {...(isMobile ? {} : CHART_SIZE)}>
              <XAxis dataKey="name" axisLine={AXIS_STYLE} />
              <YAxis
                orientation="right"
                domain={["dataMin", "dataMax"]}
                tickFormatter={value => `${value}.00`}
                axisLine={AXIS_STYLE}
              />

              <Tooltip content={<CustomTooltip />} cursor={TOOLTIP_CURSOR_STYLE} />
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ECBD75" stopOpacity={0.8} />
                  <stop offset="50%" stopColor="#ECBD75" stopOpacity={0.1} />
                  <stop offset="100%" stopColor="#ECBD75" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <Area
                strokeWidth={2}
                type="monotone"
                dataKey="uv"
                stroke="#ECBD75"
                fill="url(#areaGradient)"
                dot={false}
                activeDot={ACTIVE_DOT_STYLE}
              />
            </AreaChart>
          </ConditionChartWrapper>
          <TradeHistory />
          <Controls />
        </>
      ) : null}
    </div>
  );
};

export default PriceChart;
