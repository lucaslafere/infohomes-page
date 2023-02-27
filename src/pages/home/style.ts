import styled from "styled-components";

export const CallToAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 40vh;
  background: linear-gradient(
    45deg,
    ${(props) => props.theme.Green[25]},
    ${(props) => props.theme.Green[5]}
  );
`;
