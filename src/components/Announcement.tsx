import React, { useState, useContext, memo } from "react";
import { GameStatusContext } from "../contexts/GameContextProvider";
import { GameProgress, GameStatus } from "../helper";

function Announcement() {
    const { gameStatus } = useContext(GameStatusContext);

    console.log("Announcement rendered");
    return (
        <h2>
            {gameStatus.state === GameProgress.Over && gameStatus.winner
                ? `Winner is ${gameStatus.winner}`
                : ""}
        </h2>
    );
}

export default memo(Announcement);
