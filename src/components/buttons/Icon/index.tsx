import { FC } from "react";
import * as S from "./style";

export interface iProps {
  children?: React.ReactNode;
  label?: string;
}

export const Icon: FC<iProps> = ({ children }) => {
  return <S.Icon>{children}</S.Icon>;
};
