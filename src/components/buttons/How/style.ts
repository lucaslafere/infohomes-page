import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 24px;
  width: 170px;
  height: 42px;
  border: 1px solid ${({ theme }) => theme.Green[25]};
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;

  font-family: ${({ theme }) => theme.typography.Button1.font};
  font-weight: ${({ theme }) => theme.typography.Button1.weight};
  font-size: ${({ theme }) => theme.typography.Button1.size};
  line-height: ${({ theme }) => theme.typography.Button1.lineHeight};

  color: ${({ theme }) => theme.Green[100]};

  :hover {
    background-color: ${({ theme }) => theme.Green[25]};
  }
`;
