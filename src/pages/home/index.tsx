import { FC } from "react";
import { Community } from "../../components/buttons/Community";
import { How } from "../../components/buttons/How";
import { Icon } from "../../components/buttons/Icon";
import { Subscribe } from "../../components/buttons/Subscribe";
import { Card } from "../../components/card";
import * as S from "./style";

export const Home: FC = () => {
  return (
    <S.CallToAction>
      <Card>
        <Icon>iconezao</Icon>
        <How />
        <Subscribe />
        <Community>Facebookzada</Community>
      </Card>
    </S.CallToAction>
  );
};
