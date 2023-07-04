import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid black;
`;
export const Sec1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ImageWrap = styled.div`
  width: 50%;
  orange;
  text-align: right;
  margin-right: 2rem;
`;
export const UserImage = styled.img`
  width: 31rem;
  border-radius: 200px;
`;
export const ProfileWrap = styled.div`
  margin-left: 2rem;
  width: 50%;
`;
export const Wrapper1 = styled.div`
  display: flex;
  align-items: center;
`;
export const UserId = styled.h4`
  font-size: 2.6rem;
`;
export const PlusIcon = styled.img`
  width: 3.1rem;
  margin-left: 2rem;
  cursor: pointer;
`;
export const Wrapper2 = styled.div``;
export const FriendButton = styled.button`
  width: 11.4rem;
  height: 3.9rem;
  font-size: 1.4rem;

  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.lightpurple};
  color: ${({ theme }) => theme.colors.background};
  font-weight: 600;
  margin-right: 2rem;
  cursor: pointer;
  border: none;
`;
export const EditButton = styled.button`
  width: 11.4rem;
  cursor: pointer;
  height: 3.9rem;
  font-size: 1.4rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.strongpurple};
  color: ${({ theme }) => theme.colors.background};
  font-weight: 600;
  margin-right: 2rem;
`;

export const Wrapper3 = styled.div`
  span {
    font-size: 1.6rem;
    font-weight: 500;
    margin-right: 1rem;
  }
`;
export const Wrapper4 = styled.div``;

export const ProfileUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;
export const ProfileLi = styled.li`
  font-size: 1.8rem;
`;
export const Email = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 1.8rem;
`;
