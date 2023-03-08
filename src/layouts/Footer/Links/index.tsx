import { FC } from "react";
import { Community } from "../../../components/buttons/Community";
import * as S from "./style";

export const LinksSection: FC = () => {
  return (
    <S.LinksSection>
      <S.Badge>👋 InfoHomes</S.Badge>
      <S.CommunityWrapper>
        <Community>Top Opportunities</Community>
        <Community>Property Analytics</Community>
        <Community>Location Analytics</Community>
        <Community>Data Health</Community>
        <Community>Methodology</Community>
      </S.CommunityWrapper>
    </S.LinksSection>
  );
};
