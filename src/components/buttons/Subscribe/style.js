import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.Green75};
  width: 130px;
  height: 42px;
  padding: 9px 24px;
  border: 0;
  color: #fff;
`;
