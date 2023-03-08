import { FC } from "react";
import { Subscribe } from "../../../components/buttons/Subscribe";
import { Input } from "../../../components/input";
import * as S from "./style";

export const SubscribeSection: FC = () => {
  return (
    <S.SubscribeSection>
      <S.TextWrapper>
        <S.SubscribeTitle>Subscribe to our newsletter</S.SubscribeTitle>
        <S.SubscribeDescription>
          The latest news, articles, and resources, sent to your inbox weekly.
        </S.SubscribeDescription>
      </S.TextWrapper>
      <S.SubscribeForm>
        <Input type="email" placeholder="Enter your email" />
        <Subscribe />
      </S.SubscribeForm>
    </S.SubscribeSection>
  );
};
