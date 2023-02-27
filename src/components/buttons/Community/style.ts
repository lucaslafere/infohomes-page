import styled from "styled-components";

export const Community = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.Gray[50]};
  :hover {
    color: ${({ theme }) => theme.Gray[100]};
  }
`;
