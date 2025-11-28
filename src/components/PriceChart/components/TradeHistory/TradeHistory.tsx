import { ITrade } from "../../../types";
import "./TradeHistory.scss";

const TRADE_DATA: ITrade[] = [
  {
    id: 1,
    name: "Dany",
    time: "12:32",
    action: "Opened Long",
    amount: "10X",
    style: { bottom: "90px", left: "12px" },
  },
  {
    id: 2,
    name: "Gabriel",
    time: "12:45",
    action: "Opened Short",
    amount: "100X",
    style: { bottom: "43px", left: "12px" },
  },
];

const TradeHistory = () => {
  return (
    <div className="trade-history">
      {TRADE_DATA.map(trade => (
        <div
          key={trade.id}
          className={`trade-item item-${trade.id}`}
          style={{ ...trade.style }}
          id={`#${trade.id}`}
        >
          <div className="trade-header">
            <span className="trade-name">{trade.name}</span>
            <span className="trade-time">Today at {trade.time}</span>
          </div>
          <div className="trade-action">
            {trade.action} {trade.amount}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TradeHistory;
