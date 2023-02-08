import styled from "styled-components";

export const Community = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.Gray50};
`;
