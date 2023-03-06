import { FC } from "react";
import * as S from "./style";

interface iProps {
  children?: React.ReactNode;
}

export const Community: FC<iProps> = ({ children }) => {
  return <S.Community>{children}</S.Community>;
};
