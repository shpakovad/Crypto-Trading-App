import { IoClose, IoIosArrowDown, TfiMore } from "../assets/react-icons";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <div className="left-navigation">
        <TfiMore className="more-icon" />
        <IoIosArrowDown className="arrow-icon" />
      </div>
      <div className="title">Mini App</div>
      <IoClose className="close-icon" />
    </header>
  );
};

export default Header;
