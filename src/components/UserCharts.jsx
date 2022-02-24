import { Box, ChartsContent } from "../styles/styles";
import { Chart } from "react-google-charts";
import { CarbsContext, ProteinContext, FatContext } from "./Contexts";
import { useContext } from "react";

export default function UserCharts() {
    const [carbs, setCarbs] = useContext(CarbsContext);
    const [protein, setProtein] = useContext(ProteinContext);
    const [fat, setFat] = useContext(FatContext);

    const data = [
        ["Macros", "Proporção por TMB"],
        ["Carboidratos", +carbs * 4],
        ["Proteínas", +protein * 4],
        ["Gorduras", +fat * 9],
    ];

    const options = { backgroundColor: "none", width: 550, height: 400 };

    return (
        <Box>
            <ChartsContent>
                <h1 className="title">Proporção:</h1>
                <div className="graphic">
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                    />
                </div>
                <div className="disclaimer">
                    <sub className="disclaimer__text">
                        *Este conteúdo foi baseado nas Dietary Reference Intakes
                        (DRIs) internacionais, entretanto, por serem dados
                        genéricos, recomendamos fortemente a consulta de um
                        profissional da nutrição para estudar a sua
                        individualidade e planejar a sua dieta ao longo do
                        tempo.
                    </sub>
                </div>
            </ChartsContent>
        </Box>
    );
}
