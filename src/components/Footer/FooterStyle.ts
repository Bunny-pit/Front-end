import styled from "styled-components";

export const FooterStyle = styled.div`
  width: 100%;
  background: #181820;
  color: #fff;
  font-size: 1.8rem;
  .wrapper {
    height: 24rem;
    margin: 0 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .sec1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 7.6rem;
      height: 10.5rem;
    }
    .vector {
      margin: 0 0 0 5rem;
      height: 10rem;
    }
  }
  .sec2 {
    width: 35rem;
    text-align: right;
    p {
      color: #fb9bf9;
      font-weight: 600;
    }
    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      padding: 0;
      li {
        a {
          text-decoration: none;
          color: #fff;
          padding: 0.2rem 0 0.2rem 0.8rem;
        }
      }
    }
    a {
      color: #b3b3b3;
      padding: 0.2rem 0 0.2rem 0.8rem;
      text-decoration: none;
    }
  }
`;
