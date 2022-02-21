import { useContext } from "react";
import { Link } from "react-router-dom";
import { Box } from "../styles/styles";
import { ResultContext } from "./Contexts";

export default function Forms() {
    const [showResult, setShowResult] = useContext(ResultContext);

    function calculate() {
        const fieldWeight = document.getElementsByClassName("fields")[0];
        const fieldHeight = document.getElementsByClassName("fields")[1];
        const fieldAge = document.getElementsByClassName("fields")[2];
        let manRadio = document.getElementsByClassName("radio")[1].checked;
        let womanRadio = document.getElementsByClassName("radio")[3].checked;
        const manEquation =
            66 +
            13.7 * fieldWeight.value +
            5 * fieldHeight.value -
            6.8 * fieldAge.value;
        const womanEquation =
            665 +
            9.6 * fieldWeight.value +
            1.8 * fieldHeight.value -
            4.7 * fieldAge.value;

        if (manRadio == true) {
            return setShowResult(manEquation.toFixed(0));
        } else if (womanRadio == true) {
            return setShowResult(womanEquation.toFixed(0));
        }
    }

    function clearFields() {
        const inputs = document.querySelectorAll(".fields");
        inputs.forEach((input) => {
            input.value = "";
        });
        setShowResult(null);
    }

    {
        const allRadios = document.getElementsByName("radio_button");
        let booRadio;
        let x = 0;
        for (x = 0; x < allRadios.length; x++) {
            allRadios[x].onclick = function () {
                if (booRadio == this) {
                    this.checked = false;
                    booRadio = null;
                } else {
                    booRadio = this;
                }
            };
        }
    }

    return (
        <Box>
            <h1 className="title">Equação Harris Benedict</h1>
            <form>
                <div className="radio_buttons">
                    <label className="radio">Homem</label>
                    <input className="radio" type="radio" name="radio_button" />
                    <label className="radio">Mulher</label>
                    <input className="radio" type="radio" name="radio_button" />
                </div>
                <label>Peso(kg)</label>
                <input
                    className="fields"
                    type="number"
                    required
                    placeholder="0"
                />
                <label>Altura(cm)</label>
                <input
                    className="fields"
                    type="number"
                    required
                    placeholder="0"
                />
                <label>Idade</label>
                <input
                    className="fields"
                    type="number"
                    required
                    placeholder="0"
                />
            </form>
            <div>
                <button onClick={calculate} className="input_button">
                    Calcular
                </button>
                <button onClick={clearFields}>Limpar</button>
            </div>
            <h1 className={showResult ? "result" : "result hide"}>
                {showResult} kcal
            </h1>
            <Link to="/calculator/">Calculadora de Macros &#8594;</Link>
        </Box>
    );
}
