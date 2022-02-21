import { useContext } from "react";
import { Navbar } from "./styles/styles";
import { PopupOqueContext, PopupSobreContext } from "./Contexts";
import PopupOque from "./PopupOque";
import PopupSobre from "./PopupSobre";

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
