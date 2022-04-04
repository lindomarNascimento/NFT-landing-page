import AvatarImg from "../../assets/group-avarts.png";
import { ReactComponent as SealIcon } from "../../assets/badge.svg";
import * as S from "./styles";
export const Presentation = () => {
  return (
    <S.ContainerPresentation>
      <S.Description>
        <S.DescriptionText>
          Mercado digital para colecionáveis em criptos e tokens não fungível
          (NFT). Compre, venda e descubra ativos digitais exclusivos para você.
        </S.DescriptionText>
        <S.Avatar>
          <S.ImageAvatar src={AvatarImg} />
          <S.AvatarContent>
            <S.QuantityAvatar>+10</S.QuantityAvatar>
            <S.TextAvatar>Artistas selecionados</S.TextAvatar>
          </S.AvatarContent>
        </S.Avatar>
      </S.Description>

      <S.Slogan>
        <S.SloganText>
          Descubra a verdadeira arte digital e colecione diversas{" "}
          <S.SloganBold>NFTs</S.SloganBold>
        </S.SloganText>
      </S.Slogan>

      <S.Seal>
        <SealIcon />
      </S.Seal>
    </S.ContainerPresentation>
  );
};
