import * as S from "./styles";

export const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterLogo>
        <S.LogoIconStyled />
        <S.WrapperIconArrow>
          <S.IconArrowTop size={40} />
        </S.WrapperIconArrow>
      </S.FooterLogo>

      <S.FooterLinks>
        <S.Newsletter>
          <S.NewsletterTitle>
            Fique por dentro de
            <S.NewsletterTitleColor> todas as novidades</S.NewsletterTitleColor>
          </S.NewsletterTitle>
          <S.NewsletterWrapper>
            <S.NewsletterInput placeholder="nft@rocketseat.com.br" />
            <S.NewsletterButton>Enviar</S.NewsletterButton>
          </S.NewsletterWrapper>
        </S.Newsletter>
        <S.Menu>
          <S.MenuWrapper>
            <S.List>
              <S.ListTitle>Empresas</S.ListTitle>
              <S.ListItem>
                <S.ListAnchor>Sobre</S.ListAnchor>
              </S.ListItem>
              <S.ListItem>
                <S.ListAnchor>Serviços</S.ListAnchor>
              </S.ListItem>
              <S.ListItem>
                <S.ListAnchor>Time</S.ListAnchor>
              </S.ListItem>
              <S.ListItem>
                <S.ListAnchor>Carreira</S.ListAnchor>
              </S.ListItem>
            </S.List>
            <S.List>
              <S.ListTitle>Mapa</S.ListTitle>
              <S.ListItem>
                <S.ListAnchor>Galeria</S.ListAnchor>
              </S.ListItem>
              <S.ListItem>
                <S.ListAnchor>Populares</S.ListAnchor>
              </S.ListItem>
              <S.ListItem>
                <S.ListAnchor>Vendas</S.ListAnchor>
              </S.ListItem>
              <S.ListItem>
                <S.ListAnchor>Contato</S.ListAnchor>
              </S.ListItem>
            </S.List>
            <S.List>
              <S.ListTitle>Links</S.ListTitle>
              <S.ListItem>
                <S.ListAnchor>FAQs</S.ListAnchor>
              </S.ListItem>
              <S.ListItem>
                <S.ListAnchor>Termos</S.ListAnchor>
              </S.ListItem>
              <S.ListItem>
                <S.ListAnchor>Politica</S.ListAnchor>
              </S.ListItem>
              <S.ListItem>
                <S.ListAnchor>Ajuda</S.ListAnchor>
              </S.ListItem>
            </S.List>
          </S.MenuWrapper>
        </S.Menu>
      </S.FooterLinks>

      <S.FooterCopyright>
        <S.LinkSite href="www.rockeatseat.com.br">
          www.rockeatseat.com.br
        </S.LinkSite>
        <S.Medias>
          <S.InstagramIcon size={25} />
          <S.YoutubeIcon size={25} />
          <S.TwiiterIcon size={25} />
          <S.EmailIcon size={25} />
        </S.Medias>
      </S.FooterCopyright>
    </S.FooterContainer>
  );
};
