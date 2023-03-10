import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 400px;
  background: ${({ theme }) => theme.Gray[5]};
  border-top: 1px solid ${({ theme }) => theme.Gray[10]};
`;
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
`;
