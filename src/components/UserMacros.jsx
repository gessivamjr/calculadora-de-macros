import { Box, MacrosContent } from "../styles/styles";

export default function UserMacros() {
    return (
        <Box>
            <MacrosContent>
                <h1 className="title">Seus macros:</h1>
                <div className="carbo">
                    <h3 className="carbo__title">Carboidratos:</h3>
                    <h1 className="carbo__value">X</h1>
                    <sub className="carbo__sub">(1g = 4kcal)</sub>
                </div>
                <div className="protein">
                    <h3 className="protein__title">Proteínas:</h3>
                    <h1 className="protein__value">X</h1>
                    <sub className="protein__sub">(1g = 4kcal)</sub>
                </div>
                <div className="fat">
                    <h3 className="fat__title">Gorduras:</h3>
                    <h1 className="fat__value">X</h1>
                    <sub className="fat__sub">(1g = 9kcal)</sub>
                </div>
            </MacrosContent>
        </Box>
    );
}
