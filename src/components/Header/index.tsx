import { useState } from "react";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import { ReactComponent as MetalMaskIcon } from "../../assets/logo_MetaMask.svg";
import { listMenu } from "../../mocks/Menu";
import { SizeWidth } from "../../utils";

import * as S from "./styles";

export const Header = () => {
  const MenuMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
      setIsOpen(!isOpen);
    };

    return (
      <S.MenuMobileWrapper>
        <S.HamburguerIcon onClick={handleOpen} size={40} />
        <S.NavMob isOpen={isOpen}>
          <S.CloseIcon onClick={handleOpen} size={40}/>
          {listMenu.map((item) => (
            <S.NavItem key={item.id}>{item.category}</S.NavItem>
          ))}
        </S.NavMob>
        <S.BackgroundBlur isOpen={isOpen}/>

      </S.MenuMobileWrapper>
    );
  };

  return (
    <S.Header>
      {SizeWidth() <= 1024 && MenuMobile()}
      <S.Logo>
        <LogoIcon />
      </S.Logo>

      {SizeWidth() > 1024 && (
        <S.Nav>
          {listMenu.map((item) => (
            <S.NavItem key={item.id}>{item.category}</S.NavItem>
          ))}
        </S.Nav>
      )}

      <S.ButtonConect>
        <MetalMaskIcon />
        Conectar carteira
      </S.ButtonConect>
    </S.Header>
  );
};
