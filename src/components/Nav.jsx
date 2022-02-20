import { useContext } from "react";
import styled from "styled-components";
import { PopupOqueContext, PopupSobreContext } from "./PopupsContext";
import PopupOque from "./PopupOque";
import PopupSobre from "./PopupSobre";

const Navbar = styled.nav`
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

export default function Nav() {
  const [showPopupOque, setShowPopupOque] = useContext(PopupOqueContext);
  const [showPopupSobre, setShowPopupSobre] = useContext(PopupSobreContext);

  return (
    <Navbar>
      <button onClick={(event) => setShowPopupOque(event.currentTarget)}>
        O que é?
      </button>
      <button onClick={(event) => setShowPopupSobre(event.currentTarget)}>
        Sobre
      </button>
      <PopupOque />
      <PopupSobre />
    </Navbar>
  );
}
