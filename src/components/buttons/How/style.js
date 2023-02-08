import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 24px;
  width: 170px;
  height: 42px;
  border: 1px solid ${({ theme }) => theme.Green25};
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.Green100};

  :hover {
    background-color: ${({ theme }) => theme.Green25};
  }
`;
