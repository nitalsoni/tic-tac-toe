import React, { useState, useContext } from "react";
import Square from "./Square";
import Helper, { GameProgress, GameStatus } from "../helper";
import { GameStatusContext } from "../contexts/GameContextProvider";
import { XOIconChoice } from "./Game";

export default function Board(props: BoardType) {
    const [boardSize, setBoardSize] = useState<number>(3);
    const [isXNext, setisXNext] = useState<boolean>(true);
    const { gameStaus, setGameStatus } = useContext(GameStatusContext);

    const [matrix, setMatrix] = useState<string[][]>(
        Array.from({ length: boardSize }, () =>
            Array.from({ length: boardSize }, () => "")
        )
    );

    const onSquareSelection = (row: number, column: number, value: string) => {
        let copy = [...matrix];
        copy[row][column] = value;
        setMatrix(copy);
        let status: GameStatus = Helper.GetGameStatus(
            matrix,
            value,
            row,
            column
        );
        if (status.state !== GameProgress.InPlay) setGameStatus({ ...status });
    };

    const nextElement = (): string => {
        if (isXNext) {
            setisXNext((x) => !x);
            return "X";
        } else {
            setisXNext(!isXNext);
            return "0";
        }
    };

    return (
        <div>
            {matrix.map((row, rowIndex) => (
                <div>
                    {row.map((column, columnIndex) => (
                        <Square
                            key={columnIndex + rowIndex}
                            row={rowIndex}
                            column={columnIndex}
                            value={matrix[rowIndex][columnIndex]}
                            onSelection={onSquareSelection}
                            onNextElement={nextElement}
                            iconChoice={props.iconChoice}
                        ></Square>
                    ))}
                </div>
            ))}
        </div>
    );
}

type BoardType = {
    //onSelection: (status: GameStatus) => void;
    //isEnabled: boolean;
    iconChoice: XOIconChoice[];
};
