import React, { useState, useContext } from "react";
import Board from "./Board";
import StartStop from "./StartStop";
import { GameStatus } from "../helper";
import { GameStatusContext } from "../contexts/GameContextProvider";
import Announcement from "./Announcement";

export default function Game() {
    const [count, setCount] = useState(0);
    const { gameStatus } = useContext(GameStatusContext);

    return (
        <div className="center-div">
            <div>
                <h1 className="glowing-title">Tic-Tac-Toe</h1>
                <Board key={count}></Board>
                <StartStop
                    onClick={(action: GameStatus) => {
                        setCount(count + 1);
                    }}
                ></StartStop>
                <Announcement></Announcement>
            </div>
        </div>
    );
}
