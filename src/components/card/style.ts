import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.Gray[0]};
  border-radius: 4px;
  padding: 20px;
  gap: 16px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.03),
    0px 16px 24px -10px rgba(149, 149, 149, 0.2);
  :hover {
    transform: scale(1.05);
  }
`;
