import styled from "styled-components";

export const SubscribeSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 36px;
  margin-bottom: 80px;
`;
export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 40%;
  gap: 2px;
`;
export const SubscribeTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-family: ${({ theme }) => theme.typography.Caption1.font};
  font-size: ${({ theme }) => theme.typography.Caption1.size};
  font-weight: ${({ theme }) => theme.typography.Caption1.weight};
  line-height: ${({ theme }) => theme.typography.Caption1.lineHeight};
  color: ${({ theme }) => theme.Gray[75]};
`;
export const SubscribeDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  font-family: ${({ theme }) => theme.typography.Body2.font};
  font-size: ${({ theme }) => theme.typography.Body2.size};
  font-weight: ${({ theme }) => theme.typography.Body2.weight};
  line-height: ${({ theme }) => theme.typography.Body2.lineHeight};
  color: ${({ theme }) => theme.Gray[50]};
`;
export const SubscribeForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 60%;
`;
