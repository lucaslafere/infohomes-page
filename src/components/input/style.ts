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

  font-family: ${({ theme }) => theme.typography.Body1.font};
  font-weight: ${({ theme }) => theme.typography.Body1.weight};
  font-size: ${({ theme }) => theme.typography.Body1.size};
  line-height: ${({ theme }) => theme.typography.Body1.lineHeight};

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
