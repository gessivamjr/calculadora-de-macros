import styled from "styled-components";
import { useState } from "react";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  width: 450px;
  height: 550px;
  border: 1px solid ${({ theme }) => theme.color.quaternary};
  box-shadow: 7.5px 7.5px red;
  background-color: ${({ theme }) => theme.color.primary};

  button {
    width: 80px;
    padding: 5px;
    font-size: 15px;
    border: 1px solid ${({ theme }) => theme.color.quaternary};
    box-shadow: 1.5px 1.5px red;
    background-color: ${({ theme }) => theme.color.primary};
  }

  button:hover {
    background-color: ${({ theme }) => theme.color.secundary};
  }

  .input_button {
    margin-right: 10px;
  }

  .title {
    font-size: 35px;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .radio_buttons {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    position: relative;
    left: 5px;
  }

  .radio {
    margin-right: 10px;
  }

  label {
    text-align: center;
    display: block;
  }

  .fields {
    width: 100%;
    margin-bottom: 15px;
  }

  input {
    text-align: center;
    border: 1px solid ${({ theme }) => theme.color.quaternary};
  }

  .result {
    font-size: 40px;
    margin-top: 35px;
    margin-bottom: 35px;
  }

  .hide {
    display: none;
  }

  a {
    position: absolute;
    top: 570px;
    font-size: large;
    font-weight: bold;
    color: black;
  }

  a:hover {
    color: ${({ theme }) => theme.color.quaternary};
  }
`;

export default function Forms() {
  const [showResult, setShowResult] = useState();

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
      return setShowResult(manEquation);
    } else if (womanRadio == true) {
      return setShowResult(womanEquation);
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
        <input className="fields" type="number" required placeholder="0" />
        <label>Altura(cm)</label>
        <input className="fields" type="number" required placeholder="0" />
        <label>Idade</label>
        <input className="fields" type="number" required placeholder="0" />
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
      <a href="">Calculadora de Macros &#8594;</a>
    </Box>
  );
}
