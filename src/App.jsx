import { createGlobalStyle } from "styled-components";
import AllRoutes from "./routes";
import {
    PopupOqueProvider,
    PopupSobreProvider,
    ResultProvider,
} from "./components/Contexts";

const GlobaStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: black;
  font-family: Arial, Helvetica, sans-serif;
}
`;

export default function App() {
    return (
        <PopupOqueProvider>
            <PopupSobreProvider>
                <ResultProvider>
                    <GlobaStyle />
                    <AllRoutes />
                </ResultProvider>
            </PopupSobreProvider>
        </PopupOqueProvider>
    );
}
