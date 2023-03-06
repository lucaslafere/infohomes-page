import { FC } from "react";
import * as S from "./style";

interface iProps {
  children?: React.ReactNode;
}

export const Icon: FC<iProps> = ({ children }) => {
  return <S.Icon>{children}</S.Icon>;
};
