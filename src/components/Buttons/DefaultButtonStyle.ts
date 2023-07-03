import styled from 'styled-components';

export const DefaultBtn = styled.button`
  width: 830px;
  height: 88px;
  border-radius: 21px;
  border: none;
  background-color: ${({ theme }) => theme.colors.maincolor};
  cursor: pointer;
`;
