import styled from "styled-components";

export const CallToAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.Green[25]},
    ${({ theme }) => theme.Green[5]}
  );
`;
