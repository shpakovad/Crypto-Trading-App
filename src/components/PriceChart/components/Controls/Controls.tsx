import "./Controls.scss";

const PERIODS: { name: string; isActive?: boolean }[] = [
  { name: "15S" },
  { name: "1M", isActive: true },
  { name: "1H" },
  { name: "1D" },
];

const Controls = () => {
  return (
    <div className="controls-container">
      <div className="range">
        {PERIODS.map(period => (
          <div key={period.name} className={`period-item ${period.isActive ? "is-active" : ""}`}>
            <span>{period.name}</span>
          </div>
        ))}
      </div>

      <div className="pagination">
        {PERIODS.map(period => (
          <div
            key={`${period.name}-pagination`}
            className={`period-item ${period.isActive ? "is-active" : ""}`}
          >
            <div className="circle" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Controls;
