import styled from "styled-components";

export const EquationContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
`;

export const CalculatorContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    overflow: hidden;

    .link {
        position: absolute;
        top: 94%;
        right: 48.5%;
        font-size: larger;
        font-weight: bold;
        text-decoration: none;
        color: ${({ theme }) => theme.color.primary};
    }

    .link:hover {
        color: ${({ theme }) => theme.color.secundary};
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 450px;
    height: 550px;
    border: 1px solid ${({ theme }) => theme.color.quaternary};
    box-shadow: 5px 5px 5px red;
    background-color: ${({ theme }) => theme.color.primary};
`;

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;

    button {
        padding: 10px;
        margin: 20px;
        font-size: 15px;
        border: 1px solid ${({ theme }) => theme.color.quaternary};
        box-shadow: 2.5px 2.5px 2.5px red;
        background-color: ${({ theme }) => theme.color.primary};
    }

    button:hover {
        background-color: ${({ theme }) => theme.color.secundary};
    }

    .popup__oque {
        display: flex;
        justify-content: center;
        position: absolute;
        top: 70px;
        left: 50px;
        width: 400px;
        height: 450px;
        background-color: ${({ theme }) => theme.color.primary};
        box-shadow: 5px 5px 5px red;
    }

    .popup__sobre {
        display: flex;
        justify-content: center;
        position: absolute;
        top: 70px;
        right: 50px;
        width: 400px;
        height: 450px;
        background-color: ${({ theme }) => theme.color.primary};
        box-shadow: 5px 5px 5px red;
    }

    .popup__oque--button {
        box-shadow: 2.5px 2.5px 2.5px red;
        position: absolute;
        left: 365px;
        bottom: 400px;
    }

    .popup__sobre--button {
        box-shadow: 2.5px 2.5px 2.5px red;
        position: absolute;
        right: 365px;
        bottom: 400px;
    }

    .hide {
        display: none;
    }
`;

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .title {
        font-size: 35px;
        margin-top: 50px;
        margin-bottom: 40px;
    }

    .radios {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        position: relative;
        left: 7.5px;
    }

    .inputs {
        margin: auto;
        width: 50%;
        text-align: center;
    }

    .buttons {
        display: flex;
        justify-content: center;
        position: relative;
        right: 5px;
        margin-top: 10px;
    }

    .radios__button {
        margin-right: 5px;
    }

    .radios__label {
        margin-right: 20px;
        text-align: center;
    }

    .inputs__fields {
        width: 100%;
        margin-bottom: 15px;
        text-align: center;
        border: 1px solid ${({ theme }) => theme.color.quaternary};
    }

    .buttons__form {
        margin-left: 10px;
        width: 80px;
        padding: 5px;
        font-size: 15px;
        border: 1px solid ${({ theme }) => theme.color.quaternary};
        box-shadow: 1.5px 1.5px 1.5px red;
        background-color: ${({ theme }) => theme.color.primary};
    }

    .buttons__form:hover {
        background-color: ${({ theme }) => theme.color.secundary};
    }

    .result {
        font-size: 40px;
        margin-top: 35px;
        margin-bottom: 35px;
    }

    .hide {
        display: none;
    }

    .link {
        position: absolute;
        top: 570px;
        font-size: large;
        font-weight: bold;
        color: black;
    }

    .link:hover {
        color: ${({ theme }) => theme.color.quaternary};
    }
`;

export const PopupContent = styled.div`
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

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 15px;
    padding: 30px;
    text-align: center;

    .TMB,
    .biotype,
    .objective {
        margin-bottom: 50px;
    }

    .title {
        font-size: 40px;
        margin-bottom: 40px;
    }

    .TMB__title,
    .biotype__title,
    .objective__title {
        font-size: 20px;
        margin-bottom: 15px;
    }

    .TMB__value {
        font-size: 40px;
    }

    .biotype__label,
    .objective__label {
        font-size: 20px;
    }

    .biotype__radio {
        margin-right: 5px;
        margin-left: 10px;
    }

    .objective__block {
        margin-bottom: 7.5px;
    }

    .objective__radio {
        margin-right: 5px;
    }
`;

export const MacrosContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 15px;
    padding: 30px;
    text-align: center;

    .carbo,
    .protein,
    .fat {
        margin-bottom: 40px;
    }

    .title {
        font-size: 40px;
        margin-bottom: 40px;
    }

    .carbo__title,
    .protein__title,
    .fat__title {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .carbo__value,
    .protein__value,
    .fat__value {
        font-size: 40px;
    }

    .carbo__sub,
    .protein__sub,
    .fat__sub{
        font-size: 12.5px;
        word-spacing: 2.5px;
        letter-spacing: 0.5px;
    }

`;

export const ChartsContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    padding: 30px;
    text-align: center;
    max-width: 100%;
    max-height: 100%;

    .title {
        font-size: 40px;
        margin-bottom: 35px;
    }

    .graphic{
        position: relative;
        bottom: 60px;
        right: 25px;
    }

    .disclaimer{
        position: relative;
        bottom: 100px;
    }

    .disclaimer__text{
        font-size: 12.5px;
        word-spacing: 2.5px;
        letter-spacing: 0.5px;
    }
`;
