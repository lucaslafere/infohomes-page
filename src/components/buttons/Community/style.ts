import styled from "styled-components";

export const Community = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-family: ${({ theme }) => theme.typography.Button2.font};
  font-weight: ${({ theme }) => theme.typography.Button2.weight};
  font-size: ${({ theme }) => theme.typography.Button2.size};
  line-height: ${({ theme }) => theme.typography.Button2.lineHeight};

  color: ${({ theme }) => theme.Gray[50]};
  :hover {
    color: ${({ theme }) => theme.Gray[100]};
  }
`;
