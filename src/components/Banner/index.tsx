import * as S from "./styles";
import BannerImg from "../../assets/banner.png";

export const Banner = () => {
  return (
    <S.ContainerBanner>
      <S.ContainerStatus>
        <S.WrapperStatus>
          <S.StatusNumber>10k+</S.StatusNumber>
          <S.StatusText>Artes</S.StatusText>
        </S.WrapperStatus>
        <S.WrapperStatus>
          <S.StatusNumber>10k+</S.StatusNumber>
          <S.StatusText>Artes</S.StatusText>
        </S.WrapperStatus>
        <S.WrapperStatus>
          <S.StatusNumber>10k+</S.StatusNumber>
          <S.StatusText>Artes</S.StatusText>
        </S.WrapperStatus>
      </S.ContainerStatus>
      <S.Content>
        <S.DescriptionsText>
          <S.DescriptionContainer>
            <S.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id
              <S.DescriptionLink>potenti diam</S.DescriptionLink> et cras odio
              viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc
              semper.
            </S.Description>
            <S.Title>Lorem ipsun</S.Title>
          </S.DescriptionContainer>
          <S.DescriptionContainer>
            <S.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id
              <S.DescriptionLink>potenti diam</S.DescriptionLink> et cras odio
              viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc
              semper.
            </S.Description>
            <S.Title>Lorem ipsun</S.Title>
          </S.DescriptionContainer>
        </S.DescriptionsText>
        <S.Img src={BannerImg} alt="banner" />
      </S.Content>
    </S.ContainerBanner>
  );
};
