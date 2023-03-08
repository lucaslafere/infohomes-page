import { FC } from "react";
import { LinksSection } from "./Links";
import * as S from "./style";
import { SubscribeSection } from "./SubscribeSection";

export const Footer: FC = () => {
  return (
    <S.FooterContainer>
      <S.FooterWrapper>
        <LinksSection />
        <SubscribeSection />
      </S.FooterWrapper>
    </S.FooterContainer>
  );
};
