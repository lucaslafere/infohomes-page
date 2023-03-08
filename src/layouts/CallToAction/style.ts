import styled from "styled-components";

export const CallToAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 496px;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.Green[25]},
    ${({ theme }) => theme.Green[5]}
  );
`;
