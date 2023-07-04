import {
  HedearStyle,
  Logo,
  HeaderWrapper,
  MenuUl,
  MenuLi,
  MenuLink,
  Option,
} from "./HeaderStyle";
import HeaderLogo from "../../assets/icons/HedearLogo.png";
import HeaderOption from "../../assets/icons/HedearOption.png";

const DefaultHeader = () => {
  return (
    <HedearStyle>
      <HeaderWrapper>
        <Logo src={HeaderLogo} alt="로고" />
        <MenuUl>
          <MenuLi>
            <MenuLink href="#">익명의 버니들</MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink href="#">친구 버니들</MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink href="#">버니톡</MenuLink>
          </MenuLi>
        </MenuUl>
        <Option src={HeaderOption} alt="옵션" />
      </HeaderWrapper>
    </HedearStyle>
  );
};

export default DefaultHeader;
