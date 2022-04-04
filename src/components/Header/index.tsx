import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import { ReactComponent as MetalMaskIcon } from "../../assets/logo_MetaMask.svg";
import { listMenu } from "../../mocks/Menu";

import * as S from "./styles";

export const Header = () => {
  return (
    <S.Header>
      <S.Logo>
        <LogoIcon />
      </S.Logo>
      <S.Nav>
        {listMenu.map((item) => (
          <S.NavItem key={item.id}>{item.category}</S.NavItem>
        ))}
      </S.Nav>
      <S.ButtonConect>
        <MetalMaskIcon />
        Conectar carteira
      </S.ButtonConect>
    </S.Header>
  );
};
