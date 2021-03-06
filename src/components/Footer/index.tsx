import { FooterLinks } from "../../mocks/FOTTER/links";
import * as S from "./styles";

export const Footer = () => {
  const backtoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.FooterLogo>
          <S.LogoIconStyled />
          <S.WrapperIconArrow onClick={backtoTop}>
            <S.IconArrowTop size={40} />
          </S.WrapperIconArrow>
        </S.FooterLogo>
        <S.FooterLinks>
          <S.Newsletter>
            <S.NewsletterTitle>
              Fique por dentro de
              <S.NewsletterTitleColor>
                todas as novidades
              </S.NewsletterTitleColor>
            </S.NewsletterTitle>
            <S.NewsletterWrapper>
              <S.NewsletterInput placeholder="nft@rocketseat.com.br" />
              <S.NewsletterButton>Enviar</S.NewsletterButton>
            </S.NewsletterWrapper>
          </S.Newsletter>
          <S.Menu>
            <S.MenuWrapper>
              {FooterLinks.menu.map((item, index) => (
                <S.List key={index}>
                  <S.ListTitle>{item.title}</S.ListTitle>
                  {item.links.map((item) => (
                    <S.ListItem key={item.name}>
                      <S.ListAnchor href={item.link}>{item.name}</S.ListAnchor>
                    </S.ListItem>
                  ))}
                </S.List>
              ))}
            </S.MenuWrapper>
          </S.Menu>
        </S.FooterLinks>
        <S.FooterCopyright>
          <S.LinkSite href="www.rockeatseat.com.br">
            www.rockeatseat.com.br
          </S.LinkSite>
          <S.Medias>
            <S.Anchor href={FooterLinks.medias.instagram}>
              <S.InstagramIcon size={25} />
            </S.Anchor>
            <S.Anchor href={FooterLinks.medias.youtube}>
              <S.YoutubeIcon size={25} />
            </S.Anchor>
            <S.Anchor href={FooterLinks.medias.twitter}>
              <S.TwiiterIcon size={25} />
            </S.Anchor>
            <S.Anchor href={FooterLinks.medias.email}>
              <S.EmailIcon size={25} />
            </S.Anchor>
          </S.Medias>
        </S.FooterCopyright>
      </S.FooterContent>
    </S.FooterContainer>
  );
};
