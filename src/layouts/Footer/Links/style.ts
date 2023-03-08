import styled from "styled-components";

export const LinksSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 36px 0;
  border-bottom: 1px solid ${({ theme }) => theme.Gray[10]};
`;
export const Badge = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
  img {
    width: 50px;
    height: 50px;
  }
`;
export const CommunityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 40px;
  width: 80%;
`;
