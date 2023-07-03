import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
`;
export const FirstSection = styled.div`
  width: 100%;
  height: 71rem;
  margin: 0 auto;
  background: linear-gradient(
    180deg,
    #7954f8 0%,
    rgba(251, 155, 249, 0.62) 55.73%,
    rgba(251, 155, 249, 0) 100%
  );
`;
export const Header = styled.div`
  padding: 4rem 8rem;
  display: flex;
  align-item: center;
  justify-content: space-between;
`;
export const Logo = styled.img`
  width: 10%;
`;
export const BtnContainer = styled.div`
  margin-top: 4rem;
`;
export const LogIn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 2rem;
  color: ${({ theme }) => theme.colors.background};
  font-weight: 800;
  font-size: 2rem;
`;

export const SignUp = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.background};
  font-weight: 800;
  font-size: 2rem;
`;
export const MainContent = styled.div`
  margin-top: 13rem;
  margin-left: 8rem;
`;
export const BigText1 = styled.p`
  color: ${({ theme }) => theme.colors.background};
  font-size: 8rem;
  font-weight: 900;
`;
export const BigText2 = styled.p`
  color: ${({ theme }) => theme.colors.pointcolor};
  font-size: 8rem;
  font-weight: 900;
  margin-top: -5.5rem;
`;
export const MidText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  line-height: 5rem;
`;
export const ImgContainer = styled.div`
  margin-left: 90rem;
  margin-top: -55rem;
  position: relative;
`;
export const GHeart = styled.img`
  position: absolute;
  top: 0;
  left: 2rem;
  width: 15rem;
`;
export const BHeart = styled.img`
  position: absolute;
  top: 30rem;
  left: -10rem;
`;
export const PHeart = styled.img`
  position: absolute;
  top: 35rem;
  left: 45rem;
  width: 12rem;
`;
export const MainAvatar = styled.img`
  width: 50rem;
`;
export const SecondSection = styled.div`
  width: 100%;
  height: 71rem;
  margin: 20rem auto;
  display: flex;
`;
export const LeftSection = styled.div`
  margin-left: 8rem;
  background-color: ${({ theme }) => theme.colors.text};
  height: 37rem;
  width: 70rem;
  border-radius: 3.7rem;
  position: relative;
  & p {
    color: white;
    position: absolute;
    top: 12rem;
    left: 25rem;
    font-size: 3rem;
  }
`;
export const RightContent = styled.div`
  margin-left: auto;
  margin-right: 15rem;
`;
export const MidContent = styled.p`
  font-size: 6rem;
  font-weight: 700;
`;
export const MidSecContent = styled.p`
  font-size: 3rem;
`;