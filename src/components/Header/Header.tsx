import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { TfiMore } from "react-icons/tfi";

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
