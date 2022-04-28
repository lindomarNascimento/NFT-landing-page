import { listImage } from "../../mocks/IMAGE_COLLAGE";
import * as S from "./styles";

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
