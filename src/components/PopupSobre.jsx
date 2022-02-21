import { useContext } from "react";
import { PopupSobreContext } from "./Contexts";
import { Sobre } from "./styles/styles";

export default function PopupSobre() {
    const [showPopupSobre, setShowPopupSobre] = useContext(PopupSobreContext);
    return (
        <div className={showPopupSobre ? "popup_um" : "popup_um hide"}>
            <Sobre>
                <h1>Metabolismo Basal</h1>
                <p>
                    Metabolismo é a denominação do conjunto de processos pelos
                    quais os nutrientes são manipulados para fornecer energia e
                    matéria prima para que o organismo desenvolva suas
                    atividades. A taxa de metabolismo basal (TMB) é composta
                    pelo total de calorias gastas para manter as funções vitais
                    do organismo (como a frequência cardíaca, respiração,
                    equilíbrio de pH sanguíneo e homeostase térmica) no
                    indivíduo em repouso físico e mental, após 12 horas de
                    jejum, em vigília e a uma temperatura ambiente de 20° C.
                </p>
                <sub>
                    Fonte:
                    https://www.sanarmed.com/equacao-de-harris-benedict-colunistas
                </sub>
                <button
                    onClick={() => setShowPopupSobre(null)}
                    className="close_um"
                >
                    X
                </button>
            </Sobre>
        </div>
    );
}
