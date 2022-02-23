import { useContext, useEffect } from "react";
import { Box, ProfileContent } from "../styles/styles";
import { ResultContext } from "./Contexts";

export default function UserProfile() {
    const [showResult, setShowResult] = useContext(ResultContext);
    useEffect(() => {
        const savedResult = localStorage.getItem("result");
        if (savedResult) {
            setShowResult(savedResult);
        }
    }, []);

    return (
        <Box>
            <ProfileContent>
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
                            name="objetive"
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
            </ProfileContent>
        </Box>
    );
}
