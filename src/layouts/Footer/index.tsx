import { FC } from "react";
import { LinksSection } from "./Links";
import * as S from "./style";

export const Footer: FC = () => {
  return (
    <S.FooterContainer>
      <S.FooterWrapper>
        <LinksSection />
      </S.FooterWrapper>
    </S.FooterContainer>
  );
};
