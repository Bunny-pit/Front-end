import { HedearStyle } from "./HeaderStyle";
import HeaderLogo from "../../assets/icons/HedearLogo.png";
import HeaderOption from "../../assets/icons/HedearOption.png";
type HeaderProps = {
  text: string;
};
const DefaultHeader = () => {
  return (
    <HedearStyle>
      <div className="wrapper">
        <img className="logo" src={HeaderLogo} />
        <ul>
          <li>
            <a href="#">익명의 버니들</a>
          </li>
          <li>
            <a href="#">친구 버니들</a>
          </li>
          <li>
            <a href="#">버니톡</a>
          </li>
        </ul>
        <img className="option" src={HeaderOption} />
      </div>
    </HedearStyle>
  );
};

export default DefaultHeader;
