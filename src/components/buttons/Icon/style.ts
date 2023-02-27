import styled from "styled-components";

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 36px;
  height: 36px;
  color: ${({ theme }) => theme.Gray[50]};
  :hover {
    color: ${({ theme }) => theme.Gray[100]};
  }
  img {
    width: 24px;
    height: 24px;
  }
`;
