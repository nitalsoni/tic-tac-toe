import React, { useState } from "react";
import Board from "./Board";
import StartStop from "./StartStop";
import { GameStatus } from "../helper";
import Announcement from "./Announcement";
import PlayerChoice from "./PlayerChoice";
import IncDecCounter from "./IncDecCounter";

export default function Game() {
    const [count, setCount] = useState(0);
    const [boardSize, setBoardSize] = useState<number>(3);

    console.log("Game comp rendered");

    const [iconChoice, setIconChoice] = useState<XOIconChoice[]>([
        { XO: "X", IconName: "XLg" },
        { XO: "0", IconName: "Circle" },
    ]);

    const updateChoice = (xo: string, iconName: string) => {
        const updated = iconChoice.map((item, i) => {
            return xo === item.XO ? { ...item, IconName: iconName } : item;
        });
        setIconChoice(updated);
    };

    const onBoardSizeChange = (size: number) => {
        //debugger;
        //if (size > 3 && size < 10) setBoardSize(size);
        //else setBoardSize(3);
        //setBoardSize(() => (size > 3 && size < 10 ? size : 3));
        setBoardSize(size);
    };

    return (
        <div>
            <div className="row">
                <div className="col-5 d-flex aligns-items-center justify-content-center">
                    <PlayerChoice
                        key="player1"
                        bgColor="royalblue"
                        playerName="Player-1"
                        defaultIcon="XLg"
                        choices={[
                            "XLg",
                            "XCircle",
                            "XDiamond",
                            "XOctagonFill",
                            "ClipboardX",
                            "ShieldX",
                        ]}
                        onClick={(selected: string) => {
                            updateChoice("X", selected);
                        }}
                    ></PlayerChoice>
                </div>
                <div className="col-2 d-flex aligns-items-center justify-content-center">
                    <IncDecCounter
                        onBoardSizeChange={onBoardSizeChange}
                    ></IncDecCounter>
                </div>
                <div className="col-5 d-flex aligns-items-center justify-content-center">
                    <PlayerChoice
                        key="player2"
                        bgColor="#e6258f"
                        playerName="Player-2"
                        defaultIcon="Circle"
                        choices={[
                            "Circle",
                            "RecordCircle",
                            "CircleHalf",
                            "CircleFill",
                            "Alarm",
                            "Balloon",
                        ]}
                        onClick={(selected: string) => {
                            updateChoice("0", selected);
                        }}
                    ></PlayerChoice>
                </div>
            </div>
            <div className="full-height">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex aligns-items-center justify-content-center">
                            <h1 className="glowing-title">Tic-Tac-Toe</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex aligns-items-center justify-content-center">
                            <Board
                                key={count}
                                iconChoice={iconChoice}
                                boardSize={boardSize}
                            ></Board>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "10px" }}>
                        <div className="col d-flex aligns-items-center justify-content-center">
                            <StartStop
                                onClick={(action: GameStatus) => {
                                    setCount(count + 1);
                                }}
                            ></StartStop>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "10px" }}>
                        <div className="col d-flex aligns-items-center justify-content-center">
                            <Announcement></Announcement>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export type XOIconChoice = {
    XO: string;
    IconName: string;
};
