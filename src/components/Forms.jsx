import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, FormContent } from "../styles/styles";
import { ResultContext } from "./Contexts";

export default function Forms() {
    const [showResult, setShowResult] = useContext(ResultContext);

    useEffect(() => {
        if (showResult) {
            localStorage.setItem("result", showResult);
        }
    }, [showResult]);

    useEffect(() => {
        const savedResult = localStorage.getItem("result");
        if (savedResult) {
            setShowResult(savedResult);
        }
    }, []);

    function calculate() {
        const fieldWeight =
            document.getElementsByClassName("inputs__fields")[0];
        const fieldHeight =
            document.getElementsByClassName("inputs__fields")[1];
        const fieldAge = document.getElementsByClassName("inputs__fields")[2];
        const manRadio =
            document.getElementsByClassName("radios__button")[0].checked;
        const womanRadio =
            document.getElementsByClassName("radios__button")[1].checked;
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

        if (manRadio === true) {
            return setShowResult(manEquation.toFixed(0));
        } else if (womanRadio === true) {
            return setShowResult(womanEquation.toFixed(0));
        }
    }

    function clearFields() {
        const inputs = document.querySelectorAll(".inputs__fields");
        inputs.forEach((input) => {
            input.value = "";
        });
        setShowResult(null);
    }

    return (
        <Box>
            <FormContent>
                <h1 className="title">Equação Harris Benedict</h1>
                <form>
                    <div className="radios">
                        <input
                            className="radios__button"
                            type="radio"
                            name="gender"
                        />
                        <label className="radios__label">Homem</label>
                        <input
                            className="radios__button"
                            type="radio"
                            name="gender"
                        />
                        <label className="radios__label">Mulher</label>
                    </div>
                    <div className="inputs">
                        <label className="inputs__label">Peso(kg)</label>
                        <input
                            className="inputs__fields"
                            type="number"
                            required
                            placeholder="0"
                        />
                        <label className="inputs__label">Altura(cm)</label>
                        <input
                            className="inputs__fields"
                            type="number"
                            required
                            placeholder="0"
                        />
                        <label className="inputs__label">Idade</label>
                        <input
                            className="inputs__fields"
                            type="number"
                            required
                            placeholder="0"
                        />
                    </div>
                </form>
                <div className="buttons">
                    <button onClick={calculate} className="buttons__form">
                        Calcular
                    </button>
                    <button onClick={clearFields} className="buttons__form">
                        Limpar
                    </button>
                </div>

                <h1 className={showResult ? "result" : "result hide"}>
                    {showResult} kcal
                </h1>
                <Link to="/calculator/" className="link">
                    Calculadora de Macros &#8594;
                </Link>
            </FormContent>
        </Box>
    );
}
