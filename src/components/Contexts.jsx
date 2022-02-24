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

export const CarbsContext = createContext();
export function CarbsProvider({ children }) {
    const [carbs, setCarbs] = useState();
    return (
        <CarbsContext.Provider value={[carbs, setCarbs]}>
            {children}
        </CarbsContext.Provider>
    );
}

export const ProteinContext = createContext();
export function ProteinProvider({ children }) {
    const [protein, setProtein] = useState();
    return (
        <ProteinContext.Provider value={[protein, setProtein]}>
            {children}
        </ProteinContext.Provider>
    );
}

export const FatContext = createContext();
export function FatProvider({ children }) {
    const [fat, setFat] = useState();
    return (
        <FatContext.Provider value={[fat, setFat]}>
            {children}
        </FatContext.Provider>
    );
}
