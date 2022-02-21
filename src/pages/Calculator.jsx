import styled from "styled-components";
import { Box } from "../styles/styles";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100vh;
`;

export default function Calculator() {
    return (
        <Container>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </Container>
    );
}
