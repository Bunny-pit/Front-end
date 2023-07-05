import FooterLogo from "../../assets/icons/FooterLogo.png";
import FooterVector from "../../assets/icons/FooterVector.png";
import {
  FooterStyle,
  Wrapper,
  Sec1,
  Logo,
  Line,
  Sec2,
  Title,
  MemberList,
  MemberLink,
  List,
  ProjectLink,
} from "./FooterStyle";

const DefaultFooter = () => {
  return (
    <FooterStyle>
      <Wrapper>
        <Sec1 className="sec1">
          <Logo className="logo" src={FooterLogo} alt="푸터 로고" />
          <Line className="vector" src={FooterVector} alt="선!" />
        </Sec1>
        <Sec2 className="sec2">
          <Title>친구들과 함께 만드는 우리의 공간</Title>
          <MemberList>
            <List>
              <MemberLink
                target="_blank"
                href="https://github.com/PossumCircus"
              >
                김종현
              </MemberLink>
            </List>
            <List>
              <MemberLink target="_blank" href="https://github.com/ryuiseo">
                류이서
              </MemberLink>
            </List>
            <List>
              <MemberLink target="_blank" href="https://github.com/ddun-Ttu">
                이준미
              </MemberLink>
            </List>
            <List>
              <MemberLink target="_blank" href="https://github.com/Loo-ke">
                이종욱
              </MemberLink>
            </List>
            <List>
              <MemberLink target="_blank" href="https://github.com/ChanghyeonO">
                오창현
              </MemberLink>
            </List>
          </MemberList>
          <ProjectLink href="https://github.com/Bunny-pit/bunny-pit">
            https://github.com/Bunny-pit/bunny-pit
          </ProjectLink>
        </Sec2>
      </Wrapper>
    </FooterStyle>
  );
};

export default DefaultFooter;
