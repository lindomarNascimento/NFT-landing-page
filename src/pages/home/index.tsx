import {
  Banner,
  Best,
  CollectionImages,
  Header,
  Popular,
  Presentation
} from "../../components";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.ContainerHeader>
      <Header />
      <Presentation />
      <CollectionImages />
      <Banner />
      <Popular />
      <Best />
    </S.ContainerHeader>
  );
};
