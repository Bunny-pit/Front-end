import styled from "styled-components";

export const HedearStyle = styled.div`
  border-bottom: 0.1rem solid #db7bf9;

  .wrapper {
    margin: 0 4rem;
    height: 13rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 6.3rem;
    }
    ul {
      padding: 0 3rem;
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      li {
        margin: 0 3rem;
        a {
          text-decoration: none;
          font-size: 2rem;
          color: black;
          padding: 1rem 1.5rem;
        }
      }
    }
    .option {
      width: 3.4rem;
      height: 3.4rem;
    }
  }
`;
