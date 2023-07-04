import React, { useState, useContext } from "react";
import Board from "./Board";
import StartStop from "./StartStop";
import { GameStatus } from "../helper";
import { GameStatusContext } from "../contexts/GameContextProvider";
import Announcement from "./Announcement";
import PlayerChoice, { Icon } from "./PlayerChoice";

export default function Game() {
    const [count, setCount] = useState(0);
    const { gameStatus } = useContext(GameStatusContext);

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

    return (
        <div>
            <div className="row">
                <div className="col-6 d-flex aligns-items-center justify-content-center">
                    <PlayerChoice
                        key="player1"
                        choices={["XLg", "XCircle", "XDiamond", "XOctagonFill"]}
                        onClick={(selected: string) => {
                            updateChoice("X", selected);
                        }}
                    ></PlayerChoice>
                </div>
                <div className="col-6 d-flex aligns-items-center justify-content-center">
                    <PlayerChoice
                        key="player2"
                        choices={[
                            "Circle",
                            "RecordCircle",
                            "CircleHalf",
                            "CircleFill",
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
                            <Board key={count} iconChoice={iconChoice}></Board>
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
