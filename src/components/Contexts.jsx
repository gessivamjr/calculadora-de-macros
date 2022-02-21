import { useState } from "react";
import { createContext } from "react";

export const PopupOqueContext = createContext();

export function PopupOqueProvider({ children }) {
    const [showPopupOque, setShowPopupOque] = useState(null);
    return (
        <PopupOqueContext.Provider value={[showPopupOque, setShowPopupOque]}>
            {children}
        </PopupOqueContext.Provider>
    );
}

export const PopupSobreContext = createContext();
export function PopupSobreProvider({ children }) {
    const [showPopupSobre, setShowPopupSobre] = useState(null);
    return (
        <PopupSobreContext.Provider value={[showPopupSobre, setShowPopupSobre]}>
            {children}
        </PopupSobreContext.Provider>
    );
}

export const ResultContext = createContext();
export function ResultProvider({ children }) {
    const [showResult, setShowResult] = useState();
    return (
        <ResultContext.Provider value={[showResult, setShowResult]}>
            {children}
        </ResultContext.Provider>
    );
}
