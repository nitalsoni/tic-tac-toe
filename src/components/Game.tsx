import React, { useState, useContext } from "react";
import Board from "./Board";
import StartStop, { GameAction } from "./StartStop";
import { GameStatus } from "../helper";
import { GameStatusContext } from "../contexts/GameContextProvider";

export default function Game() {
    const [isEnabled, setIsEnabled] = useState<boolean>(true);
    const { gameStatus } = useContext(GameStatusContext);

    return (
        <div className="row">
            <StartStop
                onClick={(action: GameAction) => {
                    setIsEnabled(action === GameAction.Start);
                }}
            ></StartStop>
            <Board key="myboard"></Board>

            <h1>{gameStatus?.whoWon}</h1>
        </div>
    );
}
