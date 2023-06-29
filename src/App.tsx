import React from "react";
//import { BarChartLineFill } from "react-bootstrap-icons";
import "./App.css";
import Game from "./components/Game";
import { GameStatusProvider } from "./contexts/GameContextProvider";

function App() {
    return (
        <div className="container">
            <GameStatusProvider>
                <Game></Game>
            </GameStatusProvider>
        </div>
    );
}

export default App;

// eslint-disable-next-line no-lone-blocks
{
    /* <button className="btn btn-info">Hello world</button>
      <BarChartLineFill /> */
}
