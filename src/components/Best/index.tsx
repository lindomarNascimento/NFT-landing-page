import { BestEdit } from "../../mocks/BEST";
import * as S from "./styles";

export const Best = () => {
  return (
    <>
      {BestEdit.map((Best, index) => (
        <S.ContainerBest key={index}>
          <>
            <S.Title>
              {Best.title.Title}
              <S.ColorTitle> {Best.title.ColorTitle}</S.ColorTitle>
            </S.Title>
            <S.Content>
              {Best.content.map((Card) => (
                <S.Card key={Card.name}>
                  <S.CardImage src={`src/assets/${Card.img}`} />
                  <S.Wrapper>
                    <S.Name>{Card.name}</S.Name>
                    <S.Description>{Card.description}</S.Description>
                  </S.Wrapper>
                </S.Card>
              ))}
            </S.Content>
            <S.Link>
              Ver todos os artistas
              <S.CardIcon size={15} />
            </S.Link>
          </>
        </S.ContainerBest>
      ))}
    </>
  );
};
