import { FC } from "react";
import * as S from "./style";

export interface iProps {
  children?: React.ReactNode;
  label?: string;
}
export const Card: FC<iProps> = ({ children }) => {
  return <S.Card>{children}</S.Card>;
};
