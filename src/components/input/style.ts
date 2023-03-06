import styled from "styled-components";

//create an input component styled with styled-components and export it
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
`;
//create an icon component styled with styled-components and export it
export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
