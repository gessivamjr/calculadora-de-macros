import styled from "styled-components";

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

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;

    button {
        padding: 10px;
        margin: 20px;
        font-size: 15px;
        border: 1px solid ${({ theme }) => theme.color.quaternary};
        box-shadow: 2.5px 2.5px red;
        background-color: ${({ theme }) => theme.color.primary};
    }

    .popup {
        display: flex;
        justify-content: center;
        position: absolute;
        top: 70px;
        left: 50px;
        width: 400px;
        height: 450px;
        background-color: ${({ theme }) => theme.color.primary};
        box-shadow: 5px 5px red;
    }

    .popup_um {
        display: flex;
        justify-content: center;
        position: absolute;
        top: 70px;
        right: 50px;
        width: 400px;
        height: 450px;
        background-color: ${({ theme }) => theme.color.primary};
        box-shadow: 5px 5px red;
    }

    .hide {
        display: none;
    }

    .close {
        position: absolute;
        left: 365px;
        bottom: 400px;
    }

    .close_um {
        box-shadow: 2.5px 2.5px red;
        position: absolute;
        right: 365px;
        bottom: 400px;
    }

    button:hover {
        background-color: ${({ theme }) => theme.color.secundary};
    }
`;

export const Oque = styled.div`
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

export const Sobre = styled.div`
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
