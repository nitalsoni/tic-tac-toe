import React, { useState } from "react";
import { GameProgress, GameStatus } from "../helper";
//import { GameStatusContext } from "../contexts/GameContextProvider";

const initContextState = {
    gameStaus: { state: GameProgress.Over, winner: null },
    setGameStatus: (status: any) => {},
};

export const GameStatusContext = React.createContext<any>(initContextState);

export function GameStatusProvider({ children }: any) {
    const [gameStatus, setGameStatus] = useState<GameStatus>({
        state: GameProgress.Over,
        winner: null,
    });

    return (
        <GameStatusContext.Provider value={{ gameStatus, setGameStatus }}>
            {children}
        </GameStatusContext.Provider>
    );
}
