import * as S from "./styles";
import { PopularEditions } from "../../mocks/POPULAR";

export const Popular = () => {
  return (
    <>
      {PopularEditions.map((edits, index) => (
        <S.ContainerPopular key={index}>
          <S.Title>
            <S.TitleColor>{edits.title.ColorTitle} </S.TitleColor>
            {edits.title.Title}
          </S.Title>
          <S.Content>
            <S.FirstLine>
              {edits.content.firstLine.map((card, index) => (
                <S.Card key={index}>
                  <S.CardTitle>
                    Astronauta {index + 1}
                    <S.CardIcon size={20} />
                  </S.CardTitle>
                  <S.CardDescription>
                    <S.Name>{card.name}</S.Name>
                    <S.Number>{card.number}</S.Number>
                  </S.CardDescription>
                  <S.Img src={`/src/assets/${card.img}`}></S.Img>
                </S.Card>
              ))}
            </S.FirstLine>
            <S.LastLine>
              {edits.content.secondLine.map((card, index) => (
                <S.Card key={index}>
                  <S.CardTitle>
                    Astronauta {index + 3}
                    <S.CardIcon size={20} />
                  </S.CardTitle>
                  <S.CardDescription>
                    <S.Name>{card.name}</S.Name>
                    <S.Number>{card.number}</S.Number>
                  </S.CardDescription>
                  <S.Img src={`./src/assets/${card.img}`}></S.Img>
                </S.Card>
              ))}
            </S.LastLine>
          </S.Content>
        </S.ContainerPopular>
      ))}
    </>
  );
};
