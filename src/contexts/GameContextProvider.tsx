import React, { useState } from "react";
import { GameStatus } from "../helper";
//import { GameStatusContext } from "../contexts/GameContextProvider";

const initContextState = {
    gameStaus: {},
    setGameStatus: (status: any) => {},
};

export const GameStatusContext = React.createContext<any>(initContextState);

export function GameStatusProvider({ children }: any) {
    const [gameStatus, setGameStaus] = useState<GameStatus>({
        isGameOver: false,
        whoWon: null,
    });

    return (
        <GameStatusContext.Provider value={{ gameStatus, setGameStaus }}>
            {children}
        </GameStatusContext.Provider>
    );
}
