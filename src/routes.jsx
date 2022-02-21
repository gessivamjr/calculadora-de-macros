import { Routes, Route } from "react-router-dom";
import Calculator from "./pages/Calculator";
import Equation from "./pages/Equation";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Equation />} />
            <Route path="/calculator/" element={<Calculator />} />
        </Routes>
    );
}
