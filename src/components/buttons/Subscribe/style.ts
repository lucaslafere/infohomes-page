import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.Green[75]};
  width: 130px;
  height: 42px;
  padding: 9px 24px;
  border: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.Gray[0]};
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.Green[100]};
  }
`;
