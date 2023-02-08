import styled from "styled-components";

export const Community = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.Gray50};
  :hover {
    color: ${({ theme }) => theme.Gray100};
  }
`;
