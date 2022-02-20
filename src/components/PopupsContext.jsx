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
