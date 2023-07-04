import {
  HedearStyle,
  Logo,
  HeaderWrapper,
  MenuUl,
  MenuLi,
  Option,
} from "./HeaderStyle";
import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/icons/HedearLogo.png";
import HeaderOption from "../../assets/icons/HedearOption.png";

const DefaultHeader = () => {
  return (
    <HedearStyle>
      <HeaderWrapper>
        <Logo src={HeaderLogo} alt="로고" />
        <MenuUl>
          <MenuLi>
            <Link to="bunnies">익명의 버니들</Link>
          </MenuLi>
          <MenuLi>
            <Link to="friends">친구 버니들</Link>
          </MenuLi>
          <MenuLi>
            <Link to="talk">버니톡</Link>
          </MenuLi>
        </MenuUl>
        <Option src={HeaderOption} alt="옵션" />
      </HeaderWrapper>
    </HedearStyle>
  );
};

export default DefaultHeader;
