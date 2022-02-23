import { CalculatorContainer } from "../styles/styles";
import UserProfile from "../components/UserProfile";
import UserMacros from "../components/UserMacros";
import UserCharts from "../components/UserCharts";
import { Link } from "react-router-dom";

export default function Calculator() {
    return (
        <CalculatorContainer>
            <UserProfile />
            <UserMacros />
            <UserCharts />
            <Link to="/" className="link">
                &#8592; Voltar
            </Link>
        </CalculatorContainer>
    );
}
