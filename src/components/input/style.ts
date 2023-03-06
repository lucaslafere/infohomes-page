import styled from "styled-components";

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
  padding: 9px 13px;

  background: ${({ theme }) => theme.Gray[0]};
  border: 1px solid ${({ theme }) => theme.Gray[15]};
  box-shadow: 0px 15px 16px -8px rgba(149, 149, 149, 0.1);
  border-radius: 4px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  :hover {
    border: 1px solid ${({ theme }) => theme.Gray[25]};
  }
  :focus {
    border: 1px solid ${({ theme }) => theme.Green[75]};
    outline: none;
  }
  ::placeholder {
    color: ${({ theme }) => theme.Gray[25]};
  }
`;
