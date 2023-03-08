import { FC } from "react";
import { LinksSection } from "./Links";
import { SocialsSection } from "./SocialsSection";
import * as S from "./style";
import { SubscribeSection } from "./SubscribeSection";

export const Footer: FC = () => {
  return (
    <S.FooterContainer>
      <S.FooterWrapper>
        <LinksSection />
        <SubscribeSection />
        <SocialsSection />
      </S.FooterWrapper>
    </S.FooterContainer>
  );
};
