import * as S from "./style";

type Props {
  children: React.ReactNode;
}

export default function Icon<Props>({ children }) {
  return <S.Icon>{children}</S.Icon>;
}
