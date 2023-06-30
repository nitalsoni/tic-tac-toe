import React, { useState, useContext } from "react";
import { GameStatusContext } from "../contexts/GameContextProvider";
import Helper, { GameProgress, GameStatus } from "../helper";

type StartStopType = {
    onClick: (action: GameStatus) => void;
};

function StartStop(props: StartStopType) {
    const { gameStatus, setGameStatus } = useContext(GameStatusContext);

    const handleClick = () => {
        let result: GameStatus = { state: GameProgress.Unknown, winner: null };
        if (gameStatus?.state !== GameProgress.InPlay) {
            result.state = GameProgress.InPlay;
            setGameStatus({ ...result });
        } else {
            result.state = GameProgress.Over;
            setGameStatus({ ...result });
        }

        props.onClick(result);
    };

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={handleClick}
                style={{ width: "110px" }}
            >
                {gameStatus.state !== GameProgress.InPlay ? "PLAY" : "END GAME"}
            </button>
        </>
    );
}

export default StartStop;
