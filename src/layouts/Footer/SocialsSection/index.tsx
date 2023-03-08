import { FC } from "react";
import { Icon } from "../../../components/buttons/Icon";
import * as S from "./style";

export const SocialsSection: FC = () => {
  return (
    <S.Container>
      <S.SocialsWrapper>
        <Icon>Facebook</Icon>
        <Icon>Linkedin</Icon>
        <Icon>Twitter</Icon>
        <Icon>Github</Icon>
        <Icon>Instagram</Icon>
      </S.SocialsWrapper>
    </S.Container>
  );
};
