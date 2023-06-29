import React, { useState, useContext } from "react";
import { GameStatusContext } from "../contexts/GameContextProvider";

type SquareType = {
    row: number;
    column: number;
    value: string | null;
    onNextElement: () => string;
    onSelection: (row: number, column: number, value: string) => void;
};

export default function Square(props: SquareType) {
    const [element, setElement] = useState<string>(props.value!);
    const { gameStatus } = useContext(GameStatusContext);

    const onSelection = () => {
        if (!element) {
            let xo = props.onNextElement();
            setElement(xo);
            props.onSelection(props.row, props.column, xo);
        }
    };

    return (
        <button
            className="square"
            onClick={onSelection}
            disabled={gameStatus?.isGameOver}
        >
            {element}
        </button>
    );
}
