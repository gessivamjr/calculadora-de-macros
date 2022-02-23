import { Box, CalculatorContainer } from "../styles/styles";
import styled from "styled-components";
import UserProfile from "../components/UserProfile";
import { Link } from "react-router-dom";

export default function Calculator() {
    return (
        <CalculatorContainer>
            <UserProfile></UserProfile>
            <Box></Box>
            <Box></Box>
            <Link to="/" className="link">
                &#8592; Voltar
            </Link>
        </CalculatorContainer>
    );
}
