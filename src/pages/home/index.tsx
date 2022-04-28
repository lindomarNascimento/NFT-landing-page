import {
  Banner,
  Best,
  CollectionImages,
  Footer,
  Header,
  Popular,
  Presentation,
} from "../../components";
import * as S from "./styles";

export const Home = () => {
  return (
    <>
      <Header />
      <S.ContainerCenter>
        <Presentation />
        <CollectionImages />
        <Banner />
        <Popular />
        <Best />
      </S.ContainerCenter>
      <Footer />
    </>
  );
};
