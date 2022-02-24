import { useContext, useEffect } from "react";
import { Box, ProfileContent } from "../styles/styles";
import {
    ResultContext,
    CarbsContext,
    ProteinContext,
    FatContext,
} from "./Contexts";

export default function UserProfile() {
    const [showResult, setShowResult] = useContext(ResultContext);
    const [carbs, setCarbs] = useContext(CarbsContext);
    const [protein, setProtein] = useContext(ProteinContext);
    const [fat, setFat] = useContext(FatContext);

    useEffect(() => {
        const savedResult = localStorage.getItem("result");
        if (savedResult) {
            setShowResult(savedResult);
        }
    }, []);

    const biotypeRadios = document.getElementsByClassName("biotype__radio");
    const objectiveRadios = document.getElementsByClassName("objective__radio");

    function setMacros() {
        const ectomorfo = biotypeRadios[0].checked;
        const mesomorfo = biotypeRadios[1].checked;
        const endomorfo = biotypeRadios[2].checked;
        const fatLoss = objectiveRadios[0].checked;
        const maintain = objectiveRadios[1].checked;
        const gain = objectiveRadios[2].checked;

        if (ectomorfo && fatLoss) {
            setCarbs(((((+showResult - 100) / 100) * 40) / 4).toFixed(0));
            setProtein(((((+showResult - 100) / 100) * 40) / 4).toFixed(0));
            setFat(((((+showResult - 100) / 100) * 20) / 9).toFixed(0));
        }

        if (mesomorfo && fatLoss) {
            setCarbs(((((+showResult - 175) / 100) * 40) / 4).toFixed(0));
            setProtein(((((+showResult - 175) / 100) * 40) / 4).toFixed(0));
            setFat(((((+showResult - 175) / 100) * 20) / 9).toFixed(0));
        }

        if (endomorfo && fatLoss) {
            setCarbs(((((+showResult - 250) / 100) * 40) / 4).toFixed(0));
            setProtein(((((+showResult - 250) / 100) * 40) / 4).toFixed(0));
            setFat(((((+showResult - 250) / 100) * 20) / 9).toFixed(0));
        }

        if (ectomorfo && maintain) {
            setCarbs(((((+showResult + 150) / 100) * 50) / 4).toFixed(0));
            setProtein(((((+showResult + 150) / 100) * 30) / 4).toFixed(0));
            setFat(((((+showResult + 150) / 100) * 20) / 9).toFixed(0));
        }

        if ((mesomorfo && maintain) || (endomorfo && maintain)) {
            setCarbs((((+showResult / 100) * 50) / 4).toFixed(0));
            setProtein((((+showResult / 100) * 30) / 4).toFixed(0));
            setFat((((+showResult / 100) * 20) / 9).toFixed(0));
        }

        if (ectomorfo && gain) {
            setCarbs(((((+showResult + 500) / 100) * 60) / 4).toFixed(0));
            setProtein(((((+showResult + 500) / 100) * 20) / 4).toFixed(0));
            setFat(((((+showResult + 500) / 100) * 20) / 9).toFixed(0));
        }

        if ((mesomorfo && gain) || (endomorfo && gain)) {
            setCarbs(((((+showResult + 250) / 100) * 60) / 4).toFixed(0));
            setProtein(((((+showResult + 250) / 100) * 20) / 4).toFixed(0));
            setFat(((((+showResult + 250) / 100) * 20) / 9).toFixed(0));
        }
    }

    return (
        <Box>
            <ProfileContent>
                <h1 className="title">Seu perfil:</h1>
                <div className="TMB">
                    <h3 className="TMB__title">Sua TMB:</h3>
                    <h1 className="TMB__value">{showResult} kcal</h1>
                </div>
                <div className="biotype">
                    <h3 className="biotype__title">Seu biotipo:</h3>
                    <input
                        type="radio"
                        className="biotype__radio"
                        name="biotype"
                    />
                    <label className="biotype__label">Ectomorfo</label>
                    <input
                        type="radio"
                        className="biotype__radio"
                        name="biotype"
                    />
                    <label className="biotype__label">Mesomorfo</label>
                    <input
                        type="radio"
                        className="biotype__radio"
                        name="biotype"
                    />
                    <label className="biotype__label">Endomorfo</label>
                </div>
                <div className="objective">
                    <h3 className="objective__title">Seu objetivo:</h3>
                    <div className="objective__block">
                        <input
                            type="radio"
                            className="objective__radio"
                            name="objective"
                        />
                        <label className="objective__label">
                            Perda de gordura
                        </label>
                    </div>
                    <div className="objective__block">
                        <input
                            type="radio"
                            className="objective__radio"
                            name="objective"
                        />
                        <label className="objective__label">
                            Manutenção de peso
                        </label>
                    </div>
                    <div className="objective__block">
                        <input
                            type="radio"
                            className="objective__radio"
                            name="objective"
                        />
                        <label className="objective__label">
                            Ganho de massa
                        </label>
                    </div>
                </div>
                <button onClick={setMacros} className="button">
                    Calcular
                </button>
            </ProfileContent>
        </Box>
    );
}
