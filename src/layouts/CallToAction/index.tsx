import { FC } from "react";
import { Community } from "../../components/buttons/Community";
import { How } from "../../components/buttons/How";
import { Icon } from "../../components/buttons/Icon";
import { Subscribe } from "../../components/buttons/Subscribe";
import { Card } from "../../components/card";
import { Input } from "../../components/input";
import * as S from "./style";

export const CallToAction: FC = () => {
  return (
    <S.CallToAction>
      <Card>
        <Icon>iconezao</Icon>
        <How />
        <Subscribe />
        <Community>Facebookzada</Community>
        <Input type="search" placeholder="testando input" />
      </Card>
    </S.CallToAction>
  );
};
