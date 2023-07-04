import React, { useContext, useState } from "react";
import { GameStatusContext } from "../contexts/GameContextProvider";
import { GameProgress } from "../helper";

type IncDecCounterType = {
    onBoardSizeChange: (size: number) => void;
};

function isNumber(value?: string | number): boolean {
    return value != null && value !== "" && !isNaN(Number(value.toString()));
}

function IncDecCounter(props: IncDecCounterType) {
    const [boardSize, setBoardSize] = useState<number | string>(3);
    const { gameStatus } = useContext(GameStatusContext);

    return (
        <input
            type="text"
            className="text"
            value={boardSize}
            disabled={gameStatus.state === GameProgress.InPlay}
            style={{
                height: "40px",
                width: "50px",
                verticalAlign: "center",
                marginTop: "30px",
                fontSize: "30px",
                color: "Red",
            }}
            onChange={(e) => {
                if (isNumber(e.target.value) || e.target.value === "") {
                    setBoardSize(Number(e.target.value));
                    props.onBoardSizeChange(Number(e.target.value));
                }
            }}
        ></input>
    );
}

export default IncDecCounter;
