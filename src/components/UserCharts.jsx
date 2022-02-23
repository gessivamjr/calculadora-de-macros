import { Box, ChartsContent } from "../styles/styles";
import { Chart } from "react-google-charts";

const data = [
    ["Macros", "Proporção por TMB"],
    ["Carboidratos", 5],
    ["Proteínas", 3],
    ["Gorduras", 2],
];

const options = { backgroundColor: "none", width: 550, height: 400 };

export default function UserCharts() {
    return (
        <Box>
            <ChartsContent>
                <h1 className="title">Proporção:</h1>
                <div className="graphic">
                    <Chart chartType="PieChart" data={data} options={options} />
                </div>
                <div className="disclaimer">
                    <sub className="disclaimer__text">
                        *Este conteúdo foi baseado nas Dietary Reference Intakes
                        (DRIs) internacionais, entretanto recomendamos
                        fortemente a consulta de um profissional da nutrição
                        para estudar a sua individualidade e planejar a sua
                        dieta ao longo do tempo.
                    </sub>
                </div>
            </ChartsContent>
        </Box>
    );
}
