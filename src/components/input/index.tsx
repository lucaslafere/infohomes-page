import { FC } from "react";
import { Icon } from "../buttons/Icon";
import * as S from "./style";

interface iProps {
  placeholder: string;
  type: string;
  icon?: string;
}

export const Input: FC<iProps> = ({ placeholder, type, icon }) => {
  if (icon && placeholder) {
    placeholder = icon + " " + placeholder;
    return <S.Input placeholder={placeholder} type={type} />;
  }
  return <S.Input placeholder={placeholder} type={type} />;
};
