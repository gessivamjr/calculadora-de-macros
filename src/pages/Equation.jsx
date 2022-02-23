import Forms from "../components/Forms";
import Nav from "../components/Nav";
import { EquationContainer } from "../styles/styles";

export default function Equation() {
    return (
        <>
            <Nav />
            <EquationContainer>
                <Forms />
            </EquationContainer>
        </>
    );
}
