import { FooterStyle } from "./FooterStyle";
import FooterLogo from "../../assets/icons/FooterLogo.png";
import FooterVector from "../../assets/icons/FooterVector.png";

type HeaderProps = {
  text: string;
};
const DefaultFooter = () => {
  return (
    <FooterStyle>
      <div className="wrapper">
        <div className="sec1">
          <img className="logo" src={FooterLogo} />
          <img className="vector" src={FooterVector} />
        </div>
        <div className="sec2">
          <p>친구들과 함께 만드는 우리의 공간</p>
          <ul>
            <li>
              <a href="#">김종현</a>
            </li>
            <li>
              <a href="#">류이서</a>
            </li>
            <li>
              <a href="#">이준미</a>
            </li>
            <li>
              <a href="#">이종욱</a>
            </li>
            <li>
              <a href="#">오창현</a>
            </li>
          </ul>
          <a href="https://github.com/Bunny-pit/bunny-pit">
            https://github.com/Bunny-pit/bunny-pit
          </a>
        </div>
      </div>
    </FooterStyle>
  );
};

export default DefaultFooter;
