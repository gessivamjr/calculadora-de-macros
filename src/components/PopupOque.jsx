import { useContext } from "react";
import { PopupOqueContext } from "./PopupsContext";
import styled from "styled-components";

const Oque = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;

  h1 {
    margin-bottom: 25px;
    font-size: 35px;
  }

  p {
    margin-bottom: 25px;
    word-spacing: 5px;
    letter-spacing: 1px;
  }
`;

export default function PopupOque() {
  const [showPopupOque, setshowPopupOque] = useContext(PopupOqueContext);
  return (
    <>
      <div className={showPopupOque ? "popup" : "popup hide"}>
        <Oque>
          <h1>Para que serve?</h1>
          <p>
            Uma ferramenta básica da nutrição completou 100 anos em 2019 desde o
            primeiro estudo que a validou para a comunidade científica – a
            equação ou fórmula de Harris Benedict vem sendo utilizada para
            estimar a taxa do metabolismo basal, baseado em parâmetros
            personalizáveis, como peso, idade, grau de atividade diária e sexo,
            que podem entrar na equação como fatores multiplicadores. Ainda é
            uma fórmula amplamente utilizada na rotina de profissionais que
            lidam com nutrição e esporte.
          </p>
          <sub>
            Fonte:
            https://www.sanarmed.com/equacao-de-harris-benedict-colunistas
          </sub>
          <button onClick={() => setshowPopupOque(null)} className="close">
            X
          </button>
        </Oque>
      </div>
    </>
  );
}
