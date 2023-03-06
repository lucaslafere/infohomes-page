import { FC } from "react";
import * as S from "./style";

export interface iProps {
  children?: React.ReactNode;
  label?: string;
}

export const Community: FC<iProps> = ({ children }) => {
  return <S.Community>{children}</S.Community>;
};
