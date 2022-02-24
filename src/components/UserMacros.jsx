import { useContext } from "react";
import { Box, MacrosContent } from "../styles/styles";
import { CarbsContext, FatContext, ProteinContext } from "./Contexts";

export default function UserMacros() {
    const [carbs, setCarbs] = useContext(CarbsContext);
    const [protein, setProtein] = useContext(ProteinContext);
    const [fat, setFat] = useContext(FatContext);

    return (
        <Box>
            <MacrosContent>
                <h1 className="title">Seus macros:</h1>
                <div className="carbo">
                    <h3 className="carbo__title">Carboidratos:</h3>
                    <h1 className="carbo__value">{carbs}</h1>
                    <sub className="carbo__sub">(1g = 4kcal)</sub>
                </div>
                <div className="protein">
                    <h3 className="protein__title">Proteínas:</h3>
                    <h1 className="protein__value">{protein}</h1>
                    <sub className="protein__sub">(1g = 4kcal)</sub>
                </div>
                <div className="fat">
                    <h3 className="fat__title">Gorduras:</h3>
                    <h1 className="fat__value">{fat}</h1>
                    <sub className="fat__sub">(1g = 9kcal)</sub>
                </div>
            </MacrosContent>
        </Box>
    );
}
