import { listImage } from "../../mocks/ImageCollage";
import * as S from "./styles";

import AvatarImg from "../../assets/group-avarts.png";

export const CollectionImages = () => {
  return (
    <S.ContainerImgs>
      {listImage.map((image, index) => (
        <S.Image key={index}>
          <S.Img
            src={`/src/assets/${image.img}`}
            alt={image.alt}
            title={image.title}
          />
        </S.Image>
      ))}
    </S.ContainerImgs>
  );
};
