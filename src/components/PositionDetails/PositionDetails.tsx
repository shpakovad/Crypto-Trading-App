import { PositionsIcon, ProfileIcon, RewardsIcon, TradeIcon } from "../assets/icons/Icons";
import { IoIosArrowDown } from "../assets/react-icons";
import { INavigation } from "../types";
import "./PositionDetails.scss";

const NAV_ITEMS: INavigation[] = [
  { name: "Trade", icon: <TradeIcon />, isActive: true },
  { name: "Positions", icon: <PositionsIcon /> },
  { name: "Rewards", icon: <RewardsIcon />, reward: "345,29k" },
  { name: "Profile", icon: <ProfileIcon /> },
];

interface IClassesProps {
  isActive?: boolean;
  reward?: string;
}

const getClassForNavItem = ({ isActive, reward }: IClassesProps) =>
  ["nav-item", isActive && "is-active", reward && "reward"].filter(Boolean).join(" ");

const PositionDetails = () => {
  return (
    <div className="position-details-container">
      <div className="position-header">
        <h2 className="position-title">Position details</h2>
        <div className="position-metrics">
          <div className="metric">
            <span>Margin $10</span>
            <span>Leverage 10x</span>
          </div>
          <IoIosArrowDown className="arrow-icon" />
        </div>
      </div>
      <div className="position-type">
        <button className="long">Long</button>
        <button className="short">Short</button>
      </div>
      <nav className="position-nav">
        {NAV_ITEMS.map(nav => (
          <div
            className={getClassForNavItem({ isActive: nav.isActive, reward: nav.reward })}
            key={nav.name}
          >
            <span className="img-container">{nav.icon}</span>
            <span className="name">{nav.name}</span>
            {nav.reward && <div className="reward-title">{nav.reward}</div>}
          </div>
        ))}
      </nav>
      <div className="home-indicator">
        <div className="indicator" />
      </div>
    </div>
  );
};

export default PositionDetails;
