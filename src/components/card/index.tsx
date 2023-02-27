import { FC } from "react";
import * as S from "./style";

interface iProps {
  children: React.ReactNode;
}
export const Card: FC<iProps> = ({ children }) => {
  return <S.Card>{children}</S.Card>;
};
